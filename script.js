const slider = document.querySelector('.slider')
let sliderElem = document.querySelectorAll('.slide')
let checkIndex = 0
let btnLeft = document.querySelector('.left')
let btnRight = document.querySelector('.right')
let firstDot = document.querySelector('.sl_element1')
let secondDot = document.querySelector('.sl_element2')
let thirdDot = document.querySelector('.sl_element3')
let fourthDot = document.querySelector('.sl_element4')
let slideImage = document.querySelector('.sl_image')
let slideMoon = document.querySelector('.sl_moon')

/* function showSlideElement(index){
    slider.style.transform = `translateX(-${index*100}%)`
}

showSlideElement(checkIndex)

function toSlide(index){
    checkIndex = index
    showSlideElement(checkIndex)
}

firstDot.addEventListener("click", function(){
    toSlide(0)
})
secondDot.addEventListener("click", function(){
    toSlide(1)
})
thirdDot.addEventListener("click", function(){
    toSlide(2)
})
fourthDot.addEventListener("click", function(){
    toSlide(3)
}) */

firstDot.addEventListener('click', function(){
    document.body.style.background = '#652121';
    sliderElem[checkIndex].classList.remove('new')
    checkIndex = 0
    sliderElem[checkIndex].classList.add('new')
})
secondDot.addEventListener('click', function(){
    document.body.style.background = 'green';
    sliderElem[checkIndex].classList.remove('new')
    checkIndex = 1
    sliderElem[checkIndex].classList.add('new')
})
thirdDot.addEventListener('click', function(){
    document.body.style.background = '#b8831f';
    sliderElem[checkIndex].classList.remove('new')
    checkIndex = 2
    sliderElem[checkIndex].classList.add('new')
})
fourthDot.addEventListener('click', function(){
    document.body.style.background = '#a52a2a';
    sliderElem[checkIndex].classList.remove('new')
    checkIndex = 3
    sliderElem[checkIndex].classList.add('new')
})

sliderElem[checkIndex].classList.add('new')

/* function showNextSlide(){
    sliderElem.style.transform = `translateX(${Index*100}%)` // Left/Right move 100% slider width
}

function toNextSlide(){
    sliderElem[checkIndex].classList.remove('new')
    checkIndex = (checkIndex + 1) % sliderElem.length
    sliderElem[checkIndex].classList.add('new')
    showNextSlide(checkIndex)
}
btnRight.addEventListener('click', toNextSlide, showNextSlide)
// Change checkIndex for slide changing
function toPrevSlide(){
    sliderElem[checkIndex].classList.remove('new')
    checkIndex = (checkIndex - 1 + sliderElem.length) % sliderElem.length
    sliderElem[checkIndex].classList.add('new')
    showNextSlide(checkIndex)
}
btnLeft.addEventListener('click', toPrevSlide, showNextSlide)
showNextSlide(checkIndex) */