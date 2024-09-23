import { updateClonedMeatElement } from './carne.js'; 
import { updateClonedSosBElement } from './sos-bottom.js'; 
import { updateClonedCascavalElement } from './cascaval.js'; 
import { updateClonedSosElement } from './sos-top.js';
import{ updateClonedToppingElement} from './topping.js';

const addMeatBtn = document.querySelector('.add-meat-item');
const addSosBtn = document.querySelector('.add-sos-item');
const addSosTopBtn = document.querySelector('.add-sos-top-item');  
const addCascavalBtn = document.querySelector('.add-cascaval-item');  
const addToppingBtn = document.querySelector('.add-topping-item');

// const handleSelectionChange = (selectElement, descriptionElement) => {
//   const selectedValue = selectElement.value;

//   // Find the parent burger image element to which the img-description belongs
//   const burgerImageElement = descriptionElement.closest('.burger-image');

//   if (selectedValue === 'no_selection') {
//       descriptionElement.classList.add('hidden-arrow'); // Hide the arrow
//   } else {
//       descriptionElement.classList.remove('hidden-arrow'); // Show the arrow
//   }
// };




// For meat
addMeatBtn.addEventListener('click', () => addNew('#carne-option-block', '#carne', '.burger-carne-vita'));
// For sauces
addSosBtn.addEventListener('click', () => addNew('#sos-option-block', '#sos_bottom', '.burger-sos-bottom'));
// For sauce top
addSosTopBtn.addEventListener('click', () => addNew('#sos-top-option-block', '#sos_top', '.burger-sos-top'));
// For cascaval
addCascavalBtn.addEventListener('click', () => addNew('#cascaval-option-block', '#cascaval', '.burger-cascaval'));
// For topping
addToppingBtn.addEventListener('click', () => addNew('#topping-option-block', '#topping', '.burger-topping'));

const addNew = (containerSelector, elementSelector, imageSelector) => {
  const container = document.querySelector(containerSelector);
  const elementToDuplicate = document.querySelector(elementSelector).parentNode;  
  const imageElement = document.querySelector(imageSelector);

  const uniqueId = new Date().getTime();  // Create a unique ID for each cloned element
  const clonedSelect = elementToDuplicate.cloneNode(true);  // Clone the select element block
  const clonedImage = imageElement.cloneNode(true);  // Clone the corresponding image block

  clonedSelect.id = 'cloned-' + uniqueId;
  clonedImage.id = 'cloned-image-' + uniqueId;

  
  const selectElement = clonedSelect.querySelector('select'); 
  const descriptionElement = clonedImage.querySelector('.img-description'); 
  const removeBtn = clonedSelect.querySelector(".remove-clone");
  const summaryElement = document.createElement('div'); // Create a new summary div for each clone
  summaryElement.classList.add('cloned-summary');
  // selectElement.addEventListener('change', () => handleSelectionChange(selectElement, descriptionElement));


  if (removeBtn) {
    removeBtn.addEventListener("click", () => removeNew(clonedSelect, clonedImage, summaryElement));
  }

  updateClonedMeatElement(selectElement, clonedImage.querySelector('img'), descriptionElement, summaryElement);
  
  updateClonedSosBElement(selectElement, clonedImage.querySelector('img'), descriptionElement);
  updateClonedCascavalElement(selectElement, clonedImage.querySelector('img'), descriptionElement);
  updateClonedSosElement(selectElement, clonedImage.querySelector('img'), descriptionElement);
  updateClonedToppingElement(selectElement, clonedImage.querySelector('img'), descriptionElement);
 
  container.append(clonedSelect);
  imageElement.insertAdjacentElement('afterend', clonedImage);
};

const removeNew = (clonedSelect, clonedImage) => {
  clonedSelect.remove();
  clonedImage.remove();
};
