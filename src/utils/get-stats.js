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
