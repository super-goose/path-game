import { addPath, entries, getNextCoord, getNextEntry } from "@/utils/add-path";
import { pathsPerTile } from "@/utils/paths-per-tile";
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
  entry: "0,-1:0",
  board: {},
  score: 0,
  distance: 0,
  next: "0,0",
};

export const boardSlice = createSlice({
  name: "board",
  initialState: INITIAL_BOARD,
  reducers: {
    placeTileOnBoard: (state, { payload: tileRef }) => {
      const tile = JSON.parse(JSON.stringify(tileRef));
      console.log("let us place tiles on boards");
      state.board[state.next] = tile;
      for (const coord in state.board) {
        for (const node in state.board[coord]) {
          if (node === "order") {
            continue;
          }
          state.board[coord][node].connected = false;
        }
      }

      let cursor = destringifyEntry(state.entry);
      let coord = "0,0";
      let i = 0;
      while (i++ < 1000 && state.board[coord]) {
        // get corresponding "in" location on next tile
        const tileEntry = entries[cursor.position];

        // get "out" location of next tile
        const { out } = state.board[coord][tileEntry];

        const { x, y } = getNextCoord(
          state.board[coord],
          tileEntry,
          keyToCoords(coord)
        );
        // set that path to true in tile
        state.board[coord][tileEntry].connected = true;
        state.board[coord][out].connected = true;

        // update cursor
        cursor = { x, y, position: out };
        coord = coordsToKey({ x, y });
      }

      // don't let other people see this logic...
      let newDistance = 0;
      const newScore = Object.keys(state.board).reduce(
        (cumScore, coordinate) => {
          const currentTile = state.board[coordinate];
          const pathsOnTile = pathsPerTile(currentTile);
          newDistance += pathsOnTile;
          return cumScore + [0, 1, 3, 6, 10][pathsOnTile];
        },
        0
      );

      state.score = newScore;
      state.next = coord;
    },
    resetBoard: (state) => {
      state.entry = INITIAL_BOARD.entry;
      state.board = INITIAL_BOARD.board;
      state.score = INITIAL_BOARD.score;
      state.distance = INITIAL_BOARD.distance;
      state.next = INITIAL_BOARD.next;
    },
  },
});

export const { placeTileOnBoard, resetBoard } = boardSlice.actions;

export const getBoard = ({ board }) => board.board;
export const getNext = ({ board }) => board.next;
export const getScore = ({ board }) => board.score;

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
