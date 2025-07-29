import "./StartGame.css";

interface StartGameProps {
  length: number;
  setLength: (length: number) => void;
  setStartNewGame: (start: boolean) => void;
}

export default function StartGame({
  length,
  setLength,
  setStartNewGame,
}: StartGameProps) {
  return (
    <main className="start-game">
      <label htmlFor="word-length">Enter the length of a word:</label>
      <input
        id="word-length"
        type="number"
        min={1}
        placeholder="e.g., 5"
        value={length}
        onChange={(e) => setLength(parseInt(e.target.value))}
      />
      <button onClick={() => setStartNewGame(true)}>Start the Game</button>
    </main>
  );
}
