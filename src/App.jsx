import { useState } from 'react';
import './App.css';
import Board from './components/board/Board';
import ScoreBoard from './components/scoreboard/ScoreBoard';

function App() {
  const [score, setScore] = useState(0);
  const increaseScore = () => {
    setScore((prev) => {
      return prev + 1;
    });
  };
  return (
    <main>
      <Board increaseScore={increaseScore} />
      <ScoreBoard score={score} />
    </main>
  );
}

export default App;
