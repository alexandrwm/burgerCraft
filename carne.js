const selectCarne = document.querySelector('#carne');
const displayCarne = document.querySelector('.burger-carne-vita img');
const imgDescription = document.querySelector('.burger-carne-vita .img-description'); 


selectCarne.addEventListener('change', () => {
    if (selectCarne.value === 'pui-pane') {
      displayCarne.src = 'https://burgercraft.md/img/addons/2017-10-16/pirjoala-de-pui.svg';
      imgDescription.textContent = 'FILEU PUI PANE'; // Update the description
    } else if (selectCarne.value === 'vita') {
      displayCarne.src = 'https://burgercraft.md/img/addons/2017-10-16/pirjoala-de-vita.svg';
      imgDescription.textContent = 'PÂRJOALǍ VITǍ'; // Update the description
    } else if (selectCarne.value === 'pui-grill') {
      displayCarne.src = 'https://burgercraft.md/img/addons/2017-10-16/pirjoala-de-pui.svg'; // Replace with appropriate image
      imgDescription.textContent = 'FILEU PUI GRILL'; // Update the description
    }
  });