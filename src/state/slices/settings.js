import { createSlice } from "@reduxjs/toolkit";

const LS_DIMENSIONS_KEY = "initial-state-dimensions";
const INITIAL_SETTINGS = {
  dimensions: global?.window?.localStorage
    ? JSON.parse(global?.window?.localStorage?.getItem(LS_DIMENSIONS_KEY))
    : [4, 4],
  gameOver: false,
  colorScheme: "sandy",
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState: INITIAL_SETTINGS,
  reducers: {
    changeDimensions: (state, { payload }) => {
      const newDimensions = [payload.width, payload.height];
      localStorage.setItem(LS_DIMENSIONS_KEY, JSON.stringify(newDimensions));
      state.dimensions = newDimensions;
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
export const getGameOver = ({ settings }) => settings.gameOver;

export const { changeDimensions, setGameOver } = settingsSlice.actions;

export default settingsSlice.reducer;
