export const randomBoardGenerator = (rows: number,columns: number): number[][] => {
  const board: number[][] = [];

  for (let y = 0; y < rows; y++) {
    board[y] = [];

    for (let x = 0; x < columns; x++) {
      board[y][x] = Math.round(Math.random());
    }
  }

  return board;
};
