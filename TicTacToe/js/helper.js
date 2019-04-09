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

win_array.forEach(win => {
  console.log(win);
});
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

const wins = [{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }];
const ps = [{ x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 0 }, { x: 2, y: 1 }];

function contains() {
  for (let i = 0; i < win_array.length; i++) {
    for (let j = 0; j < ps.length; j++) {
      if (wins[i].x == ps[j].x && wins[i].y == ps[j].y) {
        return true;
      }
    }
  }
  return false;
}

console.log(contains());
