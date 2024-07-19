import './Header.css';
import { Marquee } from '../Marquee/Marquee';
import { pickerStockData } from '../PickerStock/PickerStock';

export const Header = () => {
  const headerElement = document.createElement('header');
  headerElement.id = 'header';

  headerElement.innerHTML = `
      <div class='marquee-container'>
        <div id='stockPicker'></div>  
        <div id='marquee'></div>  
      </div>
      <div class='logo'>
          <img src='/assets/FintradeLogo.png' alt='Fintrade Logo'/>
          <h1>FINTRADE</h1>
      </div>
      `;

  document.querySelector('#app').appendChild(headerElement);

  pickerStockData();
  Marquee();
};
