const hamburger=document.querySelector('.hamburger');
const navbar=document.querySelector('ul');

hamburger.addEventListener('click', ()=> {
    navbar.classList.toggle('slide');
});

window.onscroll = () => {
    navbar.classList.remove('slide');
}