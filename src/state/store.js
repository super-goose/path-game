import { configureStore } from "@reduxjs/toolkit";
import handSlice from "./slices/hand";

const store = configureStore({
  reducer: {
    hand: handSlice,
  },
});

export default store;
