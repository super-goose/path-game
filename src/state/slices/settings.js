import { getLocalStorage, setLocalStorage } from "@/utils/local-storage";
import { createSlice } from "@reduxjs/toolkit";

const LS_TUTORIAL_KEY = "should-show-tutorial";
const LS_COLOR_THEME_KEY = "color-theme-key";

const INITIAL_SETTINGS = {
  showColors: false,
  gameOver: false,
  tutorial: getLocalStorage(LS_TUTORIAL_KEY, true),
  colorScheme: getLocalStorage(LS_COLOR_THEME_KEY, "sandy"),
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState: INITIAL_SETTINGS,
  reducers: {
    setShowColors: (state, { payload }) => {
      state.showColors = payload;
    },
    setGameOver: (state, { payload }) => {
      state.gameOver = payload;
    },
    setTutorial: (state, { payload }) => {
      state.tutorial = payload;
      setLocalStorage(LS_TUTORIAL_KEY, false);
    },
    setColorScheme: (state, { payload }) => {
      state.colorScheme = payload;
      setLocalStorage(LS_COLOR_THEME_KEY, payload);
    },
  },
});

export const getShowColors = ({ settings }) => settings.showColors;
export const getGameOver = ({ settings }) => settings.gameOver;
export const getTutorial = ({ settings }) => settings.tutorial;
export const getColorScheme = ({ settings }) => settings.colorScheme;

export const { setShowColors, setGameOver, setTutorial, setColorScheme } =
  settingsSlice.actions;

export default settingsSlice.reducer;
