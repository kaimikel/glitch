/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

console.log("Hello, world!");

var galleryThumbs = new Swiper(".gallery-thumbs", {
  centeredSlides: true,
  centeredSlidesBounds: true,
  slidesPerView: 3,
  watchOverflow: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  direction: "vertical",
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
 
});

var galleryMain = new Swiper(".gallery-main", {
  watchOverflow: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  preventInteractionOnTransition: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  thumbs: {
    swiper: galleryThumbs,
  },
   pagination: {
    direction: "vertical",
     el: ".swiper-pagination",
    clickable: true,
    bulletClass: `swiper-pagination-bullet`,
  },
});
