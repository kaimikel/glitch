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
        el: '.swiper-scrollbar',
            draggable: true,
      },
  pagination: {
        el: '.swiper-pagination',
    top: '20%',
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
});

galleryMain.on("slideChangeTransitionStart", function () {
  galleryThumbs.slideTo(galleryMain.activeIndex);
});

galleryThumbs.on("transitionStart", function () {
  galleryMain.slideTo(galleryThumbs.activeIndex);
});



