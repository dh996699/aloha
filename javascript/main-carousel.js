const elem = document.querySelector('.main-carousel');
const flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  wrapAround: true,
  freeScroll: true,
contain: true,
prevNextButtons: false,
autoPlay: true
});