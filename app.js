const grid = document.querySelector('.grid');
// const squares = document.createElement('div');
// squares.style.backgroundColor = 'blue';

function createGrid() {
    for (i=0; i<256; i++) {
        const squares = document.createElement('div');
        grid.appendChild(squares);
        squares.classList.add('squares');
    }
    console.log(grid);
}
createGrid();