import Header from "./components/Header";
import "./App.css";
import { useState } from "react";
import AssemblyEndgame from "./components/AssemblyEndgame";
import StartGame from "./components/StartGame";

export default function App() {
  const [length, setLength] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("Colors");
  const [isGameStarted, setIsGameStarted] = useState(false);

  function onBack() {
    setIsGameStarted(false);
  }

  return (
    <main>
      <Header />
      {isGameStarted ? (
        <AssemblyEndgame
          length={length}
          setIsGameStarted={setIsGameStarted}
          onBack={onBack}
          category={selectedCategory}
        />
      ) : (
        <StartGame
          length={length}
          setLength={setLength}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          onStart={() => setIsGameStarted(true)}
        />
      )}
    </main>
  );
}
