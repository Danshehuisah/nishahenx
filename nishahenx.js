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

// function navRotate() {
//             document.querySelector('.dash').classList.add('rotate')
//         }

// let isclick = true;
const dashContainer = document.querySelector('.dash-container');
dashContainer.addEventListener('click', function () {
//   dashContainer = false;
    // if (isclick) {
    dashContainer.classList.toggle('rotate');
    document.querySelector('ul').classList.toggle('display');
// 
//   } 
//   else { 
    // setTimeout(() => {
        // dashContainer.classList.remove('rotate');
        // document.querySelector('ul').classList.remove('display')
    // }, 100);} 
//   isclick = !isclick
})