import { generateTile } from "@/utils/generate-tile";
import {
  CLOCKWISE,
  COUNTERCLOCKWISE,
  rotateTile,
} from "@/utils/transform-tile";

import { createSlice } from "@reduxjs/toolkit";

const INITIAL_HAND = [generateTile(), generateTile(), generateTile()];

export const handSlice = createSlice({
  name: "hand",
  initialState: INITIAL_HAND,
  reducers: {
    removeTileFromHand: (state, index) => {
      state.splice(index, 1);
      return [...state, generateTile()];
    },
    rotateCCW: (state, index) => {
      return state.map((tile, i) => {
        if (i === index) {
          return rotateTile(tile, COUNTERCLOCKWISE);
        }
        return tile;
      });
    },
    rotateCW: (state, index) => {
      return state.map((tile, i) => {
        if (i === index) {
          return rotateTile(tile, CLOCKWISE);
        }
        return tile;
      });
    },
  },
});

export const { removeTileFromHand, rotateCCW, rotateCW } = handSlice.actions;

export default handSlice.reducer;

// // Can still subscribe to the store
// store.subscribe(() => console.log(store.getState()))

// // Still pass action objects to `dispatch`, but they're created for us
// store.dispatch(incremented())
// // {value: 1}
// store.dispatch(incremented())
// // {value: 2}
// store.dispatch(decremented())
// // {value: 1}

// ----
