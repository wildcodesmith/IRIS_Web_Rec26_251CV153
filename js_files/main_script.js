
let hamburger = document.querySelector(".hamburger")
let hamburger_menu_content = document.getElementById("menu")
let hamburger_span_one = document.querySelector(".nav-bar-container .nav-right .hamburger .one")
let hamburger_span_three = document.querySelector(".nav-bar-container .nav-right .hamburger .three")

hamburger.addEventListener('click', () => {
    hamburger_menu_content.classList.toggle("menu-bar-show")
    hamburger_span_one.classList.toggle("span-transform-one")
    hamburger_span_three.classList.toggle("span-transform-three")
})

let profilePopupView = document.querySelector(".nav-bar-container .profile-popup-view");
let navBarLeft = document.querySelector(".nav-bar-container .nav-left")
let userPic = document.querySelector('.nav-right figure')
let nav_profile_hamburger = document.querySelector(".nav-bar-container .profile-hamburger")


userPic.addEventListener('click', () => {
    navBarLeft.classList.add("disappear")
    userPic.classList.add("figure-border")
    profilePopupView.classList.add("profile-appear")
    nav_profile_hamburger.classList.add("profile-hamburger-show")
    hamburger.classList.add('hamburger-disappear')



})
nav_profile_hamburger.addEventListener('click', () => {
    navBarLeft.classList.remove("disappear")
    userPic.classList.remove("figure-border")
    profilePopupView.classList.remove("profile-appear")
    nav_profile_hamburger.classList.remove("profile-hamburger-show")
    hamburger.classList.remove('hamburger-disappear')


})
console.log(navBarLeft)



