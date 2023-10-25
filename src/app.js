
const hamburger = document.querySelector('.hamburger')
const mobileNav = document.querySelector('.mobile-navigation .nav')
   

hamburger.addEventListener('click', function(){
    mobileNav.classList.toggle("toggle");
}); 