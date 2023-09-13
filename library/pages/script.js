// library-part2
//const

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
const modalWrapperRegister = document.getElementById("modal-wrapper-register");
const closeRegister = document.getElementById("close-register");
const clickRegisterInLibrary = document.getElementById("sign-up-library");

const clickLogin = document.getElementById("open-login");
const modalWrapperLogin = document.getElementById("modal-wrapper-login");
const closeLogin = document.getElementById("close-login");
const clickLoginInLibrary = document.getElementById("log-in-library");

const clickLoginInRegister = document.getElementById("redirects-login");
const clickRegisterInLogin = document.getElementById("redirects-register");

const clickBuyOnBook = document.querySelectorAll(".button-buy");

const clickSignUpInRegister = document.getElementById("submit-register");
const clickLogInInLogin = document.getElementById("submit-login");

const styleIconSvgInHeder = document.getElementById("icon-svg");
const styleIconSpanInHeder = document.getElementById("icon-span");

let user;

const clickMyProfile = document.getElementById("my-profile");
const clickLogOut = document.getElementById("log-out");

init()



// burger-menu

menu.addEventListener( "click" , () => {
    closeBurgerMenu();
});

document.addEventListener("click", (event) => {
    const isClosestBurger = event.target.closest('#navigation');
    const isClosestMenu = event.target.closest('#menu');
    const isClosestProfileLogo = event.target.closest('#open-profile-btn');
    const isClosestProfileLogoWindow = event.target.closest('#profile-login');
    const isClosestRegisterForm = event.target.closest("#modal-register");
    const isRegisterButton = event.target.closest("#open-register");
    const isRegisterButtonLibrary = event.target.closest("#sign-up-library");

    const isClosestLoginForm = event.target.closest("#modal-login");
    const isLoginButton = event.target.closest("#open-login");
    const isLoginButtonLibrary = event.target.closest("#log-in-library");

    const isClickLoginInRegister = event.target.closest("#redirects-login");
    const isClickRegisterInLogin = event.target.closest("#redirects-register");

    const isClickBuyOnBook = event.target.closest(".button-buy");

    if (!isClosestBurger
        && !isClosestMenu
        && navigation.classList.contains("burger-navigation")){
            closeBurgerMenu();
    }

    if (!isClosestProfileLogoWindow
        && profileLoginWindow.style.display === "block"
        && !isClosestProfileLogo) {
            closeProfileLoginWindow();
    }

    if (!isClosestRegisterForm
        && modalWrapperRegister.classList.contains("open")
        && !isRegisterButton
        && !isRegisterButtonLibrary
        && !isClickRegisterInLogin) {
            closeModalRegistrationForm();
    }

    if (!isClosestLoginForm
        && modalWrapperLogin.classList.contains("open")
        && !isLoginButton
        && !isLoginButtonLibrary
        && !isClickLoginInRegister
        && !isClickBuyOnBook) {
            closeModalLoginForm()
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
        slider[i].style.display = "none";
    }
    for (let i = 0; i < buttonsCircle.length; i++) {
        buttonsCircle[i].className = buttonsCircle[i].className.replace("active", "");
        buttonContainer[i].className = buttonContainer[i].className.replace("active", "")
    }
    for (let i = sliderIndex-1; i < sliderIndex - 1 + amountOfVisibleElements; i++) {
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
    for (let i = 0; i < input.length; i++){
        input[i].addEventListener("click", (e) => {
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
};

//click register

clickRegister.addEventListener("click", () => {
    modalWrapperRegister.classList.add("open");
    closeProfileLoginWindow();
});

closeRegister.addEventListener("click", () => {
    closeModalRegistrationForm();
});

clickRegisterInLibrary.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
    modalWrapperRegister.classList.add("open");
});

function closeModalRegistrationForm() {
    modalWrapperRegister.classList.remove("open");
};

window.addEventListener("keydown", (esc) => {
    if (esc.key === "Escape") {
        modalWrapperRegister.classList.remove("open");
    }
});

clickLoginInRegister.addEventListener("click", () => {
    closeModalRegistrationForm();
    modalWrapperLogin.classList.add("open");
})

//click login

clickLogin.addEventListener("click", () => {
    modalWrapperLogin.classList.add("open");
    closeProfileLoginWindow();
});

closeLogin.addEventListener("click", () => {
    closeModalLoginForm();
});

clickLoginInLibrary.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
    modalWrapperLogin.classList.add("open");
});

function closeModalLoginForm() {
    modalWrapperLogin.classList.remove("open");
};

window.addEventListener("keydown", (esc) => {
    if (esc.key === "Escape") {
        modalWrapperLogin.classList.remove("open");
    }
});

clickRegisterInLogin.addEventListener("click", () => {
    closeModalLoginForm();
    modalWrapperRegister.classList.add("open");
})


//click buy on book


clickBuyOnBook.forEach((elem) => {
    elem.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
        modalWrapperLogin.classList.add("open");
    })
})

//click sign up in window register

clickSignUpInRegister.addEventListener("click", () => {
    const registerForm = document.forms.register;

    if (registerForm.checkValidity()) {
        const fromStore = localStorage.getItem('registration');
        const dataLS = JSON.parse(fromStore) || [];
        user = {
            firstName: registerForm.firstName.value,
            lastName: registerForm.lastName.value,
            email: registerForm.email.value,
            password: registerForm.email.value,
            idCard: randomIdCardNumber(9),
        };
        dataLS.push(user);
        localStorage.setItem('registration', JSON.stringify(dataLS));
        localStorage.setItem("user", JSON.stringify(user));
        login();
    }
})

function randomIdCardNumber(size) {
        let result = [];
        let hexRef = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

        for (let n = 0; n < size; n ++) {
          result.push(hexRef[Math.floor(Math.random() * 16)]);
        }
        return result.join('');
}

function init() {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
        user = JSON.parse(storedUser);
        login()
    }
}
//login

function login() {
    // const registerForm = document.forms.register;
    // registerForm.reset();
    closeModalRegistrationForm();
    clickLogin.classList.add("user");
    clickRegister.classList.add("user");
    clickMyProfile.classList.add("user");
    clickLogOut.classList.add("user");

    const userFirstLetters = `${user.firstName[0].toUpperCase()}${user.lastName[0].toUpperCase()}`;
    styleIconSpanInHeder.innerText = userFirstLetters;
    styleIconSvgInHeder.classList.add("d-none");
    styleIconSpanInHeder.classList.add("d-flex");
    styleIconSpanInHeder.classList.remove("d-none");
}

//click Log In in window Login

clickLogInInLogin.addEventListener("click", () => {
    const loginForm = document.forms.login;
    if(loginForm.checkValidity()) {

    }
})