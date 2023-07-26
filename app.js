const grid = document.querySelector('.grid');
// const squares = document.createElement('div');
// squares.style.backgroundColor = 'blue';
// const gridSize = document.querySelector('.gridSize');
const gridSize = document.querySelector('.gridSizeButton');

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
    // console.log(grid);
}
createGrid();

// function chooseGrid() {
//     let result;
//     gridSize.addEventListener('change', (e) => {
//         result = e.target.value;
//         console.log(result);
//     })
// }
// chooseGrid();

function chooseGrid() {
    let result;
    gridSize.addEventListener('click', () => {
        result = Number(prompt('Choose grid size'));
        console.log(result);
        grid.replaceChildren("");
        // console.log(grid);
        // clearGrid(grid);
        newGrid(result, result);
        // newGrid(result, result);
    })
}
chooseGrid();

// function clearGrid(grid) {
//     console.log(grid);
//     grid.empty();
// };


function newGrid(num, num) {
    for (i=0; i<num*num; i++) {
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
// newGrid();