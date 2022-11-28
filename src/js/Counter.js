export { countUp, reset }

const counters = document.querySelectorAll('.counter__number');

const countUp = () => {
    counters.forEach(counter => {
        counter.innerText = '0';

        const updateCounter = () => {
            const target = +counter.getAttribute('data-count');
            const currentItem = +counter.textContent;
            const increment = target / 100;
            if (currentItem < target) {
                counter.textContent = `${Math.ceil(currentItem + increment)}`;
                setTimeout(updateCounter, 5)
            } else {
                counter.textContent = target
            }

        }
        updateCounter();
    })
}
countUp()

const reset = () => {
    counters.forEach(counter => {
        counter.textContent = '0';
    })
}
