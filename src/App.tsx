import Header from "./components/Header";
import "./App.css";
import { useState } from "react";
import AssemblyEndgame from "./components/AssemblyEndgame";
import StartGame from "./components/StartGame";

export default function App() {
  const [length, setLength] = useState(0);
  const [startNewGame, setStartNewGame] = useState(false);

  function onBack() {
    setStartNewGame(false);
  }

  return (
    <main>
      <Header />
      {startNewGame ? (
        <AssemblyEndgame
          length={length}
          setStartNewGame={setStartNewGame}
          onBack={onBack}
        />
      ) : (
        <StartGame
          length={length}
          setLength={setLength}
          setStartNewGame={setStartNewGame}
        />
      )}
    </main>
  );
}
