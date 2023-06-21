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


// THIS IS THE DARK-LIGHT MODE CODE
const themeButton = document.querySelector('.theme-button');
const logoImage = document.querySelectorAll('.napo-logo');
const github = document.getElementById('github');
const linkedin = document.getElementById('linkedin');
const discord = document.getElementById('discord');
const gmail = document.getElementById('gmail');
const codecademy = document.getElementById('codecademy');
const letter = document.querySelector('.letter');
const siteSmall = document.querySelector('.site-small-icon');
const linkSmall = document.querySelector('.link-small-icon');
const liveSite = document.querySelectorAll('.live-site-icon');
const gitRepo = document.querySelectorAll('.ext-link-icon');
const folder = document.querySelectorAll('.folder-icon');
const moon = document.querySelector('.moon-icon');
const sun = document.querySelector('.sun-icon');
const line = document.querySelector('.theme-line');
const mobileNav = document.querySelector('.mobile-nav-box');

themeButton.addEventListener('click', function () {
    document.body.classList.toggle('light-mode');
    if (document.body.classList.contains('light-mode')) {
        moon.src = 'media/napetico-moon-icon-light-mode.png';
        sun.src = 'media/napetico-sun-icon-light-mode.png';
        line.style.backgroundColor = '#382a4ec0';
        logoImage.forEach(n => n.src = 'media/napetico-logo-light.svg');
        github.src = 'media/napetico-github-logo-light.png';
        linkedin.src = 'media/napetico-linkedin-logo-light.png';
        discord.src = 'media/napetico-discord-logo-light.png';
        gmail.src = 'media/napetico-gmail-logo-light.png';
        codecademy.src = 'media/napetico-codecademy-logo-light.png';
        letter.src = 'media/napetico-letter-n-light.svg';
        siteSmall.src = 'media/napetico-live-site-icon-light.png';
        linkSmall.src = 'media/napetico-external-link-icon-light.png';
        liveSite.forEach(n => n.src = 'media/napetico-live-site-icon-light.png');
        gitRepo.forEach(n => n.src = 'media/napetico-external-link-icon-light.png');
        folder.forEach(n => n.src = 'media/napetico-repository-icon-light.png');
        mobileNav.style.backgroundColor = '#fffefe';
    } else {
        moon.src = 'media/napetico-sun-icon-dark-mode.png';
        logoImage.forEach(n => n.src = 'media/napetico-logo.svg');
        github.src = 'media/napetico-github-logo.png';
        linkedin.src = 'media/napetico-linkedin-logo.png';
        discord.src = 'media/napetico-discord-logo.png';
        gmail.src = 'media/napetico-gmail-logo.png';
        codecademy.src = 'media/napetico-codecademy-logo.png';
        letter.src = 'media/napetico-letter-n.svg';
        siteSmall.src = 'media/napetico-live-site-icon.png';
        linkSmall.src = 'media/napetico-external-link-icon.png';
        liveSite.forEach(n => n.src = 'media/napetico-live-site-icon.png');
        gitRepo.forEach(n => n.src = 'media/napetico-external-link-icon.png');
        folder.forEach(n => n.src ='media/napetico-repository-icon.png');
        moon.src = 'media/napetico-moon-icon-dark-mode.png';
        sun.src = 'media/napetico-sun-icon-dark-mode.png';
        line.style.backgroundColor = '#382A4E';
        mobileNav.style.backgroundColor = '#04132E';
    }
})


// THIS MAKES THE CARDS CLICKABLE
const card = document.querySelectorAll('.portfolio-card')
const mainLink = document.querySelectorAll('github')