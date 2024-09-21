const selectCascaval = document.querySelector('#cascaval');
const displayCascaval = document.querySelector('.burger-cascaval img');
const imgDescriptionCascaval = document.querySelector('.burger-cascaval .img-description'); 


selectCascaval.addEventListener('change', () => {
    if (selectCascaval.value === 'no_selection') {
      displayCascaval.style.display = 'none';
      imgDescriptionCascaval.style.display = 'none';
    } else if (selectCascaval.value === 'cheddar') {
      displayCascaval.src = 'https://burgercraft.md/img/addons/2017-10-16/cheddar.svg';
      imgDescriptionCascaval.textContent = 'Cașcaval Chedar'; 
    } else if (selectCascaval.value === 'dorblu') {
      displayCascaval.src = '	https://burgercraft.md/img/addons/2017-10-16/1238688899_cascaval-dorblu.svg'; 
      imgDescriptionCascaval.textContent = 'Cașcaval dorblu'; 
    }
  });


  const updateClonedCascavalElement = (selectElement, imageElement, descriptionElement) => {
    selectElement.addEventListener('change', () => {
      switch (selectElement.value) {
        case 'no_selection':
          imageElement.style.display = 'none';
          descriptionElement.style.display = 'none';
          break;
        case 'cheddar':
          imageElement.src = 'https://burgercraft.md/img/addons/2017-10-16/cheddar.svg';
          descriptionElement.textContent = 'Cașcaval Chedar';
          break;
        case 'dorblu':
          imageElement.src = '	https://burgercraft.md/img/addons/2017-10-16/1238688899_cascaval-dorblu.svg';
          descriptionElement.textContent = 'Cașcaval dorblu';
          break;
      }
    });
  };
  
  export { updateClonedCascavalElement };
  