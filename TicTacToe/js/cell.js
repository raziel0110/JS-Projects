class Cell {
  constructor(x, y, element) {
    this.x = x;
    this.y = y;
    this.element = element;
    this.value = "";
  }

  getCellValue() {
    return this.value;
  }

  setCellValue(value) {
    this.value = value;
  }
}
