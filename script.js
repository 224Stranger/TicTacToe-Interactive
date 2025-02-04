// // script.js
// const board = document.querySelector('.board');
// const cells = document.querySelectorAll('.cell');
// const statusText = document.getElementById('status');
// const restartButton = document.getElementById('restart-button');

// let currentPlayer = 'X';
// let gameActive = true;
// let gameState = ['', '', '', '', '', '', '', '', ''];

// const winningConditions = [
//   [0, 1, 2], // Top row
//   [3, 4, 5], // Middle row
//   [6, 7, 8], // Bottom row
//   [0, 3, 6], // Left column
//   [1, 4, 7], // Middle column
//   [2, 5, 8], // Right column
//   [0, 4, 8], // Diagonal
//   [2, 4, 6]  // Diagonal
// ];

// function handleCellClick(event) {
//   const clickedCell = event.target;
//   const clickedCellIndex = parseInt(clickedCell.getAttribute('data-index'));

//   if (gameState[clickedCellIndex] !== '' || !gameActive) {
//     return;
//   }

//   gameState[clickedCellIndex] = currentPlayer;
//   clickedCell.textContent = currentPlayer;
//   clickedCell.classList.add(currentPlayer);

//   checkForWinner();
// }

// function checkForWinner() {
//   let roundWon = false;

//   for (let i = 0; i < winningConditions.length; i++) {
//     const [a, b, c] = winningConditions[i];
//     if (gameState[a] === '' || gameState[b] === '' || gameState[c] === '') {
//       continue;
//     }
//     if (gameState[a] === gameState[b] && gameState[b] === gameState[c]) {
//       roundWon = true;
//       break;
//     }
//   }

//   if (roundWon) {
//     statusText.textContent = `Player ${currentPlayer} wins!`;
//     gameActive = false;
//     return;
//   }

//   if (!gameState.includes('')) {
//     statusText.textContent = 'Draw!';
//     gameActive = false;
//     return;
//   }

//   currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
//   statusText.textContent = `It's ${currentPlayer}'s turn`;
// }

// function restartGame() {
//   gameState = ['', '', '', '', '', '', '', '', ''];
//   gameActive = true;
//   currentPlayer = 'X';
//   statusText.textContent = `It's ${currentPlayer}'s turn`;
//   cells.forEach(cell => {
//     cell.textContent = '';
//     cell.classList.remove('X', 'O');
//   });
// }

// cells.forEach(cell => cell.addEventListener('click', handleCellClick));
// restartButton.addEventListener('click', restartGame);

// // Initialize game status
// statusText.textContent = `It's ${currentPlayer}'s turn`;






// script.js
const board = document.querySelector('.board');
const cells = document.querySelectorAll('.cell');
const statusText = document.getElementById('status');
const restartButton = document.getElementById('restart-button');

let currentPlayer = 'X';
let gameActive = true;
let gameState = ['', '', '', '', '', '', '', '', ''];

const winningConditions = [
  [0, 1, 2], // Top row
  [3, 4, 5], // Middle row
  [6, 7, 8], // Bottom row
  [0, 3, 6], // Left column
  [1, 4, 7], // Middle column
  [2, 5, 8], // Right column
  [0, 4, 8], // Diagonal
  [2, 4, 6]  // Diagonal
];

function handleCellClick(event) {
  const clickedCell = event.target;
  const clickedCellIndex = parseInt(clickedCell.getAttribute('data-index'));

  if (gameState[clickedCellIndex] !== '' || !gameActive) {
    return;
  }

  gameState[clickedCellIndex] = currentPlayer;
  clickedCell.textContent = currentPlayer;
  clickedCell.classList.add(currentPlayer);

  checkForWinner();
}

function checkForWinner() {
  let roundWon = false;

  for (let i = 0; i < winningConditions.length; i++) {
    const [a, b, c] = winningConditions[i];
    if (gameState[a] === '' || gameState[b] === '' || gameState[c] === '') {
      continue;
    }
    if (gameState[a] === gameState[b] && gameState[b] === gameState[c]) {
      roundWon = true;
      // Highlight winning cells
      cells[a].classList.add('winning-cell');
      cells[b].classList.add('winning-cell');
      cells[c].classList.add('winning-cell');
      break;
    }
  }

  if (roundWon) {
    statusText.textContent = `Player ${currentPlayer} wins!`;
    gameActive = false;
    return;
  }

  if (!gameState.includes('')) {
    statusText.textContent = 'Draw!';
    gameActive = false;
    return;
  }

  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  statusText.textContent = `It's ${currentPlayer}'s turn`;
}

function restartGame() {
  gameState = ['', '', '', '', '', '', '', '', ''];
  gameActive = true;
  currentPlayer = 'X';
  statusText.textContent = `It's ${currentPlayer}'s turn`;
  cells.forEach(cell => {
    cell.textContent = '';
    cell.classList.remove('X', 'O', 'winning-cell');
  });
}

cells.forEach(cell => cell.addEventListener('click', handleCellClick));
restartButton.addEventListener('click', restartGame);

// Initialize game status
statusText.textContent = `It's ${currentPlayer}'s turn`;