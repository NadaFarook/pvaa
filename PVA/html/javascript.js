const selectElement = (element) => document.querySelector(element);
//Open and close nav on click
selectElement(element='.menu-icons').addEventListener('click', () => {
    selectElement(element='nav').classList.toggle(token='active');
});