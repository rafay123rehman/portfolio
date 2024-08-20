// scrollsection


let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}

let sections = document.querySelectorAll('sections');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
   sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight - 100;
    let id = sec.getAttribute('id');
    
    if(top >= offset && top < offset + height){
        navLinks.forEach(links =>{
        links.classList.remove('active');
        document.querySelector('header nav a[herf*= ' +  id  + ']').classList.add('active');
        });
        //active sections for animations on scroll
        sec.classList.add('show-animate');
    }
    else{
        sec.classList.remove('show-animate');
    }
        
    });


    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    //remove toggle icon and navbar
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

}