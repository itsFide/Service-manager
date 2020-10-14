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
let count = 0;
  arrowUp.addEventListener('click',function(){  
      let sliderInner = document.querySelectorAll('.slider__inner');  
      let sliderInnerHeight = sliderInner.clientHeight;
      let firstItem = document.querySelector('.slider__item.active');
      count++;
      
      console.log(sliderInnerHeight);
      for(let i = 0;i < sliderInner.length;i++){
          let slideItem = document.querySelectorAll('.slider__item');
          for(let j = 0;j<slideItem.length;j++){
              if(count %2 != 0){
                  fun1();
              }
              if(count %2 == 0){
                  fun2();
              }

              
              function fun1(){
                slideItem[j].style.transform = "translateY(-260px)";
                if(slideItem[i].classList.contains('active')){
                    slideItem[i].style.transform = 'translateY(560px)';
                    slideItem[i].style.transition = '0s';
                      function animate(){
                        slideItem[i].style.transform = 'translateY(260px)';
                        slideItem[i].style.transition = '.5s';
                      }
                      setTimeout(animate,100);
                  }
              }
            slideItem[i].classList.remove('active');
            slideItem[j].classList.add('active');
            
            function fun2(){
                slideItem[j].style.transform = "translateY(-260px)";
                if(slideItem[j].classList.contains('active')){
                    
                    slideItem[j].style.transform = 'translateY(560px)';
                    slideItem[j].style.transition = '0s';
                    slideItem[i].style.transform = 'translateY(260px)';
                    slideItem[i].style.transition = '0s';
                      function animate(){
                        slideItem[j].style.transform = 'translateY(20px)';
                        slideItem[j].style.transition = '.5s';
                        slideItem[i].style.transform = 'translateY(0px)';
                        slideItem[i].style.transition = '.5s';
                      }
                      setTimeout(animate,100);
                  }
            }
          }
      }
  })

  arrowDown.addEventListener('click',function(){  
    let sliderInner = document.querySelectorAll('.slider__inner');  
    
    count++;
    
    
    for(let i = 0;i < sliderInner.length;i++){
        let slideItem = document.querySelectorAll('.slider__item');
        for(let j = 0;j<slideItem.length;j++){
            if(count %2 != 0){
                fun1();
            }
            if(count %2 == 0){
                fun2();
            }

            
            function fun1(){
              slideItem[j].style.transform = "translateY(-560px)";
              if(slideItem[i].classList.contains('active')){
                  slideItem[i].style.transform = 'translateY(0px)';
                  slideItem[i].style.transition = '0s';
                  slideItem[j].style.transition = "0s";
                    function animate(){
                      slideItem[i].style.transform = 'translateY(260px)';
                      slideItem[i].style.transition = '.5s';
                      slideItem[j].style.transform = 'translateY(-260px)';
                      slideItem[j].style.transition = '.5s';
                    }
                    setTimeout(animate,100);
                }
            }
          slideItem[i].classList.remove('active');
          slideItem[j].classList.add('active');
          
          function fun2(){
              slideItem[j].style.transform = "translateY(-260px)";
              if(slideItem[j].classList.contains('active')){
                  
                  slideItem[j].style.transform = 'translateY(-260px)';
                  slideItem[j].style.transition = '0s';
                  slideItem[i].style.transform = 'translateY(-560px)';
                  slideItem[i].style.transition = '0s';
                    function animate(){
                      slideItem[j].style.transform = 'translateY(20px)';
                      slideItem[j].style.transition = '.5s';
                      slideItem[i].style.transform = 'translateY(0px)';
                      slideItem[i].style.transition = '.5s';
                    }
                    setTimeout(animate,100);
                }
          }
        }
    }
})
 
