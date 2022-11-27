
export { addClickHandlerToBurger, addClickHandlerToOverlay }

const burger = document.querySelector(".burger")
const overlay = document.querySelector("#overlay")
const mobileMenu = document.querySelector(".mobile-menu")



const addClickHandlerToBurger = () => {

    burger.addEventListener("click", () => {
        burger.classList.toggle("open")
        overlay.classList.toggle("overlay-show")
        document.body.classList.toggle("stop-scrolling")
        mobileMenu.classList.toggle("mobile-menu-show")
    })
}

const addClickHandlerToOverlay = () => {
    overlay.addEventListener("click", () => {
        if (overlay.classList.contains('overlay-show')) {
            overlay.classList.remove('overlay-show')
            mobileMenu.classList.remove('mobile-menu-show')
            burger.classList.remove('open');
            document.body.classList.remove('stop-scrolling');
        }
    })
}

addClickHandlerToBurger();
addClickHandlerToOverlay();