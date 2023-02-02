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

const navItem1 = document.getElementById('nav-item1');
const navItem2 = document.getElementById('nav-item2');
const navItem3 = document.getElementById('nav-item3');
const navItem4 = document.getElementById('nav-item4');
const navItem5 = document.getElementById('nav-item5');
const navItem6 = document.getElementById('nav-item6');
const navItem7 = document.getElementById('nav-item7');

navItem1.addEventListener('click', close);
navItem2.addEventListener('click', close);
navItem3.addEventListener('click', close);
navItem4.addEventListener('click', close);
navItem5.addEventListener('click', close);
navItem6.addEventListener('click', close);
navItem7.addEventListener('click', close);

function close(){
    navegadorMenu.classList.remove('verMenu');
}






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
