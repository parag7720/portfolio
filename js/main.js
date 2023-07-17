//Navigation bar effects on scroll
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})
//Portfolio section - Modal
const serviceModals = document.querySelectorAll(".service-modal");
const learnmorebtns = document.querySelectorAll(".learn-more-btn");
const modalcloseBtns = document.querySelectorAll(".modal-close-btn");
const lightdarkbtn=document.querySelector(".light-dark-btn");

var modal = function (modalClick) {
    serviceModals[modalClick].classList.add("active");
}
learnmorebtns.forEach((learnmorebtn, i) => {
    learnmorebtn.addEventListener("click", () => {
        modal(i);
    });
});
modalcloseBtns.forEach((modalCloseBtn)=> {
        modalCloseBtn.addEventListener("click", () => {
            serviceModals.forEach((modalView) => {
                modalView.classList.remove("active");
            });
        });
});
//Our clients - Swiper
let val=1;
//Website dark/light theme
lightdarkbtn.addEventListener("click",()=>{
    document.body.classList.toggle("dark-theme");
    lightdarkbtn.classList.toggle("sun");

    localStorage.setItem("saved-theme",getTheme());
    localStorage.setItem("saved-icon",getIcon());
});

const getTheme=()=> document.body.classList.contains("dark-theme")?"dark":"light";
const getIcon=()=>lightdarkbtn.classList.contains("sun")?"sun":"moon";

const savedtheme=localStorage.getItem("saved-theme");
const savedicon=localStorage.getItem("saved-icon");

if(savedtheme)
{
    document.body.classList[savedtheme==="dark"?"add":"remove"]("dark-theme");
    lightdarkbtn.classList[savedicon==="sun"?"add":"remove"]("sun");
}

//Scroll to top button
const scrolltopbtn=document.querySelector(".scrolltotop-btn");

window.addEventListener("scroll",function(){
    scrolltopbtn.classList.toggle("active",window.scrollY>500);
});

scrolltopbtn.addEventListener("click",function(){
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0;
})

//Navigation menu items active on page scroll
window.addEventListener("scroll",()=>{
    const sections=document.querySelectorAll("section");
    const scrollcurr=scrollY;
// console.log(scrollcurr);
    sections.forEach(current=>{
        let sectionhei=current.offsetHeight;
        let sectiontop=current.offsetTop-50;
        let id=current.getAttribute("id");
// console.log(id);
        if(scrollcurr>sectiontop && scrollcurr<= sectiontop+sectionhei)
        {
           console.log(document.querySelector(".nav-items a[href*=" + id + "]").classList.add("active"));
        }
        else
        {
            document.querySelector(".nav-items a[href*="+id+ "]").classList.remove("active");
        }
    });
});
//Responsive navigation menu toggle
const navmenubtn=document.querySelector(".nav-menu-btn");
const navclosebtn=document.querySelector(".nav-close-btn");
const navmenu=document.querySelector(".navigation");
const navitem=document.querySelectorAll(".nav-items a");

navmenubtn.addEventListener("click",()=>{
    navmenu.classList.add("active");
});
navclosebtn.addEventListener("click",()=>{
    navmenu.classList.remove("active");
});
navitem.forEach((i)=>{
i.addEventListener("click",()=>{
    navmenu.classList.remove("active");
});
});
//Scroll reveal animations
//Common reveal options to create reveal animations
ScrollReveal({
    // reset: true,/
    distance:'60px',
    duration:1200,
    // delay:10
})
//Target elements, and specify options to create reveal animations
ScrollReveal().reveal('.home .info h2, .section-title-1, .section-title-2',{delay:250, origin:'left'});
ScrollReveal().reveal('.home .info h3, .home .info p, .about-info .btn',{delay:300, origin:'right'});
ScrollReveal().reveal('.home .info .btn',{delay:350, origin:'bottom'});
ScrollReveal().reveal('.media-icons i, .contact-left li',{delay:250, origin:'left', interval:200});
ScrollReveal().reveal('.home-img, about-img',{delay:250, origin:'bottom'});

ScrollReveal().reveal('.about .description, .contact-right',{delay:300, origin:'right'});
ScrollReveal().reveal('.about .professional-list li',{delay:250, origin:'right', interval:200});
ScrollReveal().reveal('.skills-description .services-description .contact-card, .contact-left h2',{delay:700, origin:'left'});
ScrollReveal().reveal('.expirience-card, .service-card, .education, .portfolio .img-card',{delay:400, origin:'bottom', interval:200});
ScrollReveal().reveal('.group ,.info ,.follow',{delay:250, origin:'top', interval:200});