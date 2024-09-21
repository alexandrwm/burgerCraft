const selectCarne = document.querySelector('#carne');
const displayCarne = document.querySelector('.burger-carne-vita img');
const imgDescription = document.querySelector('.burger-carne-vita .img-description'); 
selectCarne.addEventListener('change', () => {
    if (selectCarne.value === 'pui-pane') {
      displayCarne.src = 'https://burgercraft.md/img/addons/2017-10-16/pirjoala-de-pui.svg';
      imgDescription.textContent = 'FILEU PUI PANE'; 
    } else if (selectCarne.value === 'vita') {
      displayCarne.src = 'https://burgercraft.md/img/addons/2017-10-16/pirjoala-de-vita.svg';
      imgDescription.textContent = 'PÂRJOALǍ VITǍ'; 
    } else if (selectCarne.value === 'pui-grill') {
      displayCarne.src = 'https://burgercraft.md/img/addons/2017-10-16/pirjoala-de-pui.svg'; 
      imgDescription.textContent = 'FILEU PUI GRILL'; n
    }});


const updateClonedMeatElement = (selectElement, imageElement, descriptionElement) => {
  selectElement.addEventListener('change', () => {
    switch (selectElement.value) {
      case 'pui-pane':
        imageElement.src = 'https://burgercraft.md/img/addons/2017-10-16/pirjoala-de-pui.svg';
        descriptionElement.textContent = 'FILEU PUI PANE';
        break;
      case 'vita':
        imageElement.src = 'https://burgercraft.md/img/addons/2017-10-16/pirjoala-de-vita.svg';
        descriptionElement.textContent = 'PÂRJOALǍ VITǍ';
        break;
      case 'pui-grill':
        imageElement.src = 'https://burgercraft.md/img/addons/2017-10-16/pirjoala-de-pui.svg';
        descriptionElement.textContent = 'FILEU PUI GRILL';
        break;
    }
  });
};

export { updateClonedMeatElement };
