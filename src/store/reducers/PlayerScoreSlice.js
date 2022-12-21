import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  score: 0,
  ships: [],
};

export const playerScoreSlice = createSlice({
  name: 'playerScore',
  initialState,
  reducers: {
    init: {},
    increaseScore: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.score += 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increaseScore } = playerScoreSlice.actions;

export default playerScoreSlice.reducer;
