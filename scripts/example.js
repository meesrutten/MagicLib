import Magic from './magic.js'

(function animateStuff() {
	const hideThis = document.querySelector('#hideThis')
	const hide = new Magic(hideThis, 'hide');
	hide.play();

	const showThis = document.querySelector('#showThis')
	const show = new Magic(showThis, 'show');
	show.play();

})()