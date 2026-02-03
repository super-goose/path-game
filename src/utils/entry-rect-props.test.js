import { getEntryRectProps } from "./entry-rect-props";

describe("all entries on 4x4", () => {
  test("top left cell", () => {
    expect(getEntryRectProps({ entry: "0,-1:0", scale: 1 / 4 })).toEqual({
      x: 2.75,
      y: -1,
      width: 7,
      height: 2,
      strokeWidth: 1,
    });
  });

  test("bottom right cell", () => {
    expect(getEntryRectProps({ entry: "3,4:4", scale: 1 / 4 })).toEqual({
      x: 90.25,
      y: 99,
      width: 7,
      height: 2,
      strokeWidth: 1,
    });
  });

  test("top right cell", () => {
    expect(getEntryRectProps({ entry: "4,0:2", scale: 1 / 4 })).toEqual({
      y: 2.75,
      x: 99,
      width: 2,
      height: 7,
      strokeWidth: 1,
    });
  });

  test("bottom left cell", () => {
    expect(getEntryRectProps({ entry: "-1,3:6", scale: 1 / 4 })).toEqual({
      x: -1,
      y: 90.25,
      width: 2,
      height: 7,
      strokeWidth: 1,
    });
  });
});

describe("all entries on 9x9", () => {
  test("top left cell", () => {
    const { x, y, width, height, strokeWidth } = getEntryRectProps({
      entry: "0,-1:0",
      scale: 1 / 9,
    });

    expect(x.toFixed(4)).toBe("0.6667");
    expect(y.toFixed(4)).toBe("-0.4444");
    expect(width.toFixed(4)).toBe("4.2222");
    expect(height.toFixed(4)).toBe("0.8889");
    expect(strokeWidth.toFixed(4)).toBe("0.4444");
  });

  test("bottom right cell", () => {
    const { x, y, width, height, strokeWidth } = getEntryRectProps({
      entry: "8,9:4",
      scale: 1 / 9,
    });

    expect(x.toFixed(4)).toBe("95.1111");
    expect(y.toFixed(4)).toBe("99.5556");
    expect(width.toFixed(4)).toBe("4.2222");
    expect(height.toFixed(4)).toBe("0.8889");
    expect(strokeWidth.toFixed(4)).toBe("0.4444");
  });

  test("top right cell", () => {
    const { x, y, width, height, strokeWidth } = getEntryRectProps({
      entry: "9,0:2",
      scale: 1 / 9,
    });

    expect(x.toFixed(4)).toBe("99.5556");
    expect(y.toFixed(4)).toBe("0.6667");
    expect(width.toFixed(4)).toBe("0.8889");
    expect(height.toFixed(4)).toBe("4.2222");
    expect(strokeWidth.toFixed(4)).toBe("0.4444");
  });

  test("bottom left cell", () => {
    const { x, y, width, height, strokeWidth } = getEntryRectProps({
      entry: "-1,8:6",
      scale: 1 / 9,
    });

    expect(x.toFixed(4)).toBe("-0.4444");
    expect(y.toFixed(4)).toBe("95.1111");
    expect(width.toFixed(4)).toBe("0.8889");
    expect(height.toFixed(4)).toBe("4.2222");
    expect(strokeWidth.toFixed(4)).toBe("0.4444");
  });
});
