import "./App.css";
import Cards from "./Components/Cards";
import { useState } from "react";
import Header from "./Components/Header";

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  return (
    <div className="App">
      <Header score={score} bestScore={bestScore} />
      <Cards
        score={score}
        bestScore={bestScore}
        setScore={setScore}
        setBestScore={setBestScore}
      />
    </div>
  );
}

export default App;
