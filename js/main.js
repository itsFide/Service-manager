let burgerBtn = document.querySelector('.burger__item');
burgerBtn.addEventListener('click',openMenu);
function openMenu(){
    burgerBtn.classList.toggle('active');
}