import { exitPositionToEntryPosition, getNextCoord } from "@/utils/add-path";
import { pathsPerTile } from "@/utils/paths-per-tile";
import { coordsToKey, keyToCoords } from "@/utils/transformers";
import { getLocalStorage, setLocalStorage } from "@/utils/local-storage";

import { createSlice } from "@reduxjs/toolkit";

const LS_DIMENSIONS_KEY = "initial-state-dimensions";

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

const initialDimensions = getLocalStorage(LS_DIMENSIONS_KEY, [4, 4]);
const d = initialDimensions[0];

const INITIAL_BOARD = {
  turnIndex: 0,
  entry: ["0,-1:0"],
  next: ["0,0"],
  startCoord: ["0,0"],
  // entry: ["0,-1:0", `${d},0:2`, `${d - 1},${d}:4`, `-1,${d - 1}:6`],
  // next: ["0,0", `${d - 1},0`, `${d - 1},${d - 1}`, `0,${d - 1}`],
  // startCoord: ["0,0", `${d - 1},0`, `${d - 1},${d - 1}`, `0,${d - 1}`],

  board: {},
  score: 0,
  distance: 0,
  dimensions: initialDimensions,
};

export const boardSlice = createSlice({
  name: "board",
  initialState: INITIAL_BOARD,
  reducers: {
    changeDimensions: (state, { payload }) => {
      const newDimensions = [payload.width, payload.height];
      console.log({ newDimensions });
      setLocalStorage(LS_DIMENSIONS_KEY, newDimensions);
      state.dimensions = newDimensions;
      state.gameOver = false;
    },

    placeTileOnBoard: (state, { payload: tileRef }) => {
      /**
       * a tile looks like:
       * {
       *   [position: number(0-7)]: {
       *     // the position this path exits
       *     out: number
       *     // whether or not this path is filled in
       *     // (the corresponding entry for out will be the same value)
       *     connected: boolean
       *   },
       *   // the order to draw the paths in
       *   order: number[]
       * }
       */
      // don't modify the object passed in
      const tile = JSON.parse(JSON.stringify(tileRef));

      // let us place tiles on boards
      state.board[state.next[state.turnIndex]] = tile;

      // reset all paths to not filled in; we are going to redraw the paths
      // from the start for each tile placed; this is because some existing
      // tiles will need to be filled in
      for (const coord in state.board) {
        for (const node in state.board[coord]) {
          // skip order; we don't care about that property for path building
          if (node === "order") {
            continue;
          }
          state.board[coord][node].connected = false;
        }
      }

      // now for each entry point, fill that path in
      let coord;
      for (const entry of state.entry) {
        let cursor = destringifyEntry(entry);

        const iterationIndex = state.entry.indexOf(entry);
        // starting with the position this entry empties into
        coord = state.startCoord[iterationIndex];
        // avoid browser tab crashes from infinite loops
        let i = 0;
        while (i++ < 1000 && state.board[coord]) {
          // get corresponding "in" location on next tile
          const tileEntry = exitPositionToEntryPosition[cursor.position];

          // get "out" location of next tile
          const { out } = state.board[coord][tileEntry];

          // get the next tile coordinate based on which side `out` is on
          const { x, y } = getNextCoord(
            state.board[coord],
            tileEntry,
            keyToCoords(coord),
          );

          // set that path to true in the tile
          state.board[coord][tileEntry].connected = true;
          state.board[coord][out].connected = true;

          // update cursor
          cursor = { x, y, position: out };
          coord = coordsToKey({ x, y });

          state.next[iterationIndex] = coord;
        }
      }

      //
      let newDistance = 0;
      const newScore = Object.keys(state.board).reduce(
        (cumScore, coordinate) => {
          const currentTile = state.board[coordinate];
          const pathsOnTile = pathsPerTile(currentTile);
          newDistance += pathsOnTile;
          return cumScore + [0, 1, 3, 6, 10][pathsOnTile];
        },
        0,
      );

      state.score = newScore;
      state.distance = newDistance;
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

export const { placeTileOnBoard, resetBoard, changeDimensions } =
  boardSlice.actions;

export const getBoard = ({ board }) => board.board;
export const getNext = ({ board }) => {
  const nexts = board.next;
  const turn = board.turnIndex;
  return nexts[turn];
};

export const getEntries = ({ board }) => board.entry;

export const getScore = ({ board }) => board.score;
export const getDensity = ({ board }) => {
  const coords = Object.keys(board.board);
  if (coords.length === 0) {
    return "no tiles";
  }
  const totalConnections = coords.reduce((acc, cur) => {
    const currentTile = board.board[cur];
    const pathsOnTile = pathsPerTile(currentTile);
    return acc + pathsOnTile;
  }, 0);
  return (totalConnections / coords.length).toPrecision(2).replace(".00", "");
};

export const getScale = ({ board }) =>
  1 / Math.min(board.dimensions[0], board.dimensions[1]);
export const getDimensions = ({ board }) => board.dimensions;
export const getDistance = ({ board }) => board.distance;

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
