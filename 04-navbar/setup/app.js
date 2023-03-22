// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class


let navToggle = document.querySelector('.nav-toggle')
let navLinks = document.querySelector('.links')

navToggle.addEventListener('click', ()=>{
    // if(navLinks.classList.contains('show-links')){
    //     navLinks.classList.remove('show-links')
    // }else{
    //     navLinks.classList.add('show-links')
    // }
    navLinks.classList.toggle('show-links')
})
