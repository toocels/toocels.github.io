var prevScrollpos = window.pageYOffset;
window.onscroll = () => {
	var currentScrollPos = window.pageYOffset;

	// if scroll, minimise options
	document.querySelector('.options').classList.remove("options-active");
	document.querySelector('.hamburger').classList.remove("hamburger-active")
	document.querySelector("main").style.opacity = "1";

	// if scroll down, hide navbar
	if (prevScrollpos > currentScrollPos) document.querySelector("nav").style.transform = 'translateY(0%)';
	else document.querySelector("nav").style.transform = 'translateY(-100%)';

	prevScrollpos = currentScrollPos;
}

includeHTML();
document.querySelector("main").style.transition = "0.7s";
window.addEventListener('load', () => {
	const hamburger = document.querySelector('.hamburger');
	const options = document.querySelector('.options');
	hamburger.addEventListener('click', () => {
		options.classList.toggle("options-active");
		hamburger.classList.toggle("hamburger-active")
		if (document.querySelector("main").style.opacity == "0.5")
			document.querySelector("main").style.opacity = "1";
		else
			document.querySelector("main").style.opacity = "0.5";
	});
});

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
	} else {
		setCookie('username', '', '/', -1)
		setCookie('password', '', '/', -1)
		window.location.pathname = "/"
	}
}