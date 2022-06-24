export const slider = () => {
	new Swiper('.portfolio__slider', {
		autoplay: {
			delay: 5000,
		},
		navigation: {
			nextEl: '.portfolio__arrow_right',
			prevEl: '.portfolio__arrow_left',
			disabledClass: 'portfolio__arrow_disabled',
		},
	});
};