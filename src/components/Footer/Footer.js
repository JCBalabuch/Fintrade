import './Footer.css';

export const Footer = () => {
  const footerElement = document.createElement('footer');
  footerElement.id = 'footer';

  footerElement.innerHTML = `
        <div class='rrss'>
            <ul>
                <li>
                    <a href='mailto:balabuchj@gmail.com'>
                        <img src='/assets/JCBSLogo.png' alt='JCBS Logo'/>
                    </a>
                </li>
                <li>
                    <a href='https://www.linkedin.com/in/jenifferbalabuch/' target='_blank'>
                        <img src='/assets/Linkedin.png' alt='Linkedin Logo'/>
                    </a>
                </li>
                <li>
                    <a href='https://github.com/JCBalabuch' target='_blank'>
                        <img src='/assets/Github.png' alt='Github Logo'/>
                    </a>
                </li>
            </ul>
        </div>
        <div class='copyright'>
            <p>Copyright 2024 - JCBS</p>
        </div>
        `;

  document.querySelector('#app').appendChild(footerElement);
};
