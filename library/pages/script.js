// library-part2
// burger-menu

const menu = document.getElementById('menu');
const navigation = document.getElementById('navigation');
const slider = document.getElementsByClassName("slider");
const buttonsCircle = document.getElementsByClassName("main-about-buttons-container-dots");
const buttonContainer = document.getElementsByClassName("main-about-buttons-container");
const buttonArrow = document.getElementsByClassName("main-about-gallery-buttons-svg");
const btnLeft = document.getElementById("buttonLeft");
const btnRight = document.getElementById("buttonRight");
const input = document.getElementsByClassName("main-favorites-input-label-radio");
const bookCard = document.getElementsByClassName("main-favorites-wrapper-pick");
const openProfileBtn = document.getElementById("open-profile-btn");
const profileLoginWindow = document.getElementById("profile-login");
const clickRegister = document.getElementById("open-register");
const modalWrapper = document.getElementById("modal-wrapper");
const closeRegister = document.getElementById("close-register");



menu.addEventListener( "click" , () => {
    closeBurgerMenu();
});

document.addEventListener("click", (event) => {
    const isClosestBurger = event.target.closest('#navigation');
    const isClosestMenu = event.target.closest('#menu');
    const isClosestProfileLogo = event.target.closest('#open-profile-btn');
    const isClosestProfileLogonWindow = event.target.closest('#profile-login');
    const isClosestRegisterForm = event.target.closest("#modal-register");
    const isRegisterButton = event.target.closest("#open-register");

    if(!isClosestBurger && !isClosestMenu && navigation.classList.contains("burger-navigation")){
        closeBurgerMenu();
    }

    if(!isClosestProfileLogonWindow && profileLoginWindow.style.display === "block" && !isClosestProfileLogo) {
        closeProfileLoginWindow();
    }
    if(!isClosestRegisterForm && modalWrapper.classList.contains("open") && !isRegisterButton) {
        closeModalRegistrationForm()
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
    if (n > slider.length) {
        sliderIndex = 1;
    }
    if (n < 1) {
        sliderIndex = slider.length;
    }
    for (let i = 0; i < slider.length; i++) {
        // slider.classList.add("slideLeft");
        slider[i].style.display = "none";
    }
    for (let i = 0; i < buttonsCircle.length; i++) {
        // slider[i].classList.add("slideRight");
        buttonsCircle[i].className = buttonsCircle[i].className.replace("active", "");
        buttonContainer[i].className = buttonContainer[i].className.replace("active", "")
    }
    for (let i = sliderIndex-1; i < sliderIndex - 1 + amountOfVisibleElements; i++) {
        // slider[i].classList.add("slideRight");
        // slider[i].classList.add("slideLeft");
        slider[i].style.display = "block";
    }
    buttonsCircle[sliderIndex-1].className += " active";
    buttonContainer[sliderIndex-1].className += " active";
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

let animationId = [];

addEventListenerToInput();
updateBookVisibility(0, 3, true);

function addEventListenerToInput(){
    // animationId.forEach(id => cancelAnimationFrame(id));
    // animationId = [];
    for (let i = 0; i < input.length; i++){
        input[i].addEventListener("click", (e) => {
            console.log("click", e);
            let from = 0;
            let to = 3;

            switch (e.target.id) {
                case "check1" :
                    from = 0;
                    to = 3;
                    break;
                case "check2" :
                    from = 4;
                    to = 7;
                    break;
                case "check3" :
                    from = 8;
                    to = 11;
                    break;
                case "check4" :
                    from = 12;
                    to = 15;
                    break;
                }

            updateBookVisibility(from, to);
        })
    }
}

function updateBookVisibility(from, to, withoutAnimation){
    for (let i = 0; i < bookCard.length; i++){
        if(withoutAnimation) {
            if(i >= from && i <= to){
                bookCard[i].style.display = "block"
            }
        } else {
            if (bookCard[i].style.display === "block") {
                bookCard[i].style.opacity = 1;
                animateOpacityHide(bookCard[i], 300);
            }

            if ( i >= from && i <= to){
                bookCard[i].style.opacity = 0;
                animateOpacity(bookCard[i], 600);
            }
        }
    }
}

function animateOpacity(element, duration) {
    let start;

    element.style.opacity = 0;
    function step(timestamp) {
        if (!start) {
            start = timestamp + 300;
        }
        let opacity;
        if (timestamp - start > 0) {
            element.style.display = "block";
            opacity = (timestamp - start)  / duration;
            element.style.opacity = opacity;
        }
        if (opacity >= 1) {
            return;
        }
        requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
}

function animateOpacityHide(element, duration) {
    let start;

    function step(timestamp) {
        if (!start) start = timestamp;
        const opacity = (timestamp - start) / duration;
        element.style.opacity = 1 - opacity;
        if (opacity >= 1) {
            element.style.display = "none";
            return;
        }
         requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
}

//fixed slider favorites

// const menuFixed = document.getElementById("input");

// window.onscroll = function() {
//     const width = document.body.clientWidth;
//     const scrolled = window.scrollX || document.documentElement.scrollTop;
//     if (width < 769) {
//         if(scrolled >= 200) {
//             menuFixed.classList.add('fixed');
//         } else {
//             menuFixed.classList.remove('fixed');
//         }
//     }
//   }



//popup

//click user icon

openProfileBtn.addEventListener("click", () => {
    if(profileLoginWindow.style.display === "block") {
        profileLoginWindow.style.display = "none";
    } else {
        profileLoginWindow.style.display = "block";
    }
});

function closeProfileLoginWindow() {
    profileLoginWindow.style.display = "none";
}

//click register

clickRegister.addEventListener("click", () => {
    modalWrapper.classList.add("open");
    closeProfileLoginWindow();
})
closeRegister.addEventListener("click", () => {
    closeModalRegistrationForm();
})

function closeModalRegistrationForm() {
    modalWrapper.classList.remove("open");
}