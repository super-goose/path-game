/**
    0: { out: 6, connected: false },
    1: { out: 4, connected: false },
    2: { out: 5, connected: false },
    3: { out: 7, connected: false },
    4: { out: 1, connected: false },
    5: { out: 2, connected: false },
    6: { out: 0, connected: false },
    7: { out: 3, connected: false },
    order: [0, 6, 7, 3, 1, 4, 2, 5],
*/

export const pathsPerTile = (tile) => {
  let connectedTotal = 0;
  for (let i = 0, l = 8; i < l; i++) {
    if (tile[i].connected) {
      connectedTotal++;
    }
  }
  return connectedTotal / 2;
};
