new Swiper('.buy_section', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  speed: 800,
  direction: 'vertical',

  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
});
