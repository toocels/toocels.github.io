function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return null;
}

function setCookie(cname, cvalue, cpath = "/", exdays = 30) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    document.cookie = cname + "=" + cvalue + ";expires=" + d.toUTCString() + ";path = " + cpath;
}

function routeRequest(method_type, urlParam = null, send_body = null, url = null) {
    var href = window.location.origin + window.location.pathname;
    if (url)
        href = url;
    if (urlParam)
        href += urlParam
    return fetch(href, {
            method: method_type,
            body: send_body,
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(res => res.json())
        .then((res) => {
            return res;
        })
}

function authAdminWServer() {
	return Promise.resolve(true);
    return Promise.resolve(getCookie("username") == "toocels")
    // return routeRequest("POST", '', JSON.stringify({
    //     'check': "isAdmin"
    // }), window.location.origin + "/login/").then((res) => {
    //     return res.isAdmin
    // })
}

function authUserWServer() {
    return Promise.resolve(true)
    // return routeRequest("POST", '', JSON.stringify({
    //     'check': "isUser"
    // }), window.location.origin + "/login/").then((res) => {
    //     return res.isUser
    // })
}


function login_logout() {
    if (getCookie("username") == null) {
        window.location.pathname = "/login/"
    } else {
        setCookie('username', '', '/', -1)
        setCookie('password', '', '/', -1)
        window.location.pathname = "/"
    }
}