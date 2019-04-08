const player1 = "X";
const player2 = "0";

const grid = new Grid();
let elements = grid.gridArray;

const cells = document.getElementsByClassName("cell");
console.log(cells);

cells.forEach(element => {
  element.addEventListener("click", function() {
    alert("!");
  });
});
