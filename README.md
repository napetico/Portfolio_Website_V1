# Portfolio Website - Version 1

This is the website I made for the Personal Portfolio Project I got assigned at Codecademy to test what I've learn so far about HTML, CSS, and JavaScript.

I needed to build a webpage to introduce myself, talk a little bit about my interest in coding, and showcase some of the projects I've made so far in my learning journey. So, here's a quick outline of my code:

## For the design:

+ I started with a quick online search for inspo and references.
+ I built the site on Figma first based on what I found, mostly on [this coder's site](https://brittanychiang.com/) which I like a lot.
+ I prepared and named all my imagery and icons in advance.
+ Finally, I outline an action plan to write the code smoothly and jumped in to VCS to build the project (wich ended up not being so smooth hehe).

## For the setup:

+ I used the Command Line and file navigation to setup the repositories.
+ I initialize Git Version control to track my files.
+ I linked mt local repo with GitHub.
+ At the end I deployed the site with GitHub Pages.

## For the HTML code:

+ I did the HTML first, outlining the page and writing all the elements I needed in the design.
+ I left the images, links, and some classes empty and added them as I made progress with the code. 
+ I also had to add more elements to create the mobile nav bar and other features.
+ I added the script in the head with a defer attribute instead of at the bottom of the HTML code.

## For the CSS code:

+ I started with a [reset boilerplate](https://www.joshwcomeau.com/css/custom-css-reset/#our-finished-product-10) I found online.
+ Then I added the fonts from GoogleFonts using @font-face.
+ I went thorugh all the HTML elements, from top to bottom, styling them to be as I had them in the Figma file.
+ I also added basic CSS hover animations on buttons and on my photo. [This video](https://www.youtube.com/watch?v=SgmNxE9lWcY&t=208s) cleared out many doubts.
+ I was having an ugly flickering on the text inside the card when hovering. [This](https://stackoverflow.com/questions/3461441/prevent-flicker-on-webkit-transition-of-webkit-transform) was very helpful.
+ To make the site responsive I used @media queries with max-width at 992px for tablet and 576px for mobile.
+ When working on the JavaScript code to build the dark-light mode switcher I found out how to work with color variables.
+ So, I organized two color pallets (dark-mode and light-mode) using variable that I reused in the JS code.

## For the JavaScript code:

To make the site interactive I used JS to build three ideas (one of which I couldn't finish):

### **A mobile navigation:**

+ I set and animated a hamburger menu that open a navigation panel with three links that redirect to different sections inside the page.
+ It has an animation I saw in [this video](https://www.youtube.com/watch?v=k4EGA95ZK4o) that scrolls up/down smoothly to the selected section (also coded on desktop and tablet).
+ The color pallete for this component was responsive to the dark-light mode switcher.
+ This navigations was only visible on mobile devices (less than 576px).
+ I helped myself with some videos and documentation online, specially [this one](https://www.youtube.com/watch?v=OFKBep95lb4) and [this other one](https://www.youtube.com/watch?v=flItyHiDm7E).

### **Dark-Light Mode Switcher:**

+ I created a button, fixed on the top corner of the screen, and set it up to be triggered on click.
+ I used CSS variables and JS functions to swap dark-mode colors to the light-mode colors (and vice-versa) on key elements.
+ It also changes some images src values. (I later found our I could change the fill color in my svg icon but I had already used PNGs for all of them)
+ I got a lot of help online, specially from MDN, StackOverflow, and [this video](https://www.youtube.com/watch?v=9LZGB3OLXNQ&t=453s).

### **Clickable cards with inner links *(unfinished)*:**

I tried to make my cards to redirect to the repository on click and also redirect to the live site using an icon inside the card.
I followed some articles and videos (mostly [this one](https://css-tricks.com/block-links-the-search-for-a-perfect-solution/)) but I got stuck in a piece of code that made the card clickable but left the live-site link unreachable.
If anyone knows how to do this please let me know. Thanks in advance!

## Contribute to the code:
Please, feel free to comment or add up to this site:
+ Adding more interactions or animations.
+ Improving the code to be cleaner, shorter, or faster.
+ Showing alternative ways to address the same goals.
+ Pointing errors or pieces of code with room for improvement.
+ Asking questions.

## Feedback & Contact:
Thanks for taking a look at this code. Feedback is very welcome!
Find me in any of the channels listed in this site.

