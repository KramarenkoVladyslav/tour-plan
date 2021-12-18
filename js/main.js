const hotelSwiper = new Swiper('.hotel-slider', {
	// Optional parameters
	loop: true,
 
	// If we need pagination
	pagination: {
	  el: '.swiper-pagination',
	},
 
	// Navigation arrows
	navigation: {
	  nextEl: '.hotel-slider__button--next',
	  prevEl: '.hotel-slider__button--prev',
	},
});
const reviewsSlider = new Swiper('.reviews-slider', {
	// Optional parameters
	loop: true,
 
	// If we need pagination
	pagination: {
	  el: '.swiper-pagination',
	},
 
	// Navigation arrows
	navigation: {
	  nextEl: '.reviews-slider__button--next',
	  prevEl: '.reviews-slider__button--prev',
	},
 });