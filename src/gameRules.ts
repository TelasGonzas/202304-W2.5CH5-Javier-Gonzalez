export const gameRules = (gameBoard: any, aliveCells: any) => {
  for (let x = 0; x < gameBoard.length; x++) {
    for (let y = 0; y < gameBoard[x].length; y++) {
      if (gameBoard[x][y] === 1 && aliveCells[x][y] < 2) {
        gameBoard[x][y] = 0;
      }

      if (gameBoard[x][y] === 1 && aliveCells[x][y] > 3) {
        gameBoard[x][y] = 0;
      }

      if (gameBoard[x][y] === 0 && aliveCells[x][y] === 3) {
        gameBoard[x][y] = 1;
      }
    }
  }

  return gameBoard;
};
