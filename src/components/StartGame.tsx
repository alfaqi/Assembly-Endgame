import { getMinLength } from "../utils/utils";
import "./StartGame.css";

interface StartGameProps {
  length: number;
  setLength: (length: number) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  onStart: () => void;
}

export default function StartGame({
  length,
  setLength,
  selectedCategory,
  setSelectedCategory,
  onStart,
}: StartGameProps) {
  const categories = ["Colors", "General"];
  const min = getMinLength(selectedCategory);
  return (
    <main className="start-game">
      <label htmlFor="word-length">Enter the length of a word:</label>
      <input
        id="word-length"
        type="number"
        min={min}
        placeholder="e.g., 5"
        value={length}
        onChange={(e) => setLength(parseInt(e.target.value))}
      />

      <hr />
      <label>Select Word Category:</label>
      <div className="category-options">
        {categories.map((category) => (
          <label key={category} className="category-option">
            <input
              type="radio"
              name="category"
              value={category}
              checked={selectedCategory === category}
              onChange={(e) => {
                setSelectedCategory(e.target.value);
                setLength(min);
              }}
            />
            {category}
          </label>
        ))}
      </div>

      <button onClick={onStart}>Start the Game</button>
    </main>
  );
}
