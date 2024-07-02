import './Main.css';
import { newsButtons, getNews } from '../News/News';

export const Main = () => {
  const mainElement = document.createElement('main');
  mainElement.id = 'main';

  mainElement.innerHTML = `
        <section>
          <div class='buttons-container'>
            <p>Search the news by</p>
            <div id='news-buttons'></div>     
          </div>
          <div id='news-container'></div>
        </section>
        `;

  document.querySelector('#app').appendChild(mainElement);

  document.addEventListener('DOMContentLoaded', () => {
    newsButtons();

    // Initial News load
    getNews('general');
  });
};
