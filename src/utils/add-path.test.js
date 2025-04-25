import { addPath, getNextCoord, getNextEntry } from "./add-path";

const {
  start,
  firstTarget,
  secondTarget,
  thirdTarget,
  finalTarget,
  problemTile,
} = getInitialData();

test("it gets the next entry based on tile and current entry", () => {
  expect(getNextEntry(finalTarget, 0)).toEqual(6);
  expect(getNextEntry(finalTarget, 1)).toEqual(7);
  expect(getNextEntry(finalTarget, 2)).toEqual(4);
  expect(getNextEntry(finalTarget, 3)).toEqual(5);
  expect(getNextEntry(finalTarget, 4)).toEqual(3);
  expect(getNextEntry(finalTarget, 5)).toEqual(2);
  expect(getNextEntry(finalTarget, 6)).toEqual(1);
  expect(getNextEntry(finalTarget, 7)).toEqual(0);
});

test("it gets the next coordinate based on tile, entry, and current coordinate", () => {
  expect(getNextCoord(finalTarget, 0, { x: 0, y: 0 })).toEqual({ x: 1, y: 0 });
  expect(getNextCoord(finalTarget, 1, { x: 1, y: 1 })).toEqual({ x: 2, y: 1 });
  expect(getNextCoord(finalTarget, 2, { x: 2, y: 2 })).toEqual({ x: 2, y: 3 });
  expect(getNextCoord(finalTarget, 3, { x: 3, y: 3 })).toEqual({ x: 3, y: 4 });
  expect(getNextCoord(finalTarget, 4, { x: 4, y: 4 })).toEqual({ x: 3, y: 4 });
  expect(getNextCoord(finalTarget, 5, { x: 5, y: 5 })).toEqual({ x: 4, y: 5 });
  expect(getNextCoord(finalTarget, 6, { x: 6, y: 6 })).toEqual({ x: 6, y: 5 });
  expect(getNextCoord(finalTarget, 7, { x: 7, y: 7 })).toEqual({ x: 7, y: 6 });
  expect(getNextCoord(problemTile, 4, { x: 0, y: 1 })).toEqual({ x: -1, y: 1 });
});

test("it adds a path to the tile", () => {
  expect(addPath(start, 3)).toEqual(firstTarget);
  expect(addPath(start, 0)).toEqual(firstTarget);

  expect(addPath(firstTarget, 5)).toEqual(secondTarget);
  expect(addPath(firstTarget, 7)).toEqual(secondTarget);

  expect(addPath(secondTarget, 6)).toEqual(thirdTarget);
  expect(addPath(secondTarget, 4)).toEqual(thirdTarget);

  expect(addPath(thirdTarget, 1)).toEqual(finalTarget);
  expect(addPath(thirdTarget, 2)).toEqual(finalTarget);
});

function getInitialData() {
  return {
    start: {
      0: { out: 3, connected: false },
      1: { out: 2, connected: false },
      2: { out: 1, connected: false },
      3: { out: 0, connected: false },
      4: { out: 6, connected: false },
      5: { out: 7, connected: false },
      6: { out: 4, connected: false },
      7: { out: 5, connected: false },
      order: [3, 0, 4, 6, 2, 1, 5, 7],
    },
    firstTarget: {
      3: { out: 0, connected: true },
      0: { out: 3, connected: true },
      4: { out: 6, connected: false },
      6: { out: 4, connected: false },
      2: { out: 1, connected: false },
      1: { out: 2, connected: false },
      5: { out: 7, connected: false },
      7: { out: 5, connected: false },
      order: [3, 0, 4, 6, 2, 1, 5, 7],
    },
    secondTarget: {
      3: { out: 0, connected: true },
      0: { out: 3, connected: true },
      4: { out: 6, connected: false },
      6: { out: 4, connected: false },
      2: { out: 1, connected: false },
      1: { out: 2, connected: false },
      5: { out: 7, connected: true },
      7: { out: 5, connected: true },
      order: [3, 0, 4, 6, 2, 1, 5, 7],
    },
    thirdTarget: {
      3: { out: 0, connected: true },
      0: { out: 3, connected: true },
      4: { out: 6, connected: true },
      6: { out: 4, connected: true },
      2: { out: 1, connected: false },
      1: { out: 2, connected: false },
      5: { out: 7, connected: true },
      7: { out: 5, connected: true },
      order: [3, 0, 4, 6, 2, 1, 5, 7],
    },
    finalTarget: {
      3: { out: 0, connected: true },
      0: { out: 3, connected: true },
      4: { out: 6, connected: true },
      6: { out: 4, connected: true },
      2: { out: 1, connected: true },
      1: { out: 2, connected: true },
      5: { out: 7, connected: true },
      7: { out: 5, connected: true },
      order: [3, 0, 4, 6, 2, 1, 5, 7],
    },
    problemTile: {
      0: { out: 6, connected: false },
      1: { out: 5, connected: false },
      2: { out: 3, connected: false },
      3: { out: 2, connected: false },
      4: { out: 7, connected: false },
      5: { out: 1, connected: false },
      6: { out: 0, connected: false },
      7: { out: 4, connected: false },
      order: [6, 0, 3, 2, 5, 7, 1, 4],
    },
  };
}
