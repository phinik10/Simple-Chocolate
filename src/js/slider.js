
 new Swiper ('.swiper', {
  spaceBetween: 30,
  grabCursor: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints :{
    375 :{
      slidesPerView: 1,
    },
    758 :{
      slidesPerView: 2.5,
    },
    1200 :{
      slidesPerView: 4,
    },
  }
});
