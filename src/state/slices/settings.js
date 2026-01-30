import { createSlice } from "@reduxjs/toolkit";

const getInitialDimensions = () => {
  const unparsed = global?.window?.localStorage?.getItem(LS_DIMENSIONS_KEY);

  if (unparsed) {
    return JSON.parse(unparsed);
  }
  return [4, 4];
};

const LS_DIMENSIONS_KEY = "initial-state-dimensions";
const INITIAL_SETTINGS = {
  dimensions: getInitialDimensions(),
  gameOver: false,
  tutorial: false,
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
    setTutorial: (state, { payload }) => {
      state.tutorial = payload;
    },
  },
});

export const getScale = ({ settings }) =>
  1 / Math.min(settings.dimensions[0], settings.dimensions[1]);

export const getDimensions = ({ settings }) => settings.dimensions;
export const getGameOver = ({ settings }) => settings.gameOver;
export const getTutorial = ({ settings }) => settings.tutorial;

export const { changeDimensions, setGameOver, setTutorial } =
  settingsSlice.actions;

export default settingsSlice.reducer;
