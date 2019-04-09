const grid = new Grid();
let cells = grid.retriveCell();
const player1 = "X";
const player2 = "O";
let lastMove;
let nextPlayer = player2;
let currentPlayer;
function init() {
  currentPlayer = player1;
}

function start() {
  init();
  putValueCell();
}

function changePlayer() {
  if (lastMove === player1) {
    currentPlayer = player2;
  } else {
    currentPlayer = player1;
  }

  return currentPlayer;
}

function putValueCell() {
  for (let cell of cells) {
    const el = retriveElement(cell.x, cell.y);
    el.addEventListener("click", function() {
      const currentPlayer = changePlayer();
      if (cell.isLock === true) {
        return;
      }
      if (!cell.isLock) {
        if (currentPlayer === player1) {
          el.innerHTML = currentPlayer;
          cell.value = currentPlayer;
          el.classList.add("xClass");
          cell.isLock = true;
          lastMove = currentPlayer;
        } else {
          el.innerHTML = currentPlayer;
          cell.value = currentPlayer;
          el.classList.add("oClass");
          cell.isLock = true;
          lastMove = currentPlayer;
        }
      }
    });
  }
}

start();
