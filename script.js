(function () {
    'use strict';

    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(function(eachLink) {
        eachLink.addEventListener('click', function (e) {
            e.preventDefault();

            const targetID = e.target.getAttribute('href');
            const targetAnchor = document.querySelector(targetID);

            const originalTop = Math.floor(targetAnchor.getBoundingClientRect().top - 20);
            window.scrollBy({top:originalTop, left:0, behavior: 'smooth'});
            console.log(originalTop);
        });
    });
})();