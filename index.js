const menuEL = document.querySelector(".menuContainer");

const openMenu = () => {
    menuEL.classList.add("show"); 
};
const closeMenu = () => {
    menuEL.classList.remove("show");
};