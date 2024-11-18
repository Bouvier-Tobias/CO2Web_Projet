const box = document.querySelector('.box');
const navLinks = document.querySelector(".nav-links");


box.addEventListener('click', () => {
  box.classList.toggle("active");
  navLinks.classList.toggle('mobile-menu');
})
