const selectTopping = document.querySelector('#topping');
const displayTopping = document.querySelector('.burger-image.burger-topping img');
const imgDescriptionTopping = document.querySelector('.burger-image.burger-topping .img-description');

const toppingOptions = {
  'no_selection': { src: '', text: '', display: 'none' },
  'bacon': { src: 'https://burgercraft.md/img/addons/2017-10-16/bacon-crocant.svg', text: 'Bacon crocant', display: 'block' },
  'ou-prajit': { src: 'https://burgercraft.md/img/addons/2017-10-16/ou-prajit.svg', text: 'Ou prǎjit', display: 'block' },
  'ceapa-marin': { src: 'https://burgercraft.md/img/addons/2017-10-16/ceapa-marinata.svg', text: 'Ceapa marin.', display: 'block' },
  'ceapa-caramel': { src: '	https://burgercraft.md/img/addons/2017-10-16/ceapa-caramelizata.svg', text: 'Ceapa caramel', display: 'block' },
  'castraveti-murati': { src: '	https://burgercraft.md/img/addons/2017-10-25/1186812026_castraveti-murati.svg', text: 'Castraveți murați', display: 'block' },
  'castraveti-proaspeti': { src: 'https://burgercraft.md/img/addons/2017-10-25/castraveti-proaspeti.svg', text: 'Castraveți proaspeți', display: 'block' },
  'rosii': { src: 'https://burgercraft.md/img/addons/2017-10-25/rosii.svg', text: 'Roşii', display: 'block' },
  'iceberg': { src: 'https://burgercraft.md/img/addons/2017-10-26/salata-iceberg.svg', text: 'Iceberg', display: 'block' }
};

selectTopping.addEventListener('change', () => {
  const selectedValue = selectTopping.value;
  const option = toppingOptions[selectedValue];
  displayTopping.src = option.src;
  imgDescriptionTopping.textContent = option.text;
  displayTopping.style.display = option.display;
  imgDescriptionTopping.style.display = option.display;
});