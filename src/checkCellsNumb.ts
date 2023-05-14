export const checkCellNumbers = (gameBoard: number[][]) => {
  const cellsBoard = [];

  for (let x = 0; x < gameBoard.length; x++) {
    const asideCells = [];
    for (let y = 0; y < gameBoard[x].length; y++) {
      let aliveCells = 0;

      const isAlive = (x: number, y: number) =>
        gameBoard[x] && gameBoard[x][y] && gameBoard[x][y] === 1;

      if (isAlive(x - 1, y - 1)) ++aliveCells;
      if (isAlive(x - 1, y)) ++aliveCells;
      if (isAlive(x - 1, y + 1)) ++aliveCells;
      if (isAlive(x, y - 1)) ++aliveCells;
      if (isAlive(x, y + 1)) ++aliveCells;
      if (isAlive(x + 1, y - 1)) ++aliveCells;
      if (isAlive(x + 1, y)) ++aliveCells;
      if (isAlive(x + 1, y + 1)) ++aliveCells;

      asideCells.push(aliveCells);
    }
    cellsBoard.push(asideCells);
  }
  return cellsBoard;
};
