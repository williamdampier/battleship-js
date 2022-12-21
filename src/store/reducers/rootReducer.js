import { combineReducers } from '@reduxjs/toolkit';
import gameReducer from './GameSlice';
import playerScoreReducer from './PlayerScoreSlice';

const rootReducer = combineReducers({
  game: gameReducer,
  playerScore: playerScoreReducer,
});

export default rootReducer;
