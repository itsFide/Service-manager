let burgerBtn = document.querySelector('.burger__item');
let nav = document.querySelector('.nav');
let navLink = document.querySelectorAll('.nav__link');

burgerBtn.addEventListener('click',openMenu);
function openMenu(){
    burgerBtn.classList.toggle('active');
    nav.classList.toggle('active');
    navLink.forEach(function(event){
        event.classList.add('active')
    })
}