const win_array = [
  [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }],
  [{ x: 0, y: 1 }, { x: 1, y: 1 }, { x: 2, y: 1 }],
  [{ x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 }],
  [{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }],
  [{ x: 1, y: 0 }, { x: 1, y: 1 }, { x: 0, y: 2 }],
  [{ x: 2, y: 0 }, { x: 2, y: 1 }, { x: 2, y: 2 }],
  [{ x: 0, y: 0 }, { x: 1, y: 1 }, { x: 2, y: 2 }],
  [{ x: 3, y: 0 }, { x: 1, y: 1 }, { x: 0, y: 3 }]
];

// win_array.forEach(win => {});
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

const wins = [{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }];
const ps = [{ x: 0, y: 1 }];

function checkWin(arr) {
  return win_array.some(row => {
    return row.every(item => {
      return arr.find(el => item.x === el.x && item.y === el.y);
    });
  });
}
