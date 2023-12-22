function clickMenuIcon(){
    let menu = document.getElementById("menu-options");
    let menuNotPhone = document.getElementById("menu-options-not-phone");
    const styleOfMenuNotPhone = getComputedStyle(menuNotPhone);
    const styleOfMenu = getComputedStyle(menu);
    const dysplayOfMenuNotPhone = styleOfMenuNotPhone.display;
    const display = styleOfMenu.display;
    let newDisplayValue = "flex";
    if(display==="flex"){
        newDisplayValue = "none";
    }
    menu.style.display = newDisplayValue;
}

function nextSlide(){
    showSlides(++slideIndex);
}

function  previousSlide(){
    showSlides(--slideIndex);
}

function curentSlide(index){
    showSlides(slideIndex = index);
}

function showSlides(slideIndexBeforeUpdating){
    
    let slides = document.getElementsByClassName("slide-object");
    let numberOfSlides = slides.length;
    let dots = document.getElementsByClassName("dot");
    let numberOfDots = dots.length;
    if(slideIndexBeforeUpdating > numberOfSlides) slideIndex = 1;
    if(slideIndexBeforeUpdating <= 0) slideIndex = numberOfSlides;
    for(let index = 0; index < numberOfSlides; index++){
        slides[index].style.display = "none";
    }
    for(let index = 0;index<numberOfDots;index++){
        dots[index].className = dots[index].className.replace(" active","");
    }
    slides[slideIndex-1].style.display = "block";
    if(slideIndex-1 < numberOfDots){
        dots[slideIndex-1].className += " active";
    }
}

let slideIndex = 1;
window.addEventListener("load",function(event){
    showSlides(slideIndex);
});
