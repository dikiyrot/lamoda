const headerCityButton = document.querySelector('.header__city-button'); 

headerCityButton.textContent = localStorage.getItem('lomoda-location') || 'Ваш город?';

headerCityButton.addEventListener('click', () => {
	const city = prompt('Your city?');
	localStorage.setItem('lomoda-location', city);
});

//блокировка сколла
const disableScroll = () => {
	const widthScroll = window.innerWidth - document.body.offsetWidth; //ширина сколла
	document.body.dbScrollY = window.scrollY;
	document.body.style.cssText = `
		position: fixed;
		top: ${window.scrollY}px;
		left: 0;
		width: 100%;
		height: 100%;
		overflow: hidden;
		padding-right: ${widthScroll}px;
	`;
}

const enableScroll = () => {
	document.body.style.cssText = '';
	window.scroll({
		top: document.body.dbScrollY 
	})
}

//модальное окно
const subheaderCart = document.querySelector('.subheader__cart'); 
const cartOverlay = document.querySelector('.cart-overlay'); 

cartModalOpen = () => {
	cartOverlay.classList.add('cart-overlay-open');
	disableScroll();
}

cartModalClose = () => {
	cartOverlay.classList.remove('cart-overlay-open');
	enableScroll();
}

subheaderCart.addEventListener('click', cartModalOpen);

cartOverlay.addEventListener('click', (e) => {
	const target = e.target;

	if (target.classList.contains('cart__btn-close') || target.matches('.cart-overlay')){
		cartModalClose();
	}
});