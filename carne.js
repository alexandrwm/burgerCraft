const updateClonedElement = (selectElement, imageElement, descriptionElement) => {
  selectElement.addEventListener('change', () => {
    switch (selectElement.value) {
      case 'pui-pane':
        imageElement.src = 'https://burgercraft.md/img/addons/2017-10-16/pirjoala-de-pui.svg';
        descriptionElement.textContent = 'FILEU PUI PANE';
        break;
      case 'vita':
        imageElement.src = 'https://burgercraft.md/img/addons/2017-10-16/pirjoala-de-vita.svg';
        descriptionElement.textContent = 'PÂRJOALǍ VITǍ';
        break;
      case 'pui-grill':
        imageElement.src = 'https://burgercraft.md/img/addons/2017-10-16/pirjoala-de-pui.svg';
        descriptionElement.textContent = 'FILEU PUI GRILL';
        break;
    }
  });
};

export { updateClonedElement };
