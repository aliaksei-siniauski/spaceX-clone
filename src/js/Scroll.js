export { scrollFunction }
import { countUp, reset } from "./Counter.js";

const page1IintroContent = document.querySelector('.intro__content');
const introArrowDown = document.querySelector('.intro__arrow');


let scrollStarted = false



const scrollPage = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 100 && !scrollStarted) {
        countUp()
        scrollStarted = true;
        page1IintroContent.classList.add("hidden")
        introArrowDown.classList.add("hidden")


    } else if (scrollPosition < 100 && scrollStarted) {
        reset()
        scrollStarted = false;
        page1IintroContent.classList.remove("hidden")
        introArrowDown.classList.remove("hidden")


    }

}

const scrollFunction = () => {
    document.addEventListener('scroll', scrollPage)
}

scrollFunction()

