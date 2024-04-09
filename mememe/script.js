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


// addEventListener("DOMContentLoaded", _ => {
//     console.log("hello boid")
//     return;

//     preloader = document.querySelector(".preloader");
//     document.body.classList.add("body-loading");
//     preloaderProg =
//         document.querySelector(".preloader-progress-bar-done");
//     fetch("/navigation.json")
//         .then(resp => resp.text())
//         .then(resp => {
//             // * @type {import("../navigation.json")} 
//             console.log(resp)
//             // const nav = JSON.parse(resp);
//             // const dest = (new URL(window.location.href)).pathname
//             //     .replace(/index\.html$/, "");
//             // window.history.replaceState(null, "", dest);
//             // if (!(dest in nav)) {
//             //     dispatchEvent(pageLoadFailEvent);
//             //     return;
//             // }
//             // totalCount += nav[dest].length;
//             // nav[dest].forEach(asset => {
//             //     const xhr = new XMLHttpRequest();
//             //     xhr.onload = _ => showProgress(xhr);
//             //     xhr.onerror = _ => dispatchEvent(pageLoadFailEvent);
//             //     xhr.open("GET", asset, true);
//             //     xhr.send();
//             // })
//         });
// }, { once: true });


document.querySelector(".preloader").style.top = "-100%";
document.querySelector(".preloader-gif").style.top = "-100%";