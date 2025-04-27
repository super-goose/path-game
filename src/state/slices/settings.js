import { addPath, entries, getNextCoord, getNextEntry } from "@/utils/add-path";
import { coordsToKey, keyToCoords } from "@/utils/transformers";

import { createSlice } from "@reduxjs/toolkit";

const INITIAL_SETTINGS = {
  dimensions: [3, 3],
  gameOver: false,
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState: INITIAL_SETTINGS,
  reducers: {
    changeDimensions: (state, { payload }) => {
      state.dimensions = [payload.width, payload.height];
      state.gameOver = false;
    },
    setGameOver: (state, { payload }) => {
      state.gameOver = payload;
    },
  },
});

export const { changeDimensions } = settingsSlice.actions;

export default settingsSlice.reducer;
