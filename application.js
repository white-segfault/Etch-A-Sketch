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


