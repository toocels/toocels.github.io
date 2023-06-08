function includeHTML() {
	var z, i, elmnt, file, xhttp;
	z = document.getElementsByTagName("*");
	for (i = 0; i < z.length; i++) {
		elmnt = z[i];
		file = elmnt.getAttribute("w3-include-html");
		if (file) {
			xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function() {
				if (this.readyState == 4) {
					if (this.status == 200) {
						elmnt.innerHTML = this.responseText;
					}
					if (this.status == 404) {
						elmnt.innerHTML = "Page not found.";
					}
					elmnt.removeAttribute("w3-include-html");
					includeHTML();
				}
			}
			xhttp.open("GET", file, true);
			xhttp.send();
			return;
		}
	}
}

var prevScrollpos = window.pageYOffset;
window.onscroll = () => {
	var currentScrollPos = window.pageYOffset;

	// if scroll, minimise options
	document.querySelector('.options').classList.remove("options-active");
	document.querySelector('.hamburger').classList.remove("hamburger-active")

	// if scroll down, hide navbar
	if (prevScrollpos > currentScrollPos) document.querySelector("nav").style.transform = 'translateY(0%)';
	else document.querySelector("nav").style.transform = 'translateY(-100%)';

	prevScrollpos = currentScrollPos;
}

includeHTML();
window.addEventListener('load', () => {
	const hamburger = document.querySelector('.hamburger');
	const options = document.querySelector('.options');
	hamburger.addEventListener('click', () => {
		options.classList.toggle("options-active");
		hamburger.classList.toggle("hamburger-active")
	});
});

//
//
//
//

try {
	authUserWServer()
		.then((res) => {
			if (res) {
				var login_dom = document.getElementById("nav_pages").getElementsByTagName("button")[0];
				login_dom.innerHTML = "logout"
			}
		})
} catch (err) {}

function login_logout() {
	if (getCookie("username") == null) {
		window.location.pathname = "/login/"
	}
	else {
		setCookie('username', '', '/', -1)
		setCookie('password', '', '/', -1)
		window.location.pathname = "/"
	}
}