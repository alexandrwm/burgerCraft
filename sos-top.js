
const selectSos = document.querySelector('#sos_top');
const displaySos = document.querySelector('.burger-sos-top img');
const imgDescriptionSos = document.querySelector('.burger-sos-top .img-description'); 

selectSos.addEventListener('change', () => {
    if (selectSos.value === 'no_selection') {
      displaySos.style.display = 'none'; 
      imgDescriptionSos.style.display = 'none'; 
    }else if (selectSos.value === 'ketchup') {
      displaySos.src = '	https://burgercraft.md/img/addons/2017-10-16/sriracha.svg';
      imgDescriptionSos.textContent = 'Sos Ketchup'; 
      displaySos.style.display = 'block';
      imgDescriptionSos.style.display = 'block';
    } else if (selectSos.value === 'tartar') {
      displaySos.src = '	https://burgercraft.md/img/addons/2017-10-16/tartar-sos.svg';
      imgDescriptionSos.textContent = 'sos tartar'; 
    } else if (selectSos.value === 'maioneza') {
      displaySos.src = '	https://burgercraft.md/img/addons/2017-10-16/maioneza.svg'; 
      imgDescriptionSos.textContent = 'sos maioneza'; 
    } else if (selectSos.value === 'usturoi&bbq') {
      displaySos.src = '	https://burgercraft.md/img/addons/2017-10-16/tartar-sos.svg';
      imgDescriptionSos.textContent = 'sos usturoi&bbq'; 
    } else if (selectSos.value === 'sriracha') {
      displaySos.src = 'https://burgercraft.md/img/addons/2017-10-16/sriracha.svg';
      imgDescriptionSos.textContent = 'sos sriracha'; 
    }
    else if (selectSos.value === 'classy') {
      displaySos.src = '	https://burgercraft.md/img/addons/2017-10-16/tartar-sos.svg';
      imgDescriptionSos.textContent = 'sos classy'; 
    } else if (selectSos.value === 'usturoi') {
      displaySos.src = 'https://burgercraft.md/img/addons/2017-10-16/tartar-sos.svg'; 
      imgDescriptionSos.textContent = 'sos usturoi';  
    }else if (selectSos.value === 'no_selection') {
      displaySos.style.display = 'none'; 
      imgDescriptionSos.style.display = 'none'; 
    }
    
  });

  const sosOptions = {
    'no_selection': { src: '', text: '', display: 'none' },
    'ketchup': { src: 'https://burgercraft.md/img/addons/2017-10-16/sriracha.svg', text: 'Sos Ketchup', display: 'block' },
    'tartar': { src: 'https://burgercraft.md/img/addons/2017-10-16/tartar-sos.svg', text: 'sos tartar', display: 'block' },
    'maioneza': { src: 'https://burgercraft.md/img/addons/2017-10-16/maioneza.svg', text: 'sos maioneza', display: 'block' },
    'usturoi&bbq': { src: 'https://burgercraft.md/img/addons/2017-10-16/tartar-sos.svg', text: 'sos usturoi&bbq', display: 'block' },
    'sriracha': { src: 'https://burgercraft.md/img/addons/2017-10-16/sriracha.svg', text: 'sos sriracha', display: 'block' },
    'classy': { src: 'https://burgercraft.md/img/addons/2017-10-16/tartar-sos.svg', text: 'sos classy', display: 'block' },
    'usturoi': { src: 'https://burgercraft.md/img/addons/2017-10-16/tartar-sos.svg', text: 'sos usturoi', display: 'block' }
  };

  const updateClonedSosElement = () => {
  selectSos.addEventListener('change', () => {
    const selectedSos = sosOptions[selectSos.value] || sosOptions['no_selection']; // Fallback pentru 'no_selection'
    
    displaySos.src = selectedSos.src;
    imgDescriptionSos.textContent = selectedSos.text;
    
    displaySos.style.display = selectedSos.display;
    imgDescriptionSos.style.display = selectedSos.display;
  });
}

export { updateClonedSosElement };
