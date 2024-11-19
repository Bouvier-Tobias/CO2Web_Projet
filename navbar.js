const box = document.querySelector('.box');
const navLinks = document.querySelector(".nav-links");
const footer = document.querySelector('footer')

box.addEventListener('click', () => {
  box.classList.toggle("active");
  navLinks.classList.toggle('mobile-menu');
  footer.classList.toggle('footer-mobile');
})
