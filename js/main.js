"use strict"

function activeMobileNav () {
    const bodyElement = document.body
    const menuIcon = document.querySelector('.menu-icon')
    const navList = document.querySelector('.nav__list')

    bodyElement.classList.toggle('overlay-active')
    menuIcon.classList.toggle('menu-icon-active')
    navList.classList.toggle('nav__list--active')
}

document.querySelector('.menu-icon-wrapper').addEventListener('click', activeMobileNav)