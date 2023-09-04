// library-part2
// burger-menu

const menu = document.getElementById('menu');
const navigation = document.getElementById('navigation');

menu.addEventListener( "click" , () => {
    closeBurgerMenu();
});

document.addEventListener("click", (event) => {
    const isClosestBurger = event.target.closest('#navigation');
    const isClosestMenu = event.target.closest('#menu');

    if(!isClosestBurger && !isClosestMenu && navigation.classList.contains("burger-navigation")){
        closeBurgerMenu();
    }
})

navigation.addEventListener("click", (event) => {
    if (event.target.classList.contains('header-navigation-nav-list-item-link') ){
        closeBurgerMenu();
    }
});

document.addEventListener("scroll", (event) => {
    if(navigation.classList.contains("burger-navigation")){
        closeBurgerMenu()

    }
})

function closeBurgerMenu(){
    navigation.classList.toggle("burger-navigation");
    menu.classList.toggle("cross-lines");
}



// library-part3
//slider about

const slider = document.getElementsByClassName("slider");
const buttonsCircle = document.getElementsByClassName("main-about-buttons-container-dots");
const buttonContainer = document.getElementsByClassName("main-about-buttons-container");
const buttonArrow = document.getElementsByClassName("main-about-gallery-buttons-svg");
const btnLeft = document.getElementById("buttonLeft");
const btnRight = document.getElementById("buttonRight");

let amountOfVisibleElements;

let sliderIndex = 1;
getAmountOfSliderBlocks();
addEventListenerToDots();
addEventListenerToArrow();
showSlider(sliderIndex);

function plusSlider(n) {
  showSlider(sliderIndex = sliderIndex + n);
}

function currentSlider(n) {
  showSlider(sliderIndex = n);
}

function addEventListenerToArrow(){

    btnLeft.addEventListener("click", () => {
        plusSlider(-1);
    })
    btnRight.addEventListener("click", () => {
        plusSlider(1);
    })

}

function addEventListenerToDots(){
    for(let i = 0; i < buttonContainer.length; i++){
        buttonContainer[i].addEventListener("click", () => {
            currentSlider(i + 1);
        })
    }
}

function showSlider(n) {
    if (n > slider.length) {sliderIndex = 1}
    if (n < 1) {sliderIndex = slider.length}
    for (let i = 0; i < slider.length; i++) {
        slider[i].style.display = "none";
    }
    for (let i = 0; i < buttonsCircle.length; i++) {
        buttonsCircle[i].className = buttonsCircle[i].className.replace("active", "");
    }
    for (let i = sliderIndex-1; i < sliderIndex - 1 + amountOfVisibleElements; i++) {
        slider[i].style.display = "block";
    }
    buttonsCircle[sliderIndex-1].className += " active";
    if (sliderIndex === slider.length) {
        btnRight.disabled = true;
    } else {
        btnRight.disabled = false
    }

    if (sliderIndex === 1) {
        btnLeft.disabled = true;
    } else {
        btnLeft.disabled = false
    }

}

function getAmountOfSliderBlocks(){
    const width = document.body.clientWidth;
    amountOfVisibleElements = width < 1008 ? 1 : 3;
    console.log(width)
}

//width window

window.addEventListener('resize',(e) => {
    getAmountOfSliderBlocks();
    for(let i = 0; i < slider.length; i++){
        if (i < amountOfVisibleElements){
            slider[i].style.display = "block";
        } else {
            slider[i].style.display = "none";
        }
    }
});

//slider favorites

