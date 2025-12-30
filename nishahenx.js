function revealOnScroll () {
    const reveal = document.querySelectorAll('.cd');
    reveal.forEach(section  => {
        const windowHeight = window.innerHeight;
        const sectionTop = section.getBoundingClientRect().top;
        const revealPoint = 100;
        if (sectionTop < windowHeight - revealPoint) {
            section.classList.add('cda');
        } else {
            section.classList.remove('cda');
        }
    })
}


window.addEventListener('load', revealOnScroll);
window.addEventListener('scroll', revealOnScroll);


const hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click', function () {

    hamburger.classList.toggle('rotate');
    document.querySelector('ul').classList.toggle('display');

});

const headerUl = document.querySelector('header ul');
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.forEach(nav => 
            nav.classList.remove('active'));
            link.classList.add('active');
            headerUl.classList.remove('display');
            hamburger.classList.remove('rotate');
});
    });


document.addEventListener('click', (event) => {
    const isClickInsideNav = headerUl.contains(event.target);
    const isHamburger = hamburger.contains(event.target);
    if (!isClickInsideNav && !isHamburger) {
        headerUl.classList.remove('display');
        hamburger.classList.remove('rotate');
    }
});


const aboutText = document.querySelector('#aboutText');
const readMoreBtn = document.querySelector('#readMoreBtn');
const moreText = document.querySelector('.more-text');

readMoreBtn.addEventListener("click", () => {
    const isCollapsed = aboutText.classList.contains("collapsed");

    if (isCollapsed) {
        aboutText.classList.remove("collapsed");
        moreText.style.display = "inline";
        readMoreBtn.textContent = "Read less";
    } else {
        aboutText.classList.add("collapsed");
        moreText.style.display = "none";
        readMoreBtn.textContent = "Read more";
    }
})