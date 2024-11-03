import { addPath, getNextCoord, getNextEntry } from '../../utils/add-path';
import { pathExitsMap } from '../../utils/canvas-drawing';
import { coordsToKey } from '../../utils/transformers';
import * as utils from '../../utils/get-stats';

const ADD_PATH_POINT = 'path/ADD_PATH_POINT';

// const INITAIL_ENTRY_POINT = 4;
const INITIAL_STATE = {
  entry: 3, // INITAIL_ENTRY_POINT,
  tiles: {
    '0,0': {
      0: { out: 3, connected: false },
      1: { out: 2, connected: false },
      2: { out: 1, connected: false },
      3: { out: 0, connected: false },
      4: { out: 6, connected: true },
      5: { out: 7, connected: false },
      6: { out: 4, connected: true },
      7: { out: 5, connected: false },
      order: [3, 0, 4, 6, 2, 1, 5, 7],
    },
  },
  next: { x: 1, y: 0 }, // { x: 0, y: 0 },
};

const getAddTileNextState = (current, tile) => {
  let { entry, next, tiles } = current;
  let tileToProcess = { ...tile };
  let i = 0;
  while (i++ < 1000 && tileToProcess) {
    const coordKey = coordsToKey(next);
    const withPath = addPath(tileToProcess, entry);
    const newNext = getNextCoord(tileToProcess, entry, next);
    const newTiles = { ...tiles, [coordKey]: withPath };
    const newEntry = getNextEntry(tileToProcess, entry);
    tileToProcess = tiles[coordsToKey(newNext)];
    next = newNext;
    tiles = newTiles;
    entry = newEntry;
  }
  if (i === 1000) {
    /* eslint-disable no-console */
    console.error('current:', current);
    console.error('tile:', tile);
    console.error('entry:', entry);
    console.error('next:', next);
    console.error('tiles:', tiles);
    console.error('tileToProcess:', tileToProcess);
    /* eslint-enable no-console */
    throw new Error('infinite loop');
  }

  return { entry, next, tiles };
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_PATH_POINT:
      return getAddTileNextState(state, action.point);
    default:
      return state;
  }
};

export default reducer;

// actions
export const addPathPoint = (point) => ({ type: ADD_PATH_POINT, point });

// selectors
export const getPath = ({ path }) => path.tiles;
export const getNext = ({ path }) => path.next;

export const getStats = ({ path }) => utils.getStats(path);

export const getScore = ({ path }) => utils.getScore(path);

export const gameIsOver = ({ path }) => pathExitsMap(path.next);
