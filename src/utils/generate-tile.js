export const generateTileFromArray = (a) => {
  const tile = {
    [a[0]]: { out: a[1], connected: false },
    [a[1]]: { out: a[0], connected: false },
    [a[2]]: { out: a[3], connected: false },
    [a[3]]: { out: a[2], connected: false },
    [a[4]]: { out: a[5], connected: false },
    [a[5]]: { out: a[4], connected: false },
    [a[6]]: { out: a[7], connected: false },
    [a[7]]: { out: a[6], connected: false },
    order: a,
  };

  return tile;
};

export const generateArray = () => {
  const arr = [0, 1, 2, 3, 4, 5, 6, 7];
  const final = [];
  while (arr.length) {
    const index = Math.floor(Math.random() * arr.length);
    final.push(arr.splice(index, 1)[0]);
  }
  return final;
};

export const generateTile = () => {
  const a = generateArray();

  return generateTileFromArray(a);
};
