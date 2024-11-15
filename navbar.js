const allBoxes = document.querySelectorAll('.box');
const box = document.querySelector('.box');

// allBoxes.forEach(box => {
//   box.addEventListener('click', e =>{
//     e.target.classlist.toggle('.active');
//   })
// })

box.addEventListener("click", () => {
  box.classList.toggle("active");

})