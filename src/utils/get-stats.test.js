import { getScore, getStats } from './get-stats';

const {
  initialState,
  stateAfterFirstPoint,
  stateAfterSecondPoint,
  stateAfterThirdPoint,
  stateWithHighComplexScore,
} = getInitialData();

test('stats are calculated correctly', () => {
  expect(getStats(initialState)).toEqual({
    distance: 0,
    tiles: 0,
    score: getScore(initialState),
  });

  expect(getStats(stateAfterFirstPoint)).toEqual({
    distance: 1,
    tiles: 1,
    score: getScore(stateAfterFirstPoint),
  });

  expect(getStats(stateAfterSecondPoint)).toEqual({
    distance: 2,
    tiles: 2,
    score: getScore(stateAfterSecondPoint),
  });

  expect(getStats(stateAfterThirdPoint)).toEqual({
    distance: 4,
    tiles: 3,
    score: getScore(stateAfterThirdPoint),
  });

  expect(getStats(stateWithHighComplexScore)).toEqual({
    distance: 13,
    tiles: 6,
    score: getScore(stateWithHighComplexScore),
  });

});

function getInitialData() {
  return {
    initialState: {
      entry: 4,
      tiles: {},
      next: { x: 0, y: 0 },
    },
    
    stateAfterFirstPoint: {
      entry: 3,
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
        }
      },
      next: { x: 1, y: 0 },  
    },

    stateAfterSecondPoint: {
      entry: 3,
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
        '1,0': {
          0: { out: 4, connected: false },
          4: { out: 0, connected: false },
          1: { out: 7, connected: false },
          7: { out: 1, connected: false },
          2: { out: 5, connected: false },
          5: { out: 2, connected: false },
          3: { out: 6, connected: true },
          6: { out: 3, connected: true },
          order: [0, 4, 1, 7, 2, 5, 3, 6],
        }
      },
      next: { x: 2, y: 0 },  
    },

    stateAfterThirdPoint: {
      entry: 4,
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
        '1,0': {
          0: { out: 4, connected: false },
          4: { out: 0, connected: false },
          1: { out: 7, connected: true },
          7: { out: 1, connected: true },
          2: { out: 5, connected: false },
          5: { out: 2, connected: false },
          3: { out: 6, connected: true },
          6: { out: 3, connected: true },
          order: [0, 4, 1, 7, 2, 5, 3, 6],
        },
        '2,0': {
          0: { out: 1, connected: false },
          1: { out: 0, connected: false },
          2: { out: 3, connected: true },
          3: { out: 2, connected: true },
          4: { out: 5, connected: false },
          5: { out: 4, connected: false },
          6: { out: 7, connected: false },
          7: { out: 6, connected: false },
          order: [0, 1, 2, 3, 4, 5, 6, 7]      
        }
      },
      next: { x: 1, y: 1 },  
    },
    stateWithHighComplexScore: {
      tiles: {
        '0,0': { // 1 path = 1 pt
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
        '1,0': { // 2 paths = 3 pts
          0: { out: 4, connected: false },
          4: { out: 0, connected: false },
          1: { out: 7, connected: true },
          7: { out: 1, connected: true },
          2: { out: 5, connected: false },
          5: { out: 2, connected: false },
          3: { out: 6, connected: true },
          6: { out: 3, connected: true },
          order: [0, 4, 1, 7, 2, 5, 3, 6],
        },
        '2,0': { // 1 path = 1 pt
          0: { out: 1, connected: false },
          1: { out: 0, connected: false },
          2: { out: 3, connected: true },
          3: { out: 2, connected: true },
          4: { out: 5, connected: false },
          5: { out: 4, connected: false },
          6: { out: 7, connected: false },
          7: { out: 6, connected: false },
          order: [0, 1, 2, 3, 4, 5, 6, 7]      
        },
        '3,0': { // 3 paths = 5 pts
          0: { out: 3, connected: true },
          1: { out: 2, connected: true },
          2: { out: 1, connected: true },
          3: { out: 0, connected: true },
          4: { out: 6, connected: true },
          5: { out: 7, connected: false },
          6: { out: 4, connected: true },
          7: { out: 5, connected: false },
          order: [3, 0, 4, 6, 2, 1, 5, 7],
        },
        '3,3': { // 2 paths = 3 pt
          0: { out: 4, connected: false },
          4: { out: 0, connected: false },
          1: { out: 7, connected: true },
          7: { out: 1, connected: true },
          2: { out: 5, connected: false },
          5: { out: 2, connected: false },
          3: { out: 6, connected: true },
          6: { out: 3, connected: true },
          order: [0, 4, 1, 7, 2, 5, 3, 6],
        },
        '3,4': { // 4 paths = 10 pt
          0: { out: 1, connected: true },
          1: { out: 0, connected: true },
          2: { out: 3, connected: true },
          3: { out: 2, connected: true },
          4: { out: 5, connected: true },
          5: { out: 4, connected: true },
          6: { out: 7, connected: true },
          7: { out: 6, connected: true },
          order: [0, 1, 2, 3, 4, 5, 6, 7]      
        }
      }
    }
  }
}
