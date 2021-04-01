/* game of life v1.0.4 by Santiago Bernal - @santiaguf
v1.0.0 - Functional game
v1.0.1 - countNeighbors and ChangeCell functions
v1.0.2 - printGame function
v1.0.3 - allow GUI in browser
v1.0.4 - added eslint */

/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */
/* eslint-disable no-console */

function gameOfLife(initialGame, moves) {
  const resultGame = [[], [], []];

  function countNeighbors(i, j, initialGame) {
    let neighbors = 0;
    for (let k = i - 1; k <= i + 1; k += 1) {
      for (let l = j - 1; l <= j + 1; l += 1) {
        if (k < 0 || k > 2 || l < 0 || l > 2 || (k === i && l === j)) {
          // nothing
        } else {
          neighbors += initialGame[k][l];
        }
      }
    }
    return neighbors;
  }

  function changeCell(neighbors, initialGame, resultGame, i, j) {
    if (initialGame[i][j] === 0 && neighbors === 3) {
      // revive cell
      resultGame[i][j] = 1;
    } else if (initialGame[i][j] === 1 && (neighbors < 2 || neighbors > 3)) {
      // kill cell
      resultGame[i][j] = 0;
    } else {
      // same status
      resultGame[i][j] = initialGame[i][j];
    }
  }

  function printData(data) {
    console.log(data);
    const board = document.getElementById('board');
    board.appendChild(document.createTextNode(data));
    board.appendChild(document.createElement('br'));
  }

  function printGame(game, title) {
    // show results
    printData(title);
    let builder;
    for (let m = 0; m < 3; m += 1) {
      builder = '';
      for (let n = 0; n < 3; n += 1) {
        builder = `${builder}[${game[m][n]}]`;
      }
      printData(builder);
    }
    printData('');
  }

  for (let i = 0; i < 3; i += 1) {
    for (let j = 0; j < 3; j += 1) {
      const neighbors = countNeighbors(i, j, initialGame);
      changeCell(neighbors, initialGame, resultGame, i, j);
    }
  }

  printGame(initialGame, 'game');
  if (moves > 1) {
    // eslint-disable-next-line no-unused-vars
    gameOfLife(resultGame, moves - 1);
  }
}

/* let the game begin
const game = [[1, 0, 0], [0, 1, 1], [1, 1, 0]];
const moves = 6;
gameOfLife(game,moves); */
