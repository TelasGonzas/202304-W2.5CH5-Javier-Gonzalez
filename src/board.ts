export const randomBoardGenerator = (
  rows: number,
  columns: number
): number[][] => {
  const board: number[][] = [];

  for (let y = 0; y < rows; y++) {
    const row: number[] = [];

    for (let x = 0; x < columns; x++) {
      row.push(Math.round(Math.random()));
    }

    board.push(row);
  }

  return board;
};
