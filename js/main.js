/* swiper */
var swiper = new Swiper('.contenido_popular', {
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
    delay: 755500,
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
    }
 });