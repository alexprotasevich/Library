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