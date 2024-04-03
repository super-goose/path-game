const flipRotation = (r) => (r + 1) % 2;
const flipPoint = (p) => {
  const [x, y] = p.split(",").map((n) => Number(n));

  return `${-(x - 50) + 50},${y}`;
};
const rotatePoint = (p, times) => {
  let [x, y] = p.split(",").map((n) => Number(n));
  x -= 50;
  y -= 50;
  for (let i = 0; i < times; i++) {
    const _x = y;
    const _y = -x;
    x = _x;
    y = _y;
  }
  x += 50;
  y += 50;
  return `${x},${y}`;
};
const noop = (_) => _;

export const pathsByTileOpenings = (openings, flip, rotate) => {
  const { points, rotations, path } = {
    "0-1": {
      points: ["25,100", "75,100"],
      rotations: [1],
      path: (p, r) => `M ${p[0]} A 25,25 0,0,${r[0]} ${p[1]}`,
    },
    "0-2": {
      points: ["25,100", "50,75", "100,75"],
      rotations: [1],
      path: (p, r) => `M ${p[0]} A 25,25 0,0,${r[0]} ${p[1]} L ${p[2]}`,
    },
    "0-3": {
      points: ["25,100", "100,25"],
      rotations: [1],
      path: (p, r) => `M ${p[0]} A 75,75 0,0,${r[0]} ${p[1]}`,
    },
    "0-4": {
      points: [
        "25,100",
        "25,85",
        "25,63",
        "40,55",
        "50,50",
        "60,45",
        "75,37",
        "75,15",
        "75,0",
      ],
      rotations: [],
      path: (p) =>
        `M ${p[0]} L ${p[1]} Q ${p[2]} ${p[3]} L ${p[4]} T ${p[5]} Q ${p[6]} ${p[7]} L ${p[8]}`,
    },
    "0-5": {
      points: ["25,100", "25, 0"],
      rotations: [],
      path: (p) => `M ${p[0]} L ${p[1]}`,
    },
    "0-6": {
      points: ["25,100", "25,50", "0,25"],
      rotations: [0],
      path: (p, r) => `M ${p[0]} L ${p[1]} A 25,25 0,0,${r[0]} ${p[2]}`,
    },
    "0-7": {
      points: ["25,100", "0,75"],
      rotations: [0],
      path: (p, r) => `M ${p[0]} A 25,25 0,0,${r[0]} ${p[1]}`,
    },
  }[openings];

  const modifiedRotations = flip ? rotations.map(flipRotation) : [...rotations];

  const modifiedPoints = points
    .map(flip ? flipPoint : noop)
    .map((p) => rotatePoint(p, ((rotate + 360) % 360) / 90));

  return path(modifiedPoints, modifiedRotations);
};

// return {
//   "0-1": ["M 25,100 A 25,25 0,0,1 75,100"],
//   "0-2": ["M 25,100 A 25,25 0,0,1 50,75 L 100,75"],
//   "0-3": ["M 25,100 A 75,75 0,0,1 100,25"],
//   "0-4": [
//     "M 25,100 L 25,85 Q 25,63 40,55 L 50,50 T 60,45 Q 75,37 75,15 L 75,0",
//   ].join(" "),
//   "0-5": ["M 25,100 L 25, 0"],
//   "0-6": ["M 25,100 L 25,50 A 25,25 0,0,0 0,25"],
//   "0-7": ["M 25,100 A 25,25 0,0,0 0,75"],
// }[openings];
