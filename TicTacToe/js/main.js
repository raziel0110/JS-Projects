const grid = new Grid();
let cells = grid.retriveCell();
const win_message = document.getElementById("win-text");
const modal = document.querySelector(".modal");
const newBtn = document.getElementById("new-game");
const player1 = "X";
const player2 = "O";
let lastMove;
let nextPlayer = player2;
let currentPlayer;

let playOneCheck = [];
let playTwoCheck = [];

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

function playerGridValue(currentPlayer, coord_cell) {
  if (currentPlayer === player1) {
    playOneCheck.push(coord_cell);
  } else if (currentPlayer === player2) {
    playTwoCheck.push(coord_cell);
  } else {
    return;
  }
}

function putValueCell() {
  for (let cell of cells) {
    const el = retriveElement(cell.x, cell.y);
    el.addEventListener("click", function() {
      const coord_cell = cellCoords(cell);
      const currentPlayer = changePlayer();
      if (cell.isLock === true) {
        return;
      }
      if (!cell.isLock) {
        playerGridValue(currentPlayer, coord_cell);

        if (currentPlayer === player1) {
          el.innerHTML = currentPlayer;
          cell.value = currentPlayer;
          el.classList.add("xClass");
          cell.isLock = true;
          lastMove = currentPlayer;
          grid.gridCheckCellIsEmpty();
          draw(grid);
        } else {
          el.innerHTML = currentPlayer;
          cell.value = currentPlayer;
          el.classList.add("oClass");
          cell.isLock = true;
          lastMove = currentPlayer;
          draw(grid);
        }
        if (checkWin(playOneCheck) === true) {
          console.log(checkWin(playOneCheck));
          modal.style.display = "block";
          win_message.textContent = "Player One Wins!";
        } else if (checkWin(playTwoCheck) === true) {
          modal.style.display = "block";
          win_message.textContent = "Player Two Wins!";
        } else {
          return;
        }
      }
    });
  }
}

start();

newBtn.addEventListener("click", function() {
  modal.style.display = "none";
  grid.resetGrid();
  resetGridElements();
  playOneCheck = [];
  playTwoCheck = [];
  currentPlayer = player1;
});
