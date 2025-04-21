import { configureStore } from "@reduxjs/toolkit";
import handSlice from "./slices/hand";
import boardSlice from "./slices/board";

const store = configureStore({
  reducer: {
    hand: handSlice,
    board: boardSlice,
  },
});

export default store;
