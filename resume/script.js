console.log("Wassup inspect element hackers.")

window.addEventListener('beforeprint', function() {
	var elementsToHide = document.querySelectorAll('#footer, #navbar, h1, button, .top');
	elementsToHide.forEach(function(element) {
		element.style.display = 'none';
	});
});

window.addEventListener('resize', function() {
	if (window.innerWidth < 1200) {
		document.querySelector('main').style.width = (window.innerWidth - 30) + 'px'
		document.querySelector('.top').style.width = (window.innerWidth - 30) + 'px'
	}
})