export const addPath = (tile, entry) => {
  const newTile = { ...tile };
  newTile[entry].connected = true;
  newTile[newTile[entry].out].connected = true;
  return newTile;
};

const direction = [
  { x: 0, y: 1 },
  { x: 0, y: 1 },
  { x: -1, y: 0 },
  { x: -1, y: 0 },
  { x: 0, y: -1 },
  { x: 0, y: -1 },
  { x: 1, y: 0 },
  { x: 1, y: 0 },
];

export const entries = [5, 4, 7, 6, 1, 0, 3, 2];

export const getNextCoord = (tile, entry, { x, y }) => {
  const dir = direction[tile[entry].out];
  return { x: x + dir.x, y: y + dir.y };
};

export const getNextEntry = (tile, entry) => entries[tile[entry].out];
