// THIS IS THE MOBILE NAVIGATION CODE
const menuButton = document.querySelector('.hamburger');
const navMenu = document.querySelector('.mobile-nav-box');
const navLink = document.querySelectorAll('.function-link.mobile')

// Open and close mobile nav on click
menuButton.addEventListener('click', function () {
    menuButton.classList.toggle('is-active');
    navMenu.classList.toggle('is-active');
});

// Close mobile nav when click on any nav-link
navLink.forEach(n => n.addEventListener('click', function () {
    menuButton.classList.remove('is-active');
    navMenu.classList.remove('is-active');
}));