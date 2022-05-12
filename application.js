let squareLength = 16;

const body = document.querySelector("body");
const board = document.querySelector(".board");


for (let i = 0; i < squareLength; ++i) {
    const rows = document.createElement('div');
    rows.className = "rows";

    for (let j = 0; j < squareLength; ++j) {
        const grid = document.createElement('div');
        grid.className = "grid";
        rows.appendChild(grid);
    }
    board.appendChild(rows);
}

// Generates a random color and returns its corresponding string representation
function randomColor() {
    let red, green, blue;
    let colorRep;
    red = Math.floor(Math.random() * 256);
    green = Math.floor(Math.random() * 256);
    blue = Math.floor(Math.random() * 256);
    colorRep = "rgb(" + red + ", " + green + ", " + blue + ")";
    return colorRep;
}

// Colors the grid (to an random rgb color)
function color_grid(grid) {
    grid.style.backgroundColor = randomColor();
}


const grids = document.querySelectorAll(".board > .rows > .grid");

grids.forEach((grid) => {

    grid.addEventListener('mouseenter', function(e) {
        color_grid(grid);
        e.stopPropagation();
    }, {capture: false, once:true});
})


