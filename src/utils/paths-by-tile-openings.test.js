import { pathsByTileOpenings } from "./paths-by-tile-openings";

describe("pathsByTileOpenings", () => {
  it("returns the right path with no flip or rotation", () => {
    expect(pathsByTileOpenings("0-1", false, 0)).toBe(
      "M 25,100 A 25,25 0,0,1 75,100"
    );
    expect(pathsByTileOpenings("0-2", false, 0)).toBe(
      "M 25,100 A 25,25 0,0,1 50,75 L 100,75"
    );
    expect(pathsByTileOpenings("0-3", false, 0)).toBe(
      "M 25,100 A 75,75 0,0,1 100,25"
    );
    expect(pathsByTileOpenings("0-4", false, 0)).toBe(
      "M 25,100 L 25,85 Q 25,63 40,55 L 50,50 T 60,45 Q 75,37 75,15 L 75,0"
    );
    expect(pathsByTileOpenings("0-5", false, 0)).toBe("M 25,100 L 25,0");
    expect(pathsByTileOpenings("0-6", false, 0)).toBe(
      "M 25,100 L 25,50 A 25,25 0,0,0 0,25"
    );
    expect(pathsByTileOpenings("0-7", false, 0)).toBe(
      "M 25,100 A 25,25 0,0,0 0,75"
    );
  });

  it("returns the right path with flip but no rotation", () => {
    expect(pathsByTileOpenings("0-1", true, 0)).toBe(
      "M 75,100 A 25,25 0,0,0 25,100"
    );
    expect(pathsByTileOpenings("0-2", true, 0)).toBe(
      "M 75,100 A 25,25 0,0,0 50,75 L 0,75"
    );
    expect(pathsByTileOpenings("0-3", true, 0)).toBe(
      "M 75,100 A 75,75 0,0,0 0,25"
    );
    expect(pathsByTileOpenings("0-4", true, 0)).toBe(
      "M 75,100 L 75,85 Q 75,63 60,55 L 50,50 T 40,45 Q 25,37 25,15 L 25,0"
    );
    expect(pathsByTileOpenings("0-5", true, 0)).toBe("M 75,100 L 75,0");
    expect(pathsByTileOpenings("0-6", true, 0)).toBe(
      "M 75,100 L 75,50 A 25,25 0,0,1 100,25"
    );
    expect(pathsByTileOpenings("0-7", true, 0)).toBe(
      "M 75,100 A 25,25 0,0,1 100,75"
    );
  });

  it("returns the right path with rotation but no flip", () => {
    expect(pathsByTileOpenings("0-1", false, 90)).toBe(
      "M 100,75 A 25,25 0,0,1 100,25"
    );
    expect(pathsByTileOpenings("0-1", false, 180)).toBe(
      "M 75,0 A 25,25 0,0,1 25,0"
    );
    expect(pathsByTileOpenings("0-1", false, 270)).toBe(
      "M 0,25 A 25,25 0,0,1 0,75"
    );

    expect(pathsByTileOpenings("0-2", false, 90)).toBe(
      "M 100,75 A 25,25 0,0,1 75,50 L 75,0"
    );
    expect(pathsByTileOpenings("0-2", false, 180)).toBe(
      "M 75,0 A 25,25 0,0,1 50,25 L 0,25"
    );
    expect(pathsByTileOpenings("0-2", false, 270)).toBe(
      "M 0,25 A 25,25 0,0,1 25,50 L 25,100"
    );

    expect(pathsByTileOpenings("0-3", false, 90)).toBe(
      "M 100,75 A 75,75 0,0,1 25,0"
    );
    expect(pathsByTileOpenings("0-3", false, 180)).toBe(
      "M 75,0 A 75,75 0,0,1 0,75"
    );
    expect(pathsByTileOpenings("0-3", false, 270)).toBe(
      "M 0,25 A 75,75 0,0,1 75,100"
    );

    expect(pathsByTileOpenings("0-4", false, 90)).toBe(
      "M 100,75 L 85,75 Q 63,75 55,60 L 50,50 T 45,40 Q 37,25 15,25 L 0,25"
    );
    expect(pathsByTileOpenings("0-4", false, 180)).toBe(
      "M 75,0 L 75,15 Q 75,37 60,45 L 50,50 T 40,55 Q 25,63 25,85 L 25,100"
    );
  });

  it("returns the right path with flip and rotation", () => {
    expect(pathsByTileOpenings("0-2", true, 90)).toBe(
      "M 100,25 A 25,25 0,0,0 75,50 L 75,100"
    );

    expect(pathsByTileOpenings("0-6", true, 180)).toBe(
      "M 25,0 L 25,50 A 25,25 0,0,1 0,75"
    );
  });
});

//   {
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
