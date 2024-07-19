import './Marquee.css';
import { connectWebSocket } from '../../utils/websocket';
import { removeStockSelection } from '../../utils/removeCards';

export const cardStocks = {};

// Take symbols from localStorage
export let symbols = JSON.parse(localStorage.getItem('symbols')) || [
  'AAPL',
  'BINANCE:BTCUSDT',
  'IC MARKETS:1',
  'BINANCE:BNBBTC',
  'TSLA',
  'MSFT',
  'META',
  'UPOW',
  'ETH/BTC',
  'BINANCE:LTCBTC',
];

localStorage.setItem('symbols', JSON.stringify(symbols));

export const connectToWebSocket = (symbols) => {
  connectWebSocket(symbols, cardStocks);
};

// Create cards

export const renderCardElements = (symbolList) => {
  const marquee = document.getElementById('marquee');
  marquee.innerHTML = '';

  const marqueeSlide = document.createElement('div');
  marqueeSlide.className = 'marquee-slide';

  symbolList.forEach((symbol) => {
    const cardStock = document.createElement('div');
    cardStock.id = `card-${symbol}`;
    cardStock.className = 'card-stock';

    const stock = document.createElement('h5');
    stock.id = `stock-${symbol}`;
    stock.textContent = symbol;

    const stockPrice = document.createElement('p');
    stockPrice.id = `stock-price-${symbol}`;
    stockPrice.textContent = '';

    const variation = document.createElement('p');
    variation.id = `variation-${symbol}`;
    variation.textContent = '';

    const remove = document.createElement('img');
    remove.src = '/assets/Remove.png';
    remove.alt = 'Remove';
    remove.addEventListener('click', () => removeStockSelection(symbol));

    cardStock.append(remove, stock, stockPrice, variation);
    marqueeSlide.appendChild(cardStock);
    marquee.append(marqueeSlide);
  });
  // Clone marqueeSlide
  const cloneMarqueeSlide = marqueeSlide.cloneNode(true);
  marquee.append(cloneMarqueeSlide);
};

export const getCardStockElements = (symbol) => {
  const stockElement = document.getElementById(`stock-${symbol}`);
  const stockPriceElement = document.getElementById(`stock-price-${symbol}`);
  const variationElement = document.getElementById(`variation-${symbol}`);

  return {
    stock: stockElement,
    stockPrice: stockPriceElement,
    variation: variationElement,
  };
};

export const Marquee = () => {
  connectToWebSocket(symbols);
  renderCardElements(symbols);
  return;
};
