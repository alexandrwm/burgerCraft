
const selectSos = document.querySelector('#sos_top');
const displaySos = document.querySelector('.burger-sos-top img');
const imgDescriptionSos = document.querySelector('.burger-sos-top .img-description'); 

// window.addEventListener('load', () => {
//   displaySos.style.display = 'none';
//   imgDescriptionSos.style.display = 'none';
// });

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