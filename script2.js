var swiper = new Swiper(".swiper-container", {
  loop: true,
  slidesPerView: "auto",
  freeMode: true,
  mousewheel: {
    releaseOnEdges: true,
  },
  scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
      }
});

var thumb = document.querySelectorAll(".thumbContainer");

thumb.forEach(function(image, index) {
  var delay = index * 90;
  image.classList.add("fadeInSlide");
  image.style.animationDelay = delay + "ms";
});
