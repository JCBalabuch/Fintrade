import {
  cardStocks,
  getCardStockElements,
} from '../components/Marquee/Marquee';

let originPrice = {};

const mainURL = 'wss://ws.finnhub.io?token=';
const token = import.meta.env.VITE_API_KEY;
const wsURL = `${mainURL}${token}`;

export const connectWebSocket = (symbols, cardStocks) => {
  const socket = new WebSocket(wsURL);

  // Open connection

  socket.addEventListener('open', (event) => {
    console.log('Conexión establecida');

    symbols.forEach((symbol) => {
      socket.send(JSON.stringify({ type: 'subscribe', symbol }));
      cardStocks[symbol] = getCardStockElements(symbol);
    });
  });

  // Listen for messages

  socket.addEventListener('message', (event) => {
    const data = JSON.parse(event.data);

    const item = data.data[0];

    let { stock, stockPrice, variation } = cardStocks[item.s];

    if (!originPrice[item.s]) {
      originPrice[item.s] = item.p;
    }

    const currentPrice = item.p;
    const variationValue = currentPrice - originPrice[item.s];
    const variationPercentage = (variationValue / originPrice[item.s]) * 100;

    stock.textContent = item.s;
    stockPrice.textContent = currentPrice.toFixed(2);
    variation.textContent = `${variationPercentage.toFixed(3)} %`;

    variation.style.color =
      variationPercentage < 0
        ? 'var(--negative-color)'
        : variationPercentage > 0
        ? 'var(--positive-color)'
        : 'var(--secondary-color)';
  });

  // Close connection

  socket.addEventListener('close', (event) => {
    console.log('Coneccion cerrada');
  });

  // Error connection

  socket.addEventListener('error', (event) => {
    console.log('Error en la conexión', error);
  });
};
