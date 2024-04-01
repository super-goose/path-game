export const coordsToKey = ({ x, y }) => `${x},${y}`;
export const keyToCoords = (key) => key.split(',')
  .reduce((acc, cur, ind) => ({ ...acc, [ind === 0 ? 'x' : 'y']: Number(cur) }), {});
