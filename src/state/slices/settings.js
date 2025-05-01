import { createSlice } from "@reduxjs/toolkit";

const INITIAL_SETTINGS = {
  dimensions: [4, 4],
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

export const getScale = ({ settings }) =>
  1 / Math.min(settings.dimensions[0], settings.dimensions[1]);

export const getDimensions = ({ settings }) => settings.dimensions;

export const { changeDimensions } = settingsSlice.actions;

export default settingsSlice.reducer;
