// Delegacion de evento: evento click
document.addEventListener('click', (e) => {
  // e.target.matches('.modal-card') apunta a un elemento que tenga la clase modal-card
  if (e.target.matches('.modal-card')) {
    console.log('ok', e.target);
    // El elemento con la clase .modal-card tiene que tener el atributo data-target con un valor de referencia para abrir el modal que corresponda
    let target = e.target.getAttribute('data-target')
    // El elemento modal a abrir tiene que tener el atributo data-name con el mismo nombre que se haya colocado en data-target
    let modal = document.querySelector(`.modal[data-name="${target}"]`)
    modal.style.display = "block";
  }

  // e.target.matches('.modal-close') apunta a un elemento que tenga la clase modal-close
  if (e.target.matches('.modal-close')) {
    console.log('ok', e.target);
    // sube niveles desde .modal-close que hayas hecho click hasta la clase .modal que corresponda para cerrarlo u ocultarlo
    let modal = e.target.closest('.modal')
    modal.style.display = "none";
  }
})


/* CARROUSEL */
let slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
let i;
// acá define qué elemento entra en el slider
let x = document.getElementsByClassName("mySlides");
if (n > x.length) {slideIndex = 1}
if (n < 1) {slideIndex = x.length} ;
for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
}
x[slideIndex-1].style.display = "block";
}

carousel();
function carousel() {
let i;
let x = document.getElementsByClassName("mySlides");
for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
}
slideIndex++;
if (slideIndex > x.length) {slideIndex = 1}
    x[slideIndex-1].style.display = "block";
setTimeout(carousel, 5000); // Cambia la imagen cada 5 segundos
}

/* SLIDER*/
document.addEventListener("DOMContentLoaded", function () {
  const sliderContainer = document.querySelector(".slider-container");
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");

  let currentIndex = 0;

  function showSlide(index) {
      const slides = document.querySelectorAll(".slider-container img");
      slides.forEach((slide, i) => {
          slide.style.transform = `translateX(${-index * 80}%)`;
      });
  }

  function nextSlide() {
      currentIndex = (currentIndex + 1) % 9; 
      showSlide(currentIndex);
  }

  function prevSlide() {
      currentIndex = (currentIndex - 1 + 9) % 9; 
      showSlide(currentIndex);
  }

  nextButton.addEventListener("click", nextSlide);
  prevButton.addEventListener("click", prevSlide);
});

/* HEADER*/
document.addEventListener("DOMContentLoaded", function () {
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const navList = document.querySelector('.nav-list');

  hamburgerMenu.addEventListener('click', function () {
      navList.classList.toggle('show');
  });
});
