import { addPath, entries, getNextCoord, getNextEntry } from "@/utils/add-path";
import {
  CLOCKWISE,
  COUNTERCLOCKWISE,
  rotateTile,
} from "@/utils/transform-tile";
import { coordsToKey, keyToCoords } from "@/utils/transformers";

import { createSlice } from "@reduxjs/toolkit";

const stringifyEntry = ({ x, y, position }) => `${x},${y}:${position}`;
const destringifyEntry = (str) => {
  const [coordinates, position] = str.split(":");
  const [x, y] = coordinates.split(",");
  return {
    x: Number(x),
    y: Number(y),
    position: Number(position),
  };
};

const INITIAL_BOARD = {
  dimensions: [3, 3],
  entry: "0,-1:0",
  board: {},
  // path: [],
  score: 0,
  next: "0,0",
};

export const boardSlice = createSlice({
  name: "board",
  initialState: INITIAL_BOARD,
  reducers: {
    placeTileOnBoard: (state, { payload: tile }) => {
      console.log("let us place tiles on boards");
      let { entry, next, board } = state;
      board[next] = tile;
      for (const coord in board) {
        for (const node in board[coord]) {
          if (node === "order") {
            continue;
          }
          board[coord][node] = {
            ...board[coord][node],
            connected: false,
          };
        }
      }

      let cursor = destringifyEntry(entry);
      let coord = "0,0";
      let i = 0;
      while (i++ < 1000 && board[coord]) {
        // get corresponding "in" location on next tile
        const tileEntry = entries[cursor.position];
        // get coordinates of next tile
        const { x, y } = getNextCoord(
          board[coord],
          tileEntry,
          keyToCoords(coord)
        );

        // get "out" location of next tile
        const { out } = board[coord][tileEntry];
        // set that path to true in tile
        board[coord][tileEntry].connected = true;
        board[coord][out].connected = true;

        // update cursor
        cursor = { x, y, position: out };
        coord = coordsToKey({ x, y });
      }

      next = coord;
    },
  },
});

export const { placeTileOnBoard } = boardSlice.actions;

export default boardSlice.reducer;

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
