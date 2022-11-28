export { scrollFunction }
import { countUp, reset } from "./Counter.js";

let scrollStarted = false

const scrollPage = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 100 && !scrollStarted) {
        countUp()
        scrollStarted = true;
        console.log(scrollPosition)

    } else if (scrollPosition < 100 && scrollStarted) {
        reset()
        scrollStarted = false;

    }

}


const scrollFunction = () => {
    document.addEventListener('scroll', scrollPage)
}

scrollFunction()

