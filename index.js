function chessBoard() {
  const gameBoard = [];
  for (let i = 0; i < 8; i += 1) {
    for (let j = 0; j < 8; j += 1) {
      gameBoard.push([i, j]);
    }
  }

  return gameBoard;
}

function knightMoveGenerate(row, col) {
  const boardSize = 8;
  const moves = [
    { row: -2, col: -1 },
    { row: -2, col: 1 },
    { row: -1, col: -2 },
    { row: -1, col: 2 },
    { row: 1, col: -2 },
    { row: 1, col: 2 },
    { row: 2, col: -1 },
    { row: 2, col: 1 },
  ];
  const validMoves = [];
  for (move in moves) {
    const newRow = row + moves[move].row;
    const newCol = col + moves[move].col;
    if (
      newRow >= 0 &&
      newRow < boardSize &&
      newCol >= 0 &&
      newCol < boardSize
    ) {
      validMoves.push({ row: newRow, col: newCol });
    }
  }
  return validMoves;
}

const board = chessBoard();
const possibleMoves = knightMoves(5, 3);
for (move in possibleMoves) {
  console.log(possibleMoves[move]);
}
