import {
  connectToWebSocket,
  renderCardElements,
  symbols,
} from '../components/Marquee/Marquee';

// Remove cards
export const removeStockSelection = (symbol) => {
  let storedStocks = JSON.parse(localStorage.getItem('symbols'));

  const stockIndex = storedStocks.indexOf(symbol);
  if (stockIndex !== -1) {
    storedStocks.splice(stockIndex, 1);
    localStorage.setItem('symbols', JSON.stringify(storedStocks));
  }

  let symbols = storedStocks;
  renderCardElements(symbols);
  connectToWebSocket(symbols);
};
