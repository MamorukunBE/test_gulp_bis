var burgermenu;
window.addEventListener('load', () => {
	burgermenu = document.getElementById('burgermenu');
	document.addEventListener('scroll', () => {
		burgermenu.classList.toggle('fixed', window.pageYOffset > 100);
		burgermenu.classList.toggle('transitionning', window.pageYOffset > 200);		
		burgermenu.classList.toggle('hidden', window.pageYOffset > 100 && window.pageYOffset <= 800);
	});
})