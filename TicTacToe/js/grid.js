class Grid {
  constructor() {
    this.gridArray = [];
    this.initGrid();
  }

  initGrid() {
    // $(".row-cell").each((rowIndex, rowElement) => {
    //   this.gridArray[rowIndex] = [];
    //   $(rowElement)
    //     .children()
    //     .each((colIndex, cellElement) => {
    //       const cell = new Cell(rowIndex, colIndex, cellElement);
    //       this.gridArray[rowIndex].push(cell);
    //       console.log(cell);
    //     });
    // });
    let el;
    let rows = document.getElementsByClassName("row-cell");

    for (let x = 0; x < rows.length; x++) {
      this.gridArray[x] = [];
      let cols = rows[x].children;
      for (let y = 0; y < cols.length; y++) {
        el = cols[y];
        const cell = new Cell(x, y, el);
        this.gridArray[x].push(cell);
      }
    }
  }

  retriveCell() {
    const cells = [];

    for (let x = 0; x < this.gridArray.length; x++) {
      let rows = this.gridArray[x];
      for (let y = 0; y < rows.length; y++) {
        let cell = rows[y];
        cells.push(cell);
      }
    }
    return cells;
  }

  getCellValue(x, y) {
    return this.gridArray[x][y].getValue();
  }

  setCellValue(x, y, value) {
    return this.gridArray[x][y].setValue(value);
  }

  resetGrid() {
    for (let x = 0; x < this.gridArray.length; x++) {
      let rows = this.gridArray[x];
      for (let y = 0; y < rows.length; y++) {
        let cell = rows[y];
        if (cell.isLock === true) {
          cell.isLock = false;
          cell.value = "";
        }
      }
    }
  }

  gridCheckCellIsEmpty() {
    return this.gridArray.some(row => {
      return row.some(cell => {
        return cell.isLock === false;
      });
    });
  }
}
