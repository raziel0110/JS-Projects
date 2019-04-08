class Cell {
  constructor(x, y, element) {
    this.x = x;
    this.y = y;
    this.element = element;
    this.value = "";
  }

  getValue() {
    return this.value;
  }

  setValue(value) {
    this.value = value;
  }
}
