// Header Scroll
let nav = document.querySelector(".navbar");
window.onscroll = function () {
    if (document.documentElement.scrollTop > 10) {
    nav.classList.add("header-scrolled");
    nav.css('position','fixed');
    nav.css('background-color','white');

    } else{
    nav.classList.remove("header-scrolled");
    }
}
// nav hide
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function(a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})