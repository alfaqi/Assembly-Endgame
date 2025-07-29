import "./CategorySelector.css";

interface CategorySelectorProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  onStart: () => void;
}

export default function CategorySelector({
  selectedCategory,
  setSelectedCategory,
  onStart,
}: CategorySelectorProps) {
  const categories = ["Colors", "Generic Words"];

  return (
    <main className="category-selector">
      <h2>Select Word Category</h2>
      <div className="category-options">
        {categories.map((category) => (
          <label key={category} className="category-option">
            <input
              type="radio"
              name="category"
              value={category}
              checked={selectedCategory === category}
              onChange={(e) => setSelectedCategory(e.target.value)}
            />
            {category}
          </label>
        ))}
      </div>
      <button onClick={onStart}>Start Game</button>
    </main>
  );
}
