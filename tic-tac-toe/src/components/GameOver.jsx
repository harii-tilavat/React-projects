export default function GameOver({ winner, onRestartMatch }) {
  return (
    <div id="game-over">
      <h2>Game over!</h2>
      {winner && <p>{winner} won!</p>}
      {!winner && <p>It's draw!</p>}

      <p>
        <button onClick={onRestartMatch}>Rematch</button>
      </p>
    </div>
  );
}
