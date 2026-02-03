import { getLocalStorage, setLocalStorage } from "@/utils/local-storage";
import { createSlice } from "@reduxjs/toolkit";

const LS_TUTORIAL_KEY = "should-show-tutorial";

const INITIAL_SETTINGS = {
  gameOver: false,
  tutorial: getLocalStorage(LS_TUTORIAL_KEY, true),
  colorScheme: "sandy",
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState: INITIAL_SETTINGS,
  reducers: {
    setGameOver: (state, { payload }) => {
      state.gameOver = payload;
    },
    setTutorial: (state, { payload }) => {
      state.tutorial = payload;
      setLocalStorage(LS_TUTORIAL_KEY, false);
    },
  },
});

export const getGameOver = ({ settings }) => settings.gameOver;
export const getTutorial = ({ settings }) => settings.tutorial;

export const { setGameOver, setTutorial } = settingsSlice.actions;

export default settingsSlice.reducer;
