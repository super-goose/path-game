import { pathsByTileOpenings } from "./paths-by-tile-openings";

describe("pathsByTileOpenings", () => {
  it("returns the right path with no flip or rotation", () => {
    expect(pathsByTileOpenings("0-1", false, 0)).toBe(
      "M 25,100 A 25,25 0,0,1 75,100"
    );
  });

  it("returns the right path with flip but no rotation", () => {
    expect(pathsByTileOpenings("0-1", true, 0)).toBe(
      "M 25,100 A 25,25 0,0,1 75,100"
    );
  });

  it("returns the right path with rotation but no flip", () => {
    expect(pathsByTileOpenings("0-1", false, 90)).toBe(
      "M 100,75 A 25,25 0,0,1 100,25"
    );
  });

  it("returns the right path with flip and rotation", () => {
    expect(pathsByTileOpenings("0-1", true, 90)).toBe(
      "M 0,25 A 25,25 0,0,1 0,75"
    );
  });
});

// export const pathsByTileOpenings = (openings, flip, rotate) => {
//   return {
//     "0-1": ["M 25,100", "A 25,25 0,0,1 75,100"].join(" "),
//     "0-2": ["M 25,100", "A 25,25 0,0,1 50,75", "L 100,75"].join(" "),
//     "0-3": ["M 25,100", "A 75,75 0,0,1 100,25"].join(" "),
//     "0-4": [
//       "M 25,100",
//       "L 25,85",
//       "Q 25,63 40,55",
//       "L 50,50",
//       "T 60,45",
//       "Q 75,37 75,15",
//       "L 75,0",
//     ].join(" "),
//     "0-5": ["M 25,100", "L 25, 0"].join(" "),
//     "0-6": ["M 25,100", "L 25,50", "A 25,25 0,0,0 0,25"].join(" "),
//     "0-7": ["M 25,100", "A 25,25 0,0,0 0,75"].join(" "),
//   }[openings];
// };
