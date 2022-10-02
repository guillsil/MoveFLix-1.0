/* swiper */
var swiper = new Swiper('.contenido_popular', {
  slidesPerView: 1,
  spaceBetween: 10,
  autoplay: {
  delay: 5500,
  disableOnInteraction: false,
  },
pagination: {
 el: '.swiper-pagination',
 clickable: true,
 },
navigation: {
nextEl: '.swiper-button-next',
prevEl: '.swiper-button-prev',
},

breakpoints: {
  280: {
    slidesPerView: 1,
    spaceBetween: 10,
  },
  320: {
    slidesPerView: 2,
    spaceBetween: 10,
  },
  510: {
    slidesPerView: 2,
    spaceBetween: 10,
  },
  758: {
    slidesPerView: 3,
    spaceBetween: 15,
  },  
  900: {
    slidesPerView: 4,
    spaceBetween: 20,
  },
  }
});


/* Ver la Pelicula */ 
let verPelicula = document.querySelector('.ver_peli');
let video = document.querySelector('.vedeo_contenedor');
let cont_video = document.querySelector('#cont_video');
let closeBtn = document.querySelector('.cerrar_video');

verPelicula.onclick = ()  => {
  video.classList.add('show_peli');
  cont_video.play();
};

closeBtn.onclick = ()  => {
  video.classList.remove('show_peli');
  cont_video.pause();
};


