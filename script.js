// burger menu
const burgerMenu = document.querySelector('.header__burger-menu')
const headerMenu = document.querySelector('.header__menu')

burgerMenu.addEventListener("click", () => {
    headerMenu.classList.toggle('show')
})

//hide menu when click nav links

const menuLink = document.querySelectorAll('.header__menu a')
menuLink.forEach(item => item.addEventListener('click', () => {
    headerMenu.classList.remove('show')

}))