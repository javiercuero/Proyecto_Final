// con este codigo se realiza animacion de la Barra de navegacion (nav)
const nav = document.querySelector("nav");
const span = nav.querySelector("span");
const links = nav.querySelectorAll("ul li a");

links.forEach((link, i) => {
     link.addEventListener("mouseenter", () => {
          const width = link.offsetWidth;
          const left = link.offsetLeft;
          span.style.width = width + "px";
          span.style.left = left + "px";
          });
});

// Con este codigo se realiza ajuste responsive de la barra de navegacion (nav)
document.addEventListener('DOMContentLoaded', function () {
     const toggleBtn = document.querySelector('.menu-toggle');
     const menu = document.querySelector('nav ul');
   
     if (toggleBtn && menu) {
       toggleBtn.addEventListener('click', function () {
         menu.classList.toggle('active');
         this.textContent = menu.classList.contains('active') ? '✕' : '☰';
       });
     }
   });
   