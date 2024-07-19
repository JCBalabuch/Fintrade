import './PickerStock.css';
import { stockData } from '../../data/data';
import { connectToWebSocket, renderCardElements } from '../Marquee/Marquee';

// Take symbols from localStorage
let symbols = JSON.parse(localStorage.getItem('symbols'));

// Handle stock selection in localStorage
const handleStockSelection = (e) => {
  const selectedStockSymbol = e.target.value;

  let storedStocks = JSON.parse(localStorage.getItem('symbols'));

  if (
    !storedStocks.includes(selectedStockSymbol) &&
    selectedStockSymbol !== '---'
  ) {
    storedStocks.push(selectedStockSymbol);
    localStorage.setItem('symbols', JSON.stringify(storedStocks));
  }

  symbols = storedStocks;
  renderCardElements(symbols);
  connectToWebSocket(symbols);

  // Reset select
  // document.getElementById('stock-select').value = '---';
};

// Create Select Stock Data
export const pickerStockData = () => {
  const stockPicker = document.getElementById('stockPicker');

  const stockLabel = document.createElement('label');
  stockLabel.for = 'stockLabel';
  stockLabel.innerHTML = 'Select Stock Market';

  const stockSelect = document.createElement('select');
  stockSelect.name = 'Stocks';
  stockSelect.id = 'stock-select';

  stockSelect.addEventListener('change', handleStockSelection);

  const whiteOption = document.createElement('option');
  whiteOption.value = '---';
  whiteOption.text = '---';
  stockSelect.appendChild(whiteOption);

  stockData.forEach((stock) => {
    const stockOption = document.createElement('option');
    stockOption.value = stock.symbol;
    stockOption.text = stock.description;

    stockSelect.append(stockOption);
  });

  stockPicker.append(stockLabel, stockSelect);
};
