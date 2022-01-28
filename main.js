const menuIcon = document.getElementById("menu-icon");
const slideoutmenu = document.getElementById("slideout-menu");

menuIcon.addEventListener('click', function (){
    if (slideoutmenu.style.opacity == "1") {
        slideoutmenu.style.opacity ="0";
        slideoutmenu.style.pointerEvents = 'none';
    } else {
        slideoutmenu.style.opacity ="1";
        slideoutmenu.style.pointerEvents = 'auto';
    }
})