import { useDispatch } from 'react-redux';
import './App.css';
import Board from './components/board/Board';
import ScoreBoard from './components/scoreboard/ScoreBoard';
import { useEffect } from 'react';
import { init } from './store/reducers/GameSlice';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(init());
  }, []);

  return (
    <main>
      <Board />
      <ScoreBoard />
    </main>
  );
}

export default App;
