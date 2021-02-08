/* Doesn't have a fixed container size */

const container = document.getElementById('container');
const clearBtn = document.getElementById('clear');

clearBtn.addEventListener('click', reset);

function reset(){
removeAllChildNodes(container);
let userChoice = Number(window.prompt('How many blocks per side?', ''))

if(userChoice == null || userChoice == ""){
  fillContainer(16);
} else if (userChoice > 100) {
  fillContainer(100)
} else {
  fillContainer(userChoice)
}
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function fillContainer(size){
    let area = size * size;
    container.style.height = `${area}px`; 
    container.style.width = `${area}px`;
    container.style.gridTemplateColumns = `repeat(${size}px, 1fr)`
    container.style.gridTemplateRows = `repeat(${size}px, 1fr)`
    for(let i = 1; i <= area; i++ ){
        let block = document.createElement('div');
        block.style.height = `${size}px`;
        block.style.width = `${size}px`;
        block.classList.add('square');
        container.appendChild(block);
    }

    let blocks = container.querySelectorAll('div')

    blocks.forEach(one => one.addEventListener('mouseover', ()=> {
      //one.style.backgroundColor = 'black'
        one.style.backgroundColor = randomColor();
    }))
}

function randomColor(){
  let random1 = Math.floor(Math.random() * 256)
  let random2 = Math.floor(Math.random() * 256)
  let random3 = Math.floor(Math.random() * 256)

  return `rgb(${random1}, ${random2}, ${random3})`;
}

reset()
