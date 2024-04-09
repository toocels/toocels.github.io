console.log("Wassup inspect element hackers.")

window.addEventListener("beforeprint", function() {
	var elementsToHide = document.querySelectorAll("#footer, #navbar, h1, button, .top");
	document.querySelector("main").style.width = "1200px"
	document.querySelector(".top").style.width = "1200px"
	elementsToHide.forEach(function(element) {
		element.style.display = "none";
	});
});

function setSize() {
	return
	if (window.innerWidth < 1200) {
		document.querySelector("main").style.width = (window.innerWidth - 30) + "px"
		document.querySelector(".top").style.width = (window.innerWidth - 30) + "px"
	} else if (screen.width < 500) {
		document.querySelector("main").style.width = (window.innerWidth - 30) + "px"
		document.querySelector(".top").style.width = (window.innerWidth - 30) + "px"
	}
}


setSize()

window.addEventListener("resize", () => {
	setSize()
})