console.log('Hello world');

const $burger = $('.navbar-burger');
const $menu = $('.navbar-menu');
const $countryForm = $('#country-form');
const $form = $('form');

$burger.on('click', () => {
  $burger.toggleClass('is-active');
  $menu.toggleClass('is-active');
});

if($countryForm.length > 0) $countryForm.find('select').on('change', () => $countryForm.trigger('submit'));

if($form.length > 0) $form.validate();

$('.carousel').slick({
  autoplay: true,
  arrows: false,
  autoplaySpeed: 4000,
  draggable: false,
  pauseOnHover: false,
  speed: 1000
});
