export const setGameBoard = (gameBoard: string[][]) => {
  let screenBoard = "";

  for (let i = 0; i < gameBoard.length; i++) {
    screenBoard = gameBoard[i].join("");
    console.log(screenBoard);
  }
  return screenBoard;
};
