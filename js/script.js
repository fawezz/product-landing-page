const menu = document.querySelector("#menu");
const [rect1, rect2, rect3] = document.querySelectorAll('.rect');
const nav = document.querySelector("nav");
menu.addEventListener("click", slide)

function toggle_class(element, klass){
    element.classList.toggle(klass)
}
function slide(){
    toggle_class(rect1, "flip1")
    toggle_class(rect2, "slide-away")
    toggle_class(rect3, "flip2")
    toggle_class(nav, "slide")
}
