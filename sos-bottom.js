const selectSosB = document.querySelector('#sos_bottom');
const displaySosB = document.querySelector('.burger-sos-bottom img');
const imgDescriptionSosB = document.querySelector('.burger-sos-bottom .img-description'); 
const sosDiv = document.getElementById('sosBDiv');

// sosDiv.style.display = 'none';
selectSosB.addEventListener('change', () => {
    if (selectSosB.value === 'no_selection') {
      displaySosB.style.display = 'none'; 
      imgDescriptionSosB.style.display = 'none'; 
      sosDiv.style.display = 'none';
    }else if (selectSosB.value === 'ketchup') {
      displaySosB.src = '	https://burgercraft.md/img/addons/2017-10-16/sriracha.svg';
      imgDescriptionSosB.textContent = 'Sos Ketchup';
      sosDiv.style.display = 'block';
    } else if (selectSosB.value === 'tartar') {
      displaySosB.src = '	https://burgercraft.md/img/addons/2017-10-16/tartar-sos.svg';
      imgDescriptionSosB.textContent = 'sos tartar'; 
    } else if (selectSosB.value === 'maioneza') {
      displaySosB.src = '	https://burgercraft.md/img/addons/2017-10-16/maioneza.svg'; 
      imgDescriptionSosB.textContent = 'sos maioneza'; 
    } else if (selectSosB.value === 'usturoi&bbq') {
      displaySosB.src = '	https://burgercraft.md/img/addons/2017-10-16/tartar-sos.svg';
      imgDescriptionSosB.textContent = 'sos usturoi&bbq'; 
    } else if (selectSosB.value === 'sriracha') {
      displaySosB.src = 'https://burgercraft.md/img/addons/2017-10-16/sriracha.svg';
      imgDescriptionSosB.textContent = 'sos sriracha'; 
    }
    else if (selectSosB.value === 'classy') {
      displaySosB.src = '	https://burgercraft.md/img/addons/2017-10-16/tartar-sos.svg';
      imgDescriptionSosB.textContent = 'sos classy'; 
    } else if (selectSosB.value === 'usturoi') {
      displaySosB.src = 'https://burgercraft.md/img/addons/2017-10-16/tartar-sos.svg'; 
      imgDescriptionSosB.textContent = 'sos usturoi';  
    }
    console.log('isnt working;1');
  });

  const updateClonedSosBElement = (selectElement, imageElement, descriptionElement) => {
    selectElement.addEventListener('change', () => {
      switch (selectElement.value) {
        case 'ketchup':
          imageElement.src = '	https://burgercraft.md/img/addons/2017-10-16/sriracha.svg';
          descriptionElement.textContent = 'Sos Ketchup';
          break;
        case 'tartar':
          imageElement.src = '	https://burgercraft.md/img/addons/2017-10-16/tartar-sos.svg';
          descriptionElement.textContent = 'sos tartar';
          break;
        case 'maioneza':
          imageElement.src = '	https://burgercraft.md/img/addons/2017-10-16/maioneza.svg';
          descriptionElement.textContent = 'sos maioneza';
          break;
          case 'usturoi&bbq':
          imageElement.src = '	https://burgercraft.md/img/addons/2017-10-16/tartar-sos.svg';
          descriptionElement.textContent = 'sos usturoi&bbq';
          break;
          case 'sriracha':
          imageElement.src ='https://burgercraft.md/img/addons/2017-10-16/sriracha.svg';
          descriptionElement.textContent = 'sos sriracha';
          break;
          case 'classy':
          imageElement.src = '	https://burgercraft.md/img/addons/2017-10-16/tartar-sos.svg';
          descriptionElement.textContent = 'sos classy';
          break;
          case 'usturoi':
            imageElement.src ='https://burgercraft.md/img/addons/2017-10-16/tartar-sos.svg';
            descriptionElement.textContent = 'sos usturoi';
            break;
      }
    });
  };
  
  export { updateClonedSosBElement };
  