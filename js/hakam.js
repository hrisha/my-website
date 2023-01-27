
window.onload = function () { 
    document.querySelectorAll('.progress>span').forEach(function(progressBar) {
        // Now do something with my button
        progressBar.style.width = progressBar.getAttribute('data-progress');
    });
}


