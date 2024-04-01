import { generateArray, generateTile } from './generate-tile';

test('it generates an array', () => {
  expect(generateArray()).toBeInstanceOf(Array);
})

test('the array has 8 numbers', () => {
  expect(generateArray().length).toBe(8)
})

test('the array is in random order', () => {
  // one time in (8 * 7 * 6 * 5 * 4 * 3 * 2) this will fail
  // because the randomly generated sequence could = the original
  const tile = generateArray();
  const isSameAsOriginal = (
    tile[0] === 0 && tile[1] === 1 && tile[2] === 2 && tile[3] === 3 &&
    tile[4] === 4 && tile[5] === 5 && tile[6] === 6 && tile[7] === 7
  )

  expect(isSameAsOriginal).toBe(false);
})

test('the tile is consistent', () => {
  const t = generateTile();
  expect(t[t[0].out].out).toBe(0);
  expect(t[t[1].out].out).toBe(1);
  expect(t[t[2].out].out).toBe(2);
  expect(t[t[3].out].out).toBe(3);
  expect(t[t[4].out].out).toBe(4);
  expect(t[t[5].out].out).toBe(5);
  expect(t[t[6].out].out).toBe(6);
  expect(t[t[7].out].out).toBe(7);
})
