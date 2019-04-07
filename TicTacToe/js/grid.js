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
        console.log(el);
        const cell = new Cell(x, y, el);
        this.gridArray[x].push(cell);
      }
    }
    console.log(this.gridArray);
  }
}
