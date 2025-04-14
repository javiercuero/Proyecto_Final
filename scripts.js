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
document.querySelector('.menu-toggle').addEventListener('click', function() {
     const menu = document.querySelector('nav ul');
     menu.classList.toggle('active');
     
     // Cambiar el ícono (opcional)
     this.textContent = menu.classList.contains('active') ? '✕' : '☰';
});