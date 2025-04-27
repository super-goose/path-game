import { configureStore } from "@reduxjs/toolkit";
import handSlice from "./slices/hand";
import boardSlice from "./slices/board";
import settingsSlice from "./slices/settings";

const store = configureStore({
  reducer: {
    hand: handSlice,
    board: boardSlice,
    settings: settingsSlice,
  },
});

export default store;
