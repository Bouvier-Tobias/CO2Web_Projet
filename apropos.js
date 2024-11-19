const block = document.querySelector('#block1');
const leftarrow = document.querySelector('#block2');

leftarrow.addEventListener('click', () =>{
  block.classList.add("slide");
  console.log('salut');
})