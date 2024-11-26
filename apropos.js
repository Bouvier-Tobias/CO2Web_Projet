const rightArrow = document.querySelector('#imgarrow');
const slide = document.querySelector('.slider');
const leftArrow = document.querySelector('#leftarrow');

rightArrow.addEventListener('click', ()=>{
  slide.style.transform = 'translateX(-100vw)';
  console.log('salut');
})

leftArrow.addEventListener('click',()=>{
  slide.style.transform = 'translateX(0)';
})