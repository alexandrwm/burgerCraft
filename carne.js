const selectCarne = document.querySelector('#carne');
const displayCarne = document.querySelector('.burger-carne-vita img');
const imgDescription = document.querySelector('.burger-carne-vita .img-description'); 
const summaryCarne = document.querySelector('.result-meat');

const updateSummary = (selectedOption) => {
    const price = selectedOption.dataset.price; 
    summaryCarne.textContent = `${imgDescription.textContent}: ${price} lei`; 
};

selectCarne.addEventListener('change', () => {
    const selectedOption = selectCarne.options[selectCarne.selectedIndex];

    if (selectCarne.value === 'pui-pane') {
        displayCarne.src = 'https://burgercraft.md/img/addons/2017-10-16/pirjoala-de-pui.svg';
        imgDescription.textContent = 'FILEU PUI PANE'; 
        updateSummary(selectedOption); 

    } else if (selectCarne.value === 'vita') {
        displayCarne.src = 'https://burgercraft.md/img/addons/2017-10-16/pirjoala-de-vita.svg';
        imgDescription.textContent = 'PÂRJOALǍ VITǍ'; 
        updateSummary(selectedOption); 

    } else if (selectCarne.value === 'pui-grill') {
        displayCarne.src = 'https://burgercraft.md/img/addons/2017-10-16/pirjoala-de-pui.svg'; 
        imgDescription.textContent = 'FILEU PUI GRILL'; 
        updateSummary(selectedOption); 
    }
});

const updateClonedSummary = (summaryElement, descriptionElement, price) => {
  summaryElement.textContent = `Carne selectată: ${descriptionElement.textContent} - ${price} lei`;
};

const updateClonedMeatElement = (selectElement, imageElement, descriptionElement, summaryElement) => {
  selectElement.addEventListener('change', () => {
      const selectedOption = selectElement.options[selectElement.selectedIndex]; 
      const price = selectedOption.dataset.price;

      if (selectElement.value === 'pui-pane') {
          imageElement.src = 'https://burgercraft.md/img/addons/2017-10-16/pirjoala-de-pui.svg';
          descriptionElement.textContent = 'FILEU PUI PANE';
          updateClonedSummary(summaryElement, descriptionElement, price); 

      } else if (selectElement.value === 'vita') {
          imageElement.src = 'https://burgercraft.md/img/addons/2017-10-16/pirjoala-de-vita.svg';
          descriptionElement.textContent = 'PÂRJOALǍ VITǍ';
          updateClonedSummary(summaryElement, descriptionElement, price); 

      } else if (selectElement.value === 'pui-grill') {
          imageElement.src = 'https://burgercraft.md/img/addons/2017-10-16/pirjoala-de-pui.svg';
          descriptionElement.textContent = 'FILEU PUI GRILL';
          updateClonedSummary(summaryElement, descriptionElement, price); 
      }
  });
};

export { updateClonedMeatElement };
