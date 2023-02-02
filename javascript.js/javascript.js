// MENU 
const navegadorMenu = document.getElementById('navegador-menu');
const abrirMenu = document.getElementById('abrir-menu');
const cerrarMenu = document.getElementById('cerrar-menu');

abrirMenu.addEventListener('click', () =>{
    navegadorMenu.classList.toggle('verMenu');
})

cerrarMenu.addEventListener('click', () =>{
    navegadorMenu.classList.remove('verMenu');
})



// PORFOLIO 
let masPorfolio = document.getElementById('masPorfolio');
let divPorfolio = document.getElementById('div-porfolio');
let botonMas = document.getElementById('btn-mas');
let botonMenos = document.getElementById('btn-menos');
let botonMenos2 = document.getElementById('btn-menos2');

botonMas.addEventListener('click', () =>{
    masPorfolio.classList.toggle('mostrarPorfolio');
    divPorfolio.classList.toggle('btn-ocultar');
})

botonMenos.addEventListener('click', () =>{
    masPorfolio.classList.remove('mostrarPorfolio');
    divPorfolio.classList.remove('btn-ocultar');
})
 
botonMenos2.addEventListener('click', () =>{
    masPorfolio.classList.remove('mostrarPorfolio');
    divPorfolio.classList.remove('btn-ocultar');
})
