let burgerBtn = document.querySelector('.burger__item');
let nav = document.querySelector('.nav');
let navLink = document.querySelectorAll('.nav__link');
let introInner = document.querySelector('.intro__inner');
let singUp = document.querySelector('.sing__up');
let accItem = document.querySelectorAll('.accardion__item');
let accContent = document.querySelectorAll('.accordion__content');
let arrowUp = document.querySelector('.slider__arrow');
let arrowDown = document.querySelector('.arrow-down');


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

// Accordion

accItem.forEach(function(event){
    event.addEventListener('click',function(){
        let child = event.querySelector('.accordion__content');
        if(!(child.classList.contains('active'))){
            for(let i = 0; i < accContent.length;i++){
                accContent[i].classList.remove('active');
            }
            child.classList.add('active')
        }
        
    })
});


