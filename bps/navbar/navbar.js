var prevScrollpos = window.pageYOffset;

window.onscroll = () => {
    var currentScrollPos = window.pageYOffset;

    // if scroll, minimise options
    document.querySelector('.options').classList.remove("options-active");
    document.querySelector('.hamburger').classList.remove("hamburger-active")
    document.querySelector("main").style.opacity = "1";
    document.querySelector("footer").style.opacity = "1";

    // if scroll down, hide navbar
    if (prevScrollpos > currentScrollPos) document.querySelector("nav").style.transform = 'translateY(0%)';
    else document.querySelector("nav").style.transform = 'translateY(-100%)';

    prevScrollpos = currentScrollPos;
}

document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.options').classList.toggle("options-active");
    document.querySelector('.hamburger').classList.toggle("hamburger-active")
    if (document.querySelector("main").style.opacity == "0.5") {
        document.querySelector("main").style.opacity = "1";
        document.querySelector("footer").style.opacity = "1";
    } else {
        document.querySelector("main").style.opacity = "0.5";
        document.querySelector("footer").style.opacity = "0.5";
    }
});