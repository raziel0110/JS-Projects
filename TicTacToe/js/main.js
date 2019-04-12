//object instantiation
const grid = new Grid();
const player1 = new Player("Player One", "X");
const player2 = new Player("Player Two", "O");
let cells = grid.retriveCell();
let playOneCheck = player1.coords;
let playTwoCheck = player2.coords;
// dom manipulation
const win_message = document.getElementById("win-text");
const modal = document.querySelector(".modal");
const newBtn = document.getElementById("new-game");
const play1 = document.getElementById("playerOne");
const play2 = document.getElementById("playerTwo");

let lastMove;
let currentPlayer;

function init() {
  currentPlayer = player1;
}

function start() {
  init();
  putValueCell();
}

function changePlayer() {
  if (lastMove === player1.name) {
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
// put in cell value block code
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
          el.innerHTML = currentPlayer.value;
          cell.value = currentPlayer.value;
          el.classList.add("xClass");
          cell.isLock = true;
          lastMove = currentPlayer.name;
          grid.gridCheckCellIsEmpty();
          draw(grid);
        } else {
          el.innerHTML = currentPlayer.value;
          cell.value = currentPlayer.value;
          el.classList.add("oClass");
          cell.isLock = true;
          lastMove = currentPlayer.name;
          draw(grid);
        }

        if (checkWin(playOneCheck) === true) {
          player1.incrementScore();
          play1.textContent = player1.score;
          play1.classList.add("player-animation");
          setTimeout(() => {
            play1.classList.remove("player-animation");
          }, 1000);
          displayRowWin(playOneCheck);
          setTimeout(() => {
            modal.style.display = "block";
            win_message.textContent = `${player1.name} Wins!`;
          }, 1500);
        } else if (checkWin(playTwoCheck) === true) {
          player2.incrementScore();

          play2.textContent = player2.score;
          play2.classList.add("player-animation");
          setTimeout(() => {
            play2.classList.remove("player-animation");
          }, 1000);
          displayRowWin(playTwoCheck);
          setTimeout(() => {
            modal.style.display = "block";
            win_message.textContent = `${player2.name} Wins!`;
          }, 1500);
        } else {
          return;
        }
      }
    });
  }
}

start();
// reset grid
newBtn.addEventListener("click", function() {
  modal.style.display = "none";
  grid.resetGrid();
  resetGridElements();
  playOneCheck = [];
  playTwoCheck = [];
  currentPlayer = player1.name;
  resetScore(player1, player2);
});
