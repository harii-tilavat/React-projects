// const initialGameBoard = Array.from({ length: 3 }, () => new Array(3).fill());
export function GameBoard({ onSelectSqure, board }) {
  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((symbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelectSqure(rowIndex, colIndex)}
                  disabled={!!symbol}
                >
                  {symbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}

//   let gameBoard = initialGameBoard;
//   for (const turn of turns) {
//     const { square, player } = turn;
//     const { row, col } = square;
//     gameBoard[row][col] = player;
//   }
//   const [gameBoard, setGameBoard] = useState(initialGameBoard);

//   function handleSelectSquare(rowIndex, colIndex) {
//     setGameBoard((prevGameBoard) => {
//       let updatedBoard = [...prevGameBoard.map((innerArr) => [...innerArr])];
//       updatedBoard[rowIndex][colIndex] = activePlayer;
//       console.log("UPDATED : ", updatedBoard);
//       return updatedBoard;
//     });
//     onSelectSqure();
//   }
