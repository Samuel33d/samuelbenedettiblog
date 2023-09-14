window.sr = ScrollReveal();

sr.reveal('.navbar', {
    duration: 800,
    origin: "top",
    distance: '100px'
})

sr.reveal('.header__title', {
    duration: 2000,
    origin: "bottom",
    distance: '100px'
})

sr.reveal('.section__card', {
    duration: 2000,
    origin: "bottom",
    distance: '100px'
})

sr.reveal('.proyect__card', {
    duration: 2000,
    origin: "bottom",
    distance: '100px'
})

sr.reveal('.contact_icon', {
    duration: 2000,
    origin: "bottom",
    distance: '100px'
})


const iconNav = document.querySelector(".navbar__icon")
const navMenu = document.querySelector(".navbar__menu")
const closeMenu = document.querySelector(".closeMenu")
const handleMenu = document.querySelector(".navbar__menu-a")

iconNav.addEventListener("click", function () {
    navMenu.classList.add("show__menu")

    closeMenu.addEventListener("click", function () {
        navMenu.classList.remove("show__menu")
    })

    handleMenu.addEventListener("click", function () {
        navMenu.classList.remove("show__menu")
    })
})

const navbar = document.querySelector(".navbar")

window.addEventListener("scroll", function () {
    navbar.classList.toggle("navScroll", window.scrollY > 0)

})