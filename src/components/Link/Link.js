export const linkTemplate = (href, src, alt) => {
  const liLink = document.createElement('li');
  const anchorLink = document.createElement('a');
  const imgLink = document.createElement('img');

  anchorLink.href = href;
  anchorLink.target = '_blank';

  imgLink.src = src;
  imgLink.alt = alt;

  anchorLink.appendChild(imgLink);
  liLink.appendChild(anchorLink);

  return liLink;
};
