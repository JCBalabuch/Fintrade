import './News.css';
import { Button } from '../Button/Button';

const mainURL = import.meta.env.VITE_URL_FETCH;
const token = import.meta.env.VITE_API_KEY;
const categories = ['general', 'forex', 'crypto', 'merger'];

// Get News from Finnhub
export const getNews = (category) => {
  const newsURL = `${mainURL}news?category=${category}&minId=10&token=${token}`;

  fetch(newsURL)
    .then((response) =>
      response.json().then((data) => {
        const newsContainer = document.getElementById('news-container');
        newsContainer.innerHTML = '';

        // Render news
        data.forEach((newsItem) => {
          const newsElement = document.createElement('div');
          newsElement.className = 'news-item';

          const newsImage = document.createElement('img');
          newsImage.src = newsItem.image;
          newsImage.alt = newsItem.headline;

          const textNews = document.createElement('div');
          textNews.className = 'text-news';

          const newsTitle = document.createElement('a');
          newsTitle.href = newsItem.url;
          newsTitle.textContent = newsItem.headline;
          newsTitle.target = '_blank';

          const newsSummary = document.createElement('p');
          newsSummary.textContent = newsItem.summary;

          textNews.append(newsTitle, newsSummary);
          newsElement.append(newsImage, textNews);
          newsContainer.appendChild(newsElement);
        });
      })
    )
    .catch((error) => console.error('Error fetching news: ', error));
};

// Create Buttons
export const newsButtons = () => {
  const newsButtonsElement = document.getElementById('news-buttons');

  categories.forEach((category) => {
    const buttonTitle = category.toUpperCase();
    const buttonAction = () => getNews(category);

    Button(buttonTitle, buttonAction, newsButtonsElement);
  });
};
