$(document).ready(function () {
	/* -------------------------------------------------------------------------- */
	/*                              Home Hero Slider                              */
	/* -------------------------------------------------------------------------- */

	var heroslider = new Swiper('.hero_slider', {
		spaceBetween: 0,
		effect: 'fade',
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
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
	const catSlider = new Swiper('.catagory_slider', {
		loop: true,
		slidesPerView: 'auto',
	});
});
