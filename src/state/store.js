import { configureStore } from "@reduxjs/toolkit";
import handSlice from "./slices/hand";
import boardSlice from "./slices/board";
import settingsSlice from "./slices/settings";
import middleware from "./middleware";

const store = configureStore({
  reducer: {
    hand: handSlice,
    board: boardSlice,
    settings: settingsSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
});

export default store;
