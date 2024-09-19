document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");
});

const addMeatBtn = document.querySelector('.add-meat-item');
const addSosBtn = document.querySelector('.add-sos-item');
const addSosTopBtn = document.querySelector('.add-sos-top-item');  
const addCascavalBtn = document.querySelector('.add-cascaval-item');  
const addToppingBtn = document.querySelector('.add-topping-item');

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

 
  const removeBtn = clonedSelect.querySelector(".remove-clone");
  if (removeBtn) {
    removeBtn.addEventListener("click", () => removeNew(clonedSelect, clonedImage));
  }


  container.append(clonedSelect);

  
  imageElement.insertAdjacentElement('afterend', clonedImage);
};

const removeNew = (clonedSelect, clonedImage) => {
 
  clonedSelect.remove();
  clonedImage.remove();
};
