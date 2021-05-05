/* -------------------------------------------------------------------------- */
/*                                  Preloader                                 */
/* -------------------------------------------------------------------------- */

$(window).bind('beforeunload', function () {
	$('.preloader').addClass('loading');
});
$(window).bind('load', function () {
	$('.preloader').removeClass('loading');
	/* -------------------------------------------------------------------------- */
	/*                              Home Hero Slider                              */
	/* -------------------------------------------------------------------------- */

	var heroslider = new Swiper('.hero_slider', {
		effect: 'fade',
		// autoplay: {
		// 	delay: 3000,
		// 	disableOnInteraction: true,
		// },
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		runCallbacksOnInit: true,
		on: {
			init: function () {
				herosliderAnim(this.$el);
			},
			slideNextTransitionStart: function () {
				herosliderAnim(this.$el);
			},
			slidePrevTransitionStart: function () {
				herosliderAnim(this.$el);
			},
		},
	});
	function herosliderAnim(sliderDOM) {
		// let split;
		let animation = gsap.timeline({});

		const allCaption = sliderDOM.find('.slider_content *');
		const slideActive = sliderDOM.find('.swiper-slide-active');
		const slideCaption = slideActive.find('.slider_content *');
		gsap.set(allCaption, { y: 15, autoAlpha: 0 });
		animation.to(slideCaption, {
			duration: 0.5,
			autoAlpha: 1,
			y: 0,
			delay: 0.15,
			stagger: 0.07,
		});
	}

	/* -------------------------------------------------------------------------- */
	/*                               Category Slider                              */
	/* -------------------------------------------------------------------------- */
	const catSlider = new Swiper('.all_catagory_slider', {
		slidesPerView: 7.5,
		spaceBetween: 10,
		loop: true,
		// mousewheel: true,
		freeMode: true,
		// autoplay: {
		// 	delay: 3000,
		// 	disableOnInteraction: false,
		// },
	});

	/* -------------------------------------------------------------------------- */
	/*                            Category items Slider                           */
	/* -------------------------------------------------------------------------- */
	const catItemSlider = new Swiper('.category_product_slider', {
		slidesPerView: 4,
		mousewheel: true,
		freeMode: true,
		spaceBetween: 10,
		scrollbar: {
			el: '.swiper-scrollbar',
			dragSize: 270,
		},
	});
});

/* -------------------------------------------------------------------------- */
/*                                MediaQueries                                */
/* -------------------------------------------------------------------------- */

// var notouchDevices = window.matchMedia("(min-width: 1131px)");
var mobile = window.matchMedia('(max-width: 960px)');
function mobileMenu(params) {
	if (mobile.matches) {
		$('.auth_container').appendTo('.navbar_menu');
	} else {
		$('.auth_container').insertAfter('.navbar_search');
	}
	$('.navbar-burger').click(function (e) {
		$(this).toggleClass('is_active');
		$('.navbar_menu').toggleClass('is-active');
		$('html').toggleClass('is-clipped');
	});
}
$(document).ready(function () {
	mobileMenu();
});
$(window).resize(function () {
	mobileMenu();
});
