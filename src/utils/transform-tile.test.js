import { CLOCKWISE, COUNTERCLOCKWISE, rotateTile } from './transform-tile';

const first = {
  0: { out: 2, connected: false },
  1: { out: 5, connected: false },
  2: { out: 0, connected: false },
  3: { out: 6, connected: false },
  4: { out: 7, connected: false },
  5: { out: 1, connected: false },
  6: { out: 3, connected: false },
  7: { out: 4, connected: false },
  order: [2, 0, 1, 5, 3, 6, 4, 7],
};

const second = {
  0: { out: 5, connected: false },
  1: { out: 4, connected: false },
  2: { out: 7, connected: false },
  3: { out: 6, connected: false },
  4: { out: 1, connected: false },
  5: { out: 0, connected: false },
  6: { out: 3, connected: false },
  7: { out: 2, connected: false },
  order: [4, 1, 3, 6, 5, 0, 2, 7],
};

const third = {
  0: { out: 2, connected: false },
  1: { out: 6, connected: false },
  2: { out: 0, connected: false },
  3: { out: 5, connected: false },
  4: { out: 7, connected: false },
  5: { out: 3, connected: false },
  6: { out: 1, connected: false },
  7: { out: 4, connected: false },
  order: [1, 6, 7, 4, 3, 5, 0, 2],
};

test('it generates an object', () => {
  expect(rotateTile(first)).toBeInstanceOf(Object);
});

test('it rotates a tile 90 degrees', () => {
  const firstTarget = {
    0: { out: 5, connected: false },
    1: { out: 6, connected: false },
    2: { out: 4, connected: false },
    3: { out: 7, connected: false },
    4: { out: 2, connected: false },
    5: { out: 0, connected: false },
    6: { out: 1, connected: false },
    7: { out: 3, connected: false },
    order: [4, 2, 3, 7, 5, 0, 6, 1], // alter this
  };
  const secondTarget = {
    0: { out: 5, connected: false },
    1: { out: 4, connected: false },
    2: { out: 7, connected: false },
    3: { out: 6, connected: false },
    4: { out: 1, connected: false },
    5: { out: 0, connected: false },
    6: { out: 3, connected: false },
    7: { out: 2, connected: false },
    order: [6, 3, 5, 0, 7, 2, 4, 1],
  };
  const thirdTarget = {
    0: { out: 3, connected: false },
    1: { out: 6, connected: false },
    2: { out: 4, connected: false },
    3: { out: 0, connected: false },
    4: { out: 2, connected: false },
    5: { out: 7, connected: false },
    6: { out: 1, connected: false },
    7: { out: 5, connected: false },
    order: [3, 0, 1, 6, 5, 7, 2, 4],
  };

  expect(rotateTile(first, CLOCKWISE)).toEqual(firstTarget);
  expect(rotateTile(second, CLOCKWISE)).toEqual(secondTarget);
  expect(rotateTile(third, CLOCKWISE)).toEqual(thirdTarget);
});

test('it rotates a tile -90 degrees', () => {
  const firstTarget = {
    0: { out: 6, connected: false },
    1: { out: 4, connected: false },
    2: { out: 5, connected: false },
    3: { out: 7, connected: false },
    4: { out: 1, connected: false },
    5: { out: 2, connected: false },
    6: { out: 0, connected: false },
    7: { out: 3, connected: false },
    order: [0, 6, 7, 3, 1, 4, 2, 5],
  };
  const secondTarget = {
    0: { out: 5, connected: false },
    1: { out: 4, connected: false },
    2: { out: 7, connected: false },
    3: { out: 6, connected: false },
    4: { out: 1, connected: false },
    5: { out: 0, connected: false },
    6: { out: 3, connected: false },
    7: { out: 2, connected: false },
    order: [2, 7, 1, 4, 3, 6, 0, 5],
  };
  const thirdTarget = {
    0: { out: 6, connected: false },
    1: { out: 3, connected: false },
    2: { out: 5, connected: false },
    3: { out: 1, connected: false },
    4: { out: 7, connected: false },
    5: { out: 2, connected: false },
    6: { out: 0, connected: false },
    7: { out: 4, connected: false },
    order: [7, 4, 5, 2, 1, 3, 6, 0],
  };

  expect(rotateTile(first, COUNTERCLOCKWISE)).toEqual(firstTarget);
  expect(rotateTile(second, COUNTERCLOCKWISE)).toEqual(secondTarget);
  expect(rotateTile(third, COUNTERCLOCKWISE)).toEqual(thirdTarget);
});
