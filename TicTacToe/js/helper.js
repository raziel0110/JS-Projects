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
