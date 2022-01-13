$(document).ready(function () {
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
	 
	var menuButton = document.querySelector(".menu-button");
	menuButton.addEventListener('click', function () {
		console.log("Клик по кнопке меню");
		document.querySelector(".navbar-bottom").classList.toggle("navbar-bottom--visible");
	});

	var modalButton = $("[data-toggle=modal]");
	var modalCloseButton = $(".modal__close");
	modalButton.on("click", openModal);
	modalCloseButton.on("click", closeModal);
	
	function openModal() {
		var modalOverlay = $(".modal__overlay");
		var modalDialog = $(".modal__dialog");
		modalOverlay.addClass('modal__overlay--visible');
		modalDialog.addClass('modal__dialog--visible');
	}
	function closeModal(event) {
		event.preventDefault();
		var modalOverlay = $(".modal__overlay");
		var modalDialog = $(".modal__dialog");
		modalOverlay.removeClass('modal__overlay--visible');
		modalDialog.removeClass('modal__dialog--visible');
	}
});