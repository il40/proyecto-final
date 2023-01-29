// MENU 
const navegadorMenu = document.getElementById('navegador-menu');
const toggleMenu = document.getElementById('toggle-menu');
const closeMenu = document.getElementById('close-menu');

toggleMenu.addEventListener('click', () =>{
    navegadorMenu.classList.toggle('show');
})

closeMenu.addEventListener('click', () =>{
    navegadorMenu.classList.remove('show');
})