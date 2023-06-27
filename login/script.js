document.getElementById("username").focus();

function login_button() {
	user = document.querySelector("#username").value
	pass = document.querySelector("#password").value

	setCookie("username ", user)
	setCookie("password", pass)

	routeRequest("POST", '', JSON.stringify({
		'check': "isUser"
	})).then((res) => {
		if (res.isUser) // if not auth, redirect
			window.location.pathname = "/home/"
		else
			document.getElementById("login_req_reply").innerHTML = "Wrong username / password";

	})
}

document.querySelector("#password").addEventListener("keyup", function(event) {
	if (event.keyCode === 13)
		document.querySelector(".submit_button").click();
});

document.querySelector("#username").addEventListener("keyup", function(event) {
	if (event.keyCode === 13)
		document.querySelector(".submit_button").click();
});