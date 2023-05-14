import { checkCellNumbers } from "./checkCellsNumb.js";
import { setGameBoard } from "./gameBoard.js";
import { randomBoardGenerator } from "./board.js";
import { gameRules } from "./gameRules.js";

const startGame = (rows: number, columns: number) => {
  const gameSpeed = 1000;
  const board = randomBoardGenerator(rows, columns);
  setGameBoard(board);

  setInterval(() => {
    console.clear();
    const aliveCells = checkCellNumbers(board);
    gameRules(board, aliveCells);
    setGameBoard(board);
  }, gameSpeed);
};

startGame(15, 30);
