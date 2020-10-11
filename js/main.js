let burgerBtn = document.querySelector('.burger__item');
let nav = document.querySelector('.nav');
let navLink = document.querySelectorAll('.nav__link');
let introInner = document.querySelector('.intro__inner');
let singUp = document.querySelector('.sing__up')

window.addEventListener('load',loadText)
function loadText(){
    introInner.style.opacity = "1";
    
}
setTimeout(loadText,2000)
burgerBtn.addEventListener('click',openMenu);
function openMenu(){
    
    burgerBtn.classList.toggle('active');
    nav.classList.toggle('active');
    navLink.forEach(function(event){
        event.classList.add('active')
    })
    if(nav.classList.contains('active')){
    nav.insertAdjacentHTML('beforeend','<a href="" class="sing__up sing__up-burger" >sing up</a>');
    
    } else if(!nav.classList.contains('active')){
        nav.removeChild(document.querySelector('.sing__up-burger'))
    }
}

