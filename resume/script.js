console.log("Wassup inspect element hackers.")

window.addEventListener("beforeprint", function() {
    var elementsToHide = document.querySelectorAll("#footer, #navbar, h1, button, .top");
    elementsToHide.forEach(function(element) {
        element.style.display = "none";
    });
    document.querySelector("main").style.width = "1200px"
    document.querySelector(".right").style.marginRight = "30px"
});