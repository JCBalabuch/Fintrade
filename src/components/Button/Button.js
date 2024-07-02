import './Button.css';

export const Button = (title, action, parent) => {
  const button = document.createElement('button');
  button.textContent = title;
  button.id = `${title}`;
  button.className = 'buttons-news';
  button.addEventListener('click', action);
  parent.append(button);
};
