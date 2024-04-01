/*
scoring is calculated as follows:
1 point per path, + 1 for each path > 1
and an extra 3 points for all the paths being filled in one tile
so, for each tile, if there is:
1 path through it, you get 1 point
2 paths through it, you get 3 points
3 paths through it, you get 5 points
4 paths through it, you get 10 points
 */

import { size } from "./canvas-drawing";

const points = [0, 1, 3, 5, 10];

export const getScore = (path) =>
  Object.keys(path.tiles)
    .map((key) => {
      const tile = path.tiles[key];

      return (
        (tile[0].connected +
          tile[1].connected +
          tile[2].connected +
          tile[3].connected +
          tile[4].connected +
          tile[5].connected +
          tile[6].connected +
          tile[7].connected) /
        2
      );
    })
    .reduce((acc, cur) => acc + points[cur], 0);

export const getStats = (path) => {
  const distance = Object.keys(path.tiles)
    .map((key) => {
      const tile = path.tiles[key];

      return (
        (tile[0].connected +
          tile[1].connected +
          tile[2].connected +
          tile[3].connected +
          tile[4].connected +
          tile[5].connected +
          tile[6].connected +
          tile[7].connected) /
        2
      );
    })
    .reduce((acc, cur) => acc + cur, 0);

  return {
    distance,
    tiles: Object.keys(path.tiles).length,
    score: getScore(path),
  };
};

const LOCAL_STORAGE_KEY = `weave:stats-for-play-${size}`;

// export const loadStats = () => JSON.parse(localStorage[LOCAL_STORAGE_KEY] || '[]');

// export const saveStat = (path) => {
//   const stats = loadStats();
//   stats.push(getStats(path));
//   stats.sort((p1, p2) => {
//     if (p1.score > p2.score) {
//       return -1;
//     }
//     if (p1.score < p2.score) {
//       return 1;
//     }
//     if (p1.distance > p2.distance) {
//       return -1;
//     }
//     if (p1.distance < p2.distance) {
//       return 1;
//     }
//     if (p1.tiles < p2.tiles) {
//       return -1;
//     }
//     return 1;
//   });

//   const topTen = stats.slice(0, 10);

//   localStorage[LOCAL_STORAGE_KEY] = JSON.stringify(topTen);

//   return topTen;
// };
