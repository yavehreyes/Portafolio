function mobileAction() {
	document.querySelector('.main').style.display = 'none';
	document.querySelector('.footer').style.display = 'none';
	document.querySelector('.mobile-menu').style.display = 'none';
	document.querySelector('.menu-lv').style.display = 'block';
	document.querySelector('.mobile-nav').style.display = 'block';
	document.querySelector('.mobile-link').style.display = 'block';
}
function mobileOff() {
	document.querySelector('.mobile-menu').style.display = 'block';
	document.querySelector('.main').style.display = 'block';
	document.querySelector('.footer').style.display = 'block';
	document.querySelector('.navbar').style.display = 'block';
	document.querySelector('.menu-lv').style.display = 'none';
	document.querySelector('.mobile-nav').style.display = 'none';
}
