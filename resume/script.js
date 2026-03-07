console.log("Wassup inspect element hackers.");
window.addEventListener("beforeprint", function () {
  var elementsToHide = document.querySelectorAll("#footer, #navbar, .top");
  document.querySelector("main").style.width = "1200px";
  document.title = "PranavKumarS";
  elementsToHide.forEach(function (element) {
    element.style.display = "none";
  });
});
window.addEventListener("afterprint", function () {
  var elementsToHide = document.querySelectorAll("#footer, #navbar, .top");
  document.querySelector("main").style.width = "";
  document.title = "PranavKumarS";
  elementsToHide.forEach(function (element) {
    element.style.display = "";
  });
});