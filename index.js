const container = document.getElementById('grid');

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256); 
    return `rgb(${r}, ${g}, ${b})`;
}

function createGrid(size) {

    if(size > 64) {
        console.error("Cannot be bigger than 64!");
        size = 64
    }

    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for(let i = 0; i < size * size; ++i) {
        const square = document.createElement('div')
        square.classList.add('grid-square')
        container.appendChild(square)

        square.addEventListener("mouseover", function() {square.style.backgroundColor = `${getRandomColor()}`});
        square.addEventListener("click", function() {square.style.backgroundColor = 'black'});
    }
}

function resize() {
    let size = prompt("Enter the new grids size");

    container.innerHTML = '';

    createGrid(size)
}

createGrid(16)

