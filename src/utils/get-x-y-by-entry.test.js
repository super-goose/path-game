const { getXYByEntry } = require("./get-x-y-by-entry");

describe("getXYByEntry", () => {
  test("does what the name implies", () => {
    expect(getXYByEntry("0,-1:0", 0.25)).toEqual({
      x: 2.75, // 15 * scale - 1
      y: -1, // -4 * scale
      width: 7, // 20 * scale + 2
      height: 2, // 8 * scale
    });
    expect(getXYByEntry("3,-1:0", 0.25)).toEqual({
      x: 90.25, // 365 * scale - 1
      y: -1, // -4 * scale
      width: 7, // 20 * scale + 2
      height: 2, // 8 * scale
    });
    expect(getXYByEntry("4,0:6", 0.25)).toEqual({
      x: 99, // 396 * scale
      y: 2.75, // 15 * scale - 1
      width: 2, // 8 * scale
      height: 7, // 20 * scale + 2
    });
    ///////
    expect(getXYByEntry("3,4:4", 0.25)).toEqual({
      x: 90.25, //
      y: 99, //
      width: 7, // 20 * scale + 2
      height: 2, // 8 * scale
    });
    ///////
    expect(getXYByEntry("-1,0:3", 0.2)).toEqual({
      x: -1, // -4 * scale
      y: 2.75, // 15 * scale - 1
      width: 2, // 8 * scale
      height: 7, // 20 * scale + 2
    });

    expect(getXYByEntry("0,-1:0", 0.2)).toEqual({
      x: 2, // 15 * scale - 1
      y: -0.8, // -4 * scale
      width: 6, // 20 * scale + 2
      height: 1.6, // 8 * scale
    });
    expect(getXYByEntry("3,-1:0", 0.2)).toEqual({
      x: 72, // 365 * scale - 1
      y: -0.8, // -4 * scale
      width: 6, // 20 * scale + 2
      height: 1.6, // 8 * scale
    });
    expect(getXYByEntry("5,0:6", 0.2)).toEqual({
      x: 99.2, // 496 * scale
      y: 2, // 15 * scale - 1
      width: 1.6, // 8 * scale
      height: 6, // 20 * scale + 2
    });
    expect(getXYByEntry("3,5:4", 0.2)).toEqual({
      x: 72, // 365 * scale - 1
      y: 99.2, // 496 * scale
      width: 6, // 20 * scale + 2
      height: 1.6, // 8 * scale
    });
    expect(getXYByEntry("-1,0:3", 0.2)).toEqual({
      x: -0.8, // -4 * scale
      y: 2, // 15 * scale - 1
      width: 1.6, // 8 * scale
      height: 6, // 20 * scale + 2
    });
  });
});
