import { createSlice } from '@reduxjs/toolkit';
import { config } from '../../config';

const initialState = {
  layout: [],
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    init: (state) => {
      const newState = Array(10)
        .fill('miss')
        .map(() => Array(10).fill('miss'));
      const layout = config.layout;
      for (let i = 0; i < layout.length; i++) {
        const vessel = layout[i].positions;
        for (let j = 0; j < vessel.length; j++) {
          const x = vessel[j][0] - 1;
          const y = vessel[j][1] - 1;
          newState[y][x] = layout[i].ship;
        }
      }
      state.layout = [...newState.flat()];
    },
  },
});
// Action creators are generated for each case reducer function
export const { init } = gameSlice.actions;

export default gameSlice.reducer;
