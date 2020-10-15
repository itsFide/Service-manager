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
// slider
window.addEventListener('load',function(){
    let btnLeft = document.querySelector('.btn__left');
let btnRight = document.querySelector('.btn__right'); 
let slidesItem = document.querySelectorAll('.slides__item');
let counter = 0;
let stepSize = slidesItem[4].clientWidth;

btnRight.addEventListener('click',function(){
    counter+=1.5;
    
    for(let i = 0; i < slidesItem.length;i++){
        
        slidesItem[i].style.transform = 'translate(' + `${-stepSize * counter}px)`;
        console.log(counter);
        if(counter > 6){
            counter = 0;
            slidesItem[i].style.transform = 'translate(' + `${-stepSize * counter}px)`;
        }
        if(counter == 1.5){
            firstName()
        }
        if(counter == 3){
            twoPersonName();
        }
        if(counter == 4.5){
            threPersonName()
        }
        if(counter == 6){
            firstName();
        }
        if(counter == 0){
            threPersonName();
        }
        
        
    } 
    
})

btnLeft.addEventListener('click',function(){
    counter+=1.5;
    
    for(let i = 0; i < slidesItem.length;i++){
        
        slidesItem[i].style.transform = 'translate(' + `${stepSize * counter}px)`;
        console.log(counter);
        if(counter > 6){
            counter = 0;
            slidesItem[i].style.transform = 'translate(' + `${stepSize * counter}px)`;
        }
        if(counter == 1.5){
            twoPersonName()
        }
        if(counter == 3){
            firstName();
        }
        if(counter == 4.5){
            threPersonName()
        }
        if(counter == 6){
            twoPersonName();
        }
        if(counter == 0){
            threPersonName();
        }
        
        
    }
    
})
function firstName(){
    let personName = document.querySelector('.person__title h3');
    personName.innerText = "Alan Smith";
}
function twoPersonName(){
    let personName = document.querySelector('.person__title h3');
    personName.innerText = "Mary Johnson";
}
function threPersonName(){
    let personName = document.querySelector('.person__title h3');
    personName.innerText = "Sophie Turner";
}
})
// checkbox input


