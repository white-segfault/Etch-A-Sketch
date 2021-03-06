let squareLength = 16; // initial square length
const board = document.querySelector(".board");
let rainbowOn = false;
start_board();
configure_functionality();

// Initialises a new game
function start_board() {
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
}

// Ends the game by clearing the board
function end_board() {
    while (board.firstChild) {
        board.removeChild(board.firstChild)
    }
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
function color_grid_rainbow(grid) {
    grid.style.backgroundColor = randomColor();
}
function color_grid_black(grid) {
    grid.style.backgroundColor = "black";
}

// Initialises the setting that allows functionality of the game
function configure_functionality() {
    const grids = document.querySelectorAll(".board > .rows > .grid");
    const buttonBlack = document.querySelector("button.black");
    const buttonRainbow =  document.querySelector("button.rainbow");

    buttonRainbow.addEventListener('click', function(e) {
        rainbowOn = true;
        e.stopPropagation();
    });

    buttonBlack.addEventListener('click', function(e) {
        rainbowOn = false;
        e.stopPropagation();
    });

    grids.forEach((grid) => {
        grid.addEventListener('mouseenter', function(e) {
            if (rainbowOn) {
                color_grid_rainbow(grid);
            } else {
                color_grid_black(grid);
            }
            e.stopPropagation();
        }, {capture: false, once:true});
    });
}

const resize = document.querySelector(".sizes > button.resize");
const restart = document.querySelector(".sizes > button.restart");
resize.addEventListener('click', function(e) {
    squareLength = +prompt("Please enter the number of squares per side for the new board:");
    squareLength = Math.min(200, squareLength);
    end_board();
    start_board();
    configure_functionality();
})

restart.addEventListener('click', function(e) {
    end_board();
    start_board();
    configure_functionality();
})