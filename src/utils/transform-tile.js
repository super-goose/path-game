import { generateTileFromArray } from './generate-tile';

export const CLOCKWISE = 'clockwise';
export const COUNTERCLOCKWISE = 'counterclockwise';

const rotate = (arr, rotation) => {
  const modifier = {
    [COUNTERCLOCKWISE]: -2,
    [CLOCKWISE]: 2,
  }[rotation];

  return arr.map((i) => (i + modifier + 8) % 8);
};

export const rotateTile = (tile, rotation) => {
  const array = rotate(tile.order, rotation);
  return generateTileFromArray(array);
};
