const container = document.getElementById('container');
const clearBtn = document.getElementById('clear');
clearBtn.addEventListener('click', reset);

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function createGrid(size) {
  let area = size * size;
  let blockSize = 600 / size;
  container.style.gridTemplateColumns = `repeat(${blockSize}px, auto-fit)`;
  for(let i = 1; i <= area; i++ ){
      let block = document.createElement('div');
      block.classList.add('square');
      block.style.height = `${blockSize}px`;
      block.style.width = `${blockSize}px`;
      block.addEventListener("mouseover", changeColor);
      container.appendChild(block);
  }
}

function changeColor(event) {
  const randomR = Math.floor(Math.random() * 255);
  const randomG = Math.floor(Math.random() * 255);
  const randomB = Math.floor(Math.random() * 255);
  event.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
}

function reset() {
  let newSize = prompt("Enter new size");

  if (newSize !== null || newSize !== "") {
    if (newSize < 1 || newSize > 100) {
      alert("Enter a number from 1-100 range");
      reset();
    } else {
      removeAllChildNodes(container);
      createGrid(newSize);
    }
  }
}

window.addEventListener("load", reset);
