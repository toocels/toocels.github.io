function setWidth() {
	var all = document.querySelectorAll(".images img");
	if (window.innerWidth > 1170) {
		for (var i = 0; i < all.length; i++) {
			all[i].style.width = "365px";
			all[i].style.height = "456px";
		}
	} else if (window.innerWidth > 750) {
		for (var i = 0; i < all.length; i++) {
			all[i].style.width = (window.innerWidth / 3) - 30 + "px";
			all[i].style.height = ((window.innerWidth / 3) - 30) * 1.25 + "px";
		}
	} else if (window.innerWidth > 480) {
		for (var i = 0; i < all.length; i++) {
			all[i].style.width = (window.innerWidth / 2) - 30 + "px";
			all[i].style.height = ((window.innerWidth / 2) - 30) * 1.25 + "px";
		}
	} else {
		for (var i = 0; i < all.length; i++) {
			all[i].style.width = window.innerWidth - 30 + "px";
			all[i].style.height = (window.innerWidth - 30) * 1.25 + "px";
		}
	}
}

addEventListener("resize", (event) => {
	setWidth()
});
setWidth()