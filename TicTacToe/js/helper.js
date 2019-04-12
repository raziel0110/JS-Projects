const win_array = [
  [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }],
  [{ x: 0, y: 1 }, { x: 1, y: 1 }, { x: 2, y: 1 }],
  [{ x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 }],
  [{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }],
  [{ x: 1, y: 0 }, { x: 1, y: 1 }, { x: 1, y: 2 }],
  [{ x: 2, y: 0 }, { x: 2, y: 1 }, { x: 2, y: 2 }],
  [{ x: 0, y: 0 }, { x: 1, y: 1 }, { x: 2, y: 2 }],
  [{ x: 2, y: 0 }, { x: 1, y: 1 }, { x: 0, y: 2 }]
];

function getMatrix() {
  let grid = [];
  let el;
  const rows = document.querySelectorAll(".row-cell");

  for (i = 0; i < rows.length; i++) {
    grid[i] = [];
    let cols = rows[i].children;
    for (j = 0; j < cols.length; j++) {
      el = cols[j];
      grid[i].push(el);
    }
  }
  return grid;
}

function retriveElement(x, y) {
  let matrix = getMatrix();
  for (let i = 0; i <= x; i++) {
    for (let j = 0; j <= y; j++) {
      return matrix[x][y];
    }
  }
}

function cellCoords(cell) {
  coord = { x: cell.x, y: cell.y };
  return coord;
}

function checkWin(arr) {
  return win_array.some(row => {
    return row.every(item => {
      return arr.find(el => item.x === el.x && item.y === el.y);
    });
  });
}

function resetGridElements() {
  const gridElements = document.querySelectorAll(".cell");
  gridElements.forEach(el => {
    if (el.classList.contains("xClass") || el.classList.contains("oClass")) {
      el.classList.remove("xClass");
      el.classList.remove("oClass");
      el.classList.remove("win-row");
      el.textContent = "";
    }
  });
}

function draw(grid) {
  if (!grid.gridCheckCellIsEmpty()) {
    modal.style.display = "block";
    win_message.textContent = "Its a draw";
  }
}
function getRowWin(arr) {
  return win_array.filter(row => {
    return row.every(cell => {
      return arr.find(el => cell.x == el.x && cell.y == el.y);
    });
  });
}

function displayRowWin(arr) {
  const rowCells = getRowWin(arr);
  console.log(rowCells);
  for (cells of rowCells) {
    for (cell of cells) {
      console.log(cell);
      const el = retriveElement(cell.x, cell.y);
      el.classList.add("win-row");
    }
  }
}

function resetScore(player1, player2) {
  if (player1.score == 3 || player2.score == 3) {
    player1.resetScore();
    player2.resetScore();
    play1.textContent = player1.score;
    play2.textContent = player2.score;
  }
}
