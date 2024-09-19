
const selectSosB = document.querySelector('#sos_bottom');
const displaySosB = document.querySelector('.burger-sos-bottom img');
const imgDescriptionSosB = document.querySelector('.burger-sos-bottom .img-description'); 

// window.addEventListener('load', () => {
//   displaySos.style.display = 'none';
//   imgDescriptionSos.style.display = 'none';
// });


selectSosB.addEventListener('change', () => {
    if (selectSosB.value === 'no_selection') {
      displaySosB.style.display = 'none'; 
      imgDescriptionSosB.style.display = 'none'; 

    }else if (selectSosB.value === 'ketchup') {
      displaySosB.src = '	https://burgercraft.md/img/addons/2017-10-16/sriracha.svg';
      imgDescriptionSosB.textContent = 'Sos Ketchup'; 
      console.log('warning d');
      
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