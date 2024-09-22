const selectCascaval = document.querySelector('#cascaval');
const displayCascaval = document.querySelector('.burger-cascaval img');
const imgDescriptionCascaval = document.querySelector('.burger-cascaval .img-description'); 
const divBox = document.querySelector('#cascavalDiv');
const summaryCascaval = document.querySelector('.result-cascaval ');

selectCascaval.addEventListener('change', () => {
    if (selectCascaval.value === 'no_selection') {
      displayCascaval.style.display = 'none';
      imgDescriptionCascaval.style.display = 'none';
      divBox.style.display = 'none';
      summaryCascaval.textContent = ''; 
    } else if (selectCascaval.value === 'cheddar') {
      displayCascaval.src = 'https://burgercraft.md/img/addons/2017-10-16/cheddar.svg';
      imgDescriptionCascaval.textContent = 'Cașcaval Chedar'; 
      divBox.style.display = 'block';
      summaryCascaval.textContent = 'Cașcaval Chedar: 10 lei';
    } else if (selectCascaval.value === 'dorblu') {
      displayCascaval.src = '	https://burgercraft.md/img/addons/2017-10-16/1238688899_cascaval-dorblu.svg'; 
      imgDescriptionCascaval.textContent = 'Cașcaval dorblu'; 
      divBox.style.display = 'block';
      summaryCascaval.textContent = 'Cașcaval dorblu: 12 lei';
    }
  });


  const updateClonedCascavalElement = (selectElement, imageElement, descriptionElement) => {
    selectElement.addEventListener('change', () => {
      switch (selectElement.value) {
        case 'no_selection':
          imageElement.style.display = 'none';
          descriptionElement.style.display = 'none';
          summaryCascaval.textContent = '';
          break;
        case 'cheddar':
          imageElement.src = 'https://burgercraft.md/img/addons/2017-10-16/cheddar.svg';
          descriptionElement.textContent = 'Cașcaval Chedar';
          summaryCascaval.textContent = 'Cașcaval Chedar: 10 lei';
          break;
        case 'dorblu':
          imageElement.src = '	https://burgercraft.md/img/addons/2017-10-16/1238688899_cascaval-dorblu.svg';
          descriptionElement.textContent = 'Cașcaval dorblu';
          summaryCascaval.textContent = 'Cașcaval dorblu: 12 lei';
          break;
      }
    });
  };
  
  export { updateClonedCascavalElement };
  