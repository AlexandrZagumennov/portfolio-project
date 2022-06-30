export const burger = () => {
	const burger = document.querySelector('.header__burger-btn');
	const navigation = document.querySelector('.header__contacts');
	
	burger.addEventListener('click', () => {
		navigation.classList.toggle('header__contacts_active');
	});
	
	navigation.addEventListener('click', (event) => {
		const closeNav = event.target.closest('.contacts__item');
	
		if (closeNav) {
			navigation.classList.remove('header__contacts_active');
		}
	});
};