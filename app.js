const grid = document.querySelector('.grid');
const gridSize = document.querySelector('.grid-size-button');
const flexContainer = document.querySelector('.flex-container');
const gridSizeTitle = document.querySelector('.grid-size-title');


function createGrid() {
    for (i=0; i<256; i++) {
        const squares = document.createElement('div');
        grid.appendChild(squares);
        squares.classList.add('squares');
        grid.setAttribute('style', 'grid-template-columns: repeat(16, 2fr)', 'grid-template-rows: repeat(16, 2fr)');
        squares.addEventListener('mouseover', () => {
            squares.style.backgroundColor = 'black';
        })
    }
}
createGrid();

function chooseGrid() {
    let result;
    gridSize.addEventListener('click', () => {
        result = Number(prompt('Choose grid size between 2 and 100'));
        if (result >= 2 && result <= 100) {
        grid.replaceChildren("");
        newGrid(result, result);
        } else {
            alert("Please choose a number between 2 and 100");
        }
    })
}
chooseGrid();

function newGrid(num, num) {
    for (i=0; i<num*num; i++) {
        gridSizeTitle.textContent = `Grid Dimensions ${num}x${num}`;
        const squares = document.createElement('div');
        grid.appendChild(squares);
        squares.classList.add('squares');
        grid.setAttribute('style', `grid-template-columns: repeat(${num}, 2fr)`, `grid-template-rows: repeat(${num}, 2fr)`);
        squares.addEventListener('mouseover', () => {
        squares.style.backgroundColor = 'black';
        })
    }
    console.log(grid);
}

// function clearGrid(grid) {
//     console.log(grid);
//     grid.empty();
// };
