function includeHTML() {
    var elements = document.querySelectorAll('*[w3-include-html]');

    function loadHTMLSync(file, element) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', file, false); // Set the third parameter to 'false' for synchronous
        xhr.send(null);
        if (xhr.status === 200) {
            element.innerHTML = xhr.responseText;
            element.removeAttribute('w3-include-html');
        } else {
            element.innerHTML = 'Page not found.';
            element.removeAttribute('w3-include-html');
        }
    }

    elements.forEach(function(elmnt) {
        var file = elmnt.getAttribute('w3-include-html');
        if (file) {
            loadHTMLSync(file, elmnt);
        }
    });
}
includeHTML()