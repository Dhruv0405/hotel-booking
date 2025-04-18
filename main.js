// Header scroll


// nav Slider
let nav = document.querySelector(".navbar");
window.onscroll = function (){
    if(document.documentElement.scrollTop > 50){
        nav.classList.add("header-scrolled");
    }else{
        nav.classList.remove("header-scrolled");
    }
}
//  nav hide
let navbar = document.querySelectorAll(".nav-link");
let navcollapse = document.querySelector(".navbar-collapse.collapse");
navbar.forEach(function(a){
    a.addEventListener("click", function(){
        navcollapse.classList.remove("show");
    })
})

// Swiper slider
var swiper = new Swiper(".MySwiper", {
    direction: "vertical",
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 3500,
    },
});

// counter design
document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration) {
        let obj = document.getElementById(id),
        current = start,
        range = end - start,
        increment = end > start ? 1 : -1,
        step = Math.abs(Math.floor(duration / range)),
        timer = setInterval(() => {
            current += increment;
            obj.textContent = current;
            if(current == end){
                clearInterval(timer);
            }
        },step);
    }
    counter("count1", 0 , 1287, 3000);
    counter("count2", 100 , 5786, 3500);
    counter("count3", 200 , 1487, 3000);
    counter("count4", 0 , 1887, 3000);
});

// our partner
var swiper = new  Swiper(".our-partner",{
    slidesPerView: 5,
    spaceBetween: 30,
    loop: true,
    autoplay:{
        delay: 2000,
    },
    breakpoints: {
        '991':{
            slidesPerView: 5,
            spaceBetween: 10,
        },
        '767':{
            slidesPerView: 3,
            spaceBetween: 10,
        },
        '320':{
            slidesPerView: 2,
            spaceBetween: 8,
        },
    }
});
