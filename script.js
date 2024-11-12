
const text = document.querySelector('h2');

function getChrono() {
    const now = new Date().getTime();
    const countdownDate = new Date('May 1, 2025').getTime();

    const distanceBase = countdownDate - now;

    const days = Math.floor(distanceBase / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distanceBase % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((distanceBase % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((distanceBase % (1000 * 60)) / 1000);

    text.innerText = `${days}j ${hours}h ${minutes}m ${seconds}s`;

}

getChrono()

const countdownInterval = setInterval(() => {

    getChrono()

}, 1000);

