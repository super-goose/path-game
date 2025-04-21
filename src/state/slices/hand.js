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
    rotateCCW: (state, { payload: index }) => {
      console.log({ state, index });
      return state.map((tile, i) => {
        if (i === index) {
          return rotateTile(tile, COUNTERCLOCKWISE);
        }
        return tile;
      });
    },
    rotateCW: (state, { payload: index }) => {
      console.log({ state, index });
      return state.map((tile, i) => {
        if (i === index) {
          return rotateTile(tile, CLOCKWISE);
        }
        return tile;
      });
    },
  },
});

// reducers
export const { removeTileFromHand, rotateCCW, rotateCW } = handSlice.actions;

// selectors
export const getHand = ({ hand }) => hand;
// export const getTileAt = ({ hand }, index) => hand[index];

export default handSlice.reducer;
