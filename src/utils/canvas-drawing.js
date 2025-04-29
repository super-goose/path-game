/**
 * These functions should be deprecated, as we are not using the canvas any longer.
 */
// import { asRadians } from "./as-radians";

// // const localStorage = window.localStorage;
// const sizes = {
//   "8x8": [8, 64],
//   "4x4": [4, 128],
// };

// // export const size = localStorage["weave:size"] || "8x8";
// export const size = "8x8";

// // const setSize = () => {
// //   if (size === "8x8") {
// //     localStorage["weave:size"] = "4x4";
// //   } else {
// //     localStorage["weave:size"] = "8x8";
// //   }
// // };

// export const getOtherSize = () => (size === "4x4" ? "8x8" : "4x4");

// export const changeSize = () => {
//   setSize();
//   window.location.reload();
// };

// export const CANVAS_WIDTH = sizes[size][0];
// export const CANVAS_HEIGHT = sizes[size][0];
// export const TILE_SIZE = sizes[size][1];

// export const highlightCell = (context, x, y) => {
//   context.strokeStyle = "#ff2222";

//   const minX = x * TILE_SIZE + 1;
//   const minY = y * TILE_SIZE + 1;
//   const maxX = (x + 1) * TILE_SIZE - 1;
//   const maxY = (y + 1) * TILE_SIZE - 1;

//   context.beginPath();
//   context.moveTo(minX, minY);
//   context.lineTo(maxX, minY);
//   context.lineTo(maxX, maxY);
//   context.lineTo(minX, maxY);
//   context.lineTo(minX, minY);

//   context.stroke();
// };

// export const drawGrid = (context) => {
//   const maxX = CANVAS_WIDTH * TILE_SIZE;
//   const maxY = CANVAS_HEIGHT * TILE_SIZE;
//   context.strokeStyle = "#222222";
//   context.beginPath();

//   for (let i = 0; i <= CANVAS_WIDTH; i++) {
//     context.moveTo(i * TILE_SIZE, 0);
//     context.lineTo(i * TILE_SIZE, maxY);
//   }
//   for (let i = 0; i <= CANVAS_HEIGHT; i++) {
//     context.moveTo(0, i * TILE_SIZE);
//     context.lineTo(maxX, i * TILE_SIZE);
//   }

//   context.stroke();
// };

// export const drawStageTile = (context, sprites, { name, rotate, flip }) => {
//   const radians = asRadians(rotate);
//   const dx_on_rotate = [90, 180].includes(rotate) ? TILE_SIZE : 0; // eslint-disable-line
//   const dy_on_rotate = [180, 270].includes(rotate) ? TILE_SIZE : 0; // eslint-disable-line
//   // rotate first
//   if (rotate) {
//     context.translate(dx_on_rotate, dy_on_rotate);
//     context.rotate(radians);
//   }

//   // then flip
//   if (flip) {
//     context.translate(TILE_SIZE, 0);
//     context.scale(-1, 1);
//   }

//   context.drawImage(sprites[name], 0, 0, TILE_SIZE, TILE_SIZE);

//   // unflip
//   if (flip) {
//     context.scale(-1, 1);
//     context.translate(-TILE_SIZE, 0);
//   }

//   // then unrotate
//   if (rotate) {
//     context.rotate(-radians);
//     context.translate(-dx_on_rotate, -dy_on_rotate); // eslint-disable-line
//   }
// };

// export const pathExitsMap = ({ x, y }) =>
//   x < 0 || x >= CANVAS_WIDTH || y < 0 || y >= CANVAS_HEIGHT;
