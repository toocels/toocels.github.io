console.log("Wassup inspect element hackers.")

window.addEventListener("beforeprint", function() {
	var elementsToHide = document.querySelectorAll("#footer, #navbar, h1, button, .top");
	document.querySelector("main").style.width = "1200px"
	document.querySelector(".top").style.width = "1200px"
	document.title = 'Resume-PranavKumar'
	elementsToHide.forEach(function(element) {
		element.style.display = "none";
	});
});