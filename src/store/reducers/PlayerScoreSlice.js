import { createSlice } from '@reduxjs/toolkit';
import { config } from '../../config';

const initialState = {
  score: 0,
  ships: [],
};

export const playerScoreSlice = createSlice({
  name: 'playerScore',
  initialState,
  reducers: {
    initScoreboard: (state) => {
      const ships = Object.entries(config.shiptypes);
      state.ships = ships.map((ship) => {
        const size = Array(ship[1].size).fill('plus');
        return { name: ship[0], size };
      });
    },
    increaseScore: (state) => {
      state.score += 1;
    },
    scoreHit: (state, action) => {
      const shipName = action.payload;
      const shipIndex = state.ships.findIndex((ship) => ship.name === shipName);
      console.log(action.payload);
      for (let i = 0; i < state.ships[shipIndex].size.length; i++) {
        if (state.ships[shipIndex].size[i] === 'plus') {
          state.ships[shipIndex].size[i] = 'minus';

          return state;
        }
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { increaseScore, initScoreboard, scoreHit } =
  playerScoreSlice.actions;

export default playerScoreSlice.reducer;
