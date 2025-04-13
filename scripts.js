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
