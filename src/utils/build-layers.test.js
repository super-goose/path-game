import { buildLayers } from "./build-layers";

const generic = {
  0: { out: 1, connected: false },
  1: { out: 0, connected: false },
  2: { out: 3, connected: false },
  3: { out: 2, connected: false },
  4: { out: 5, connected: false },
  5: { out: 4, connected: false },
  6: { out: 7, connected: false },
  7: { out: 6, connected: false },
  order: [0, 1, 2, 3, 4, 5, 6, 7],
};

test("it generates an array", () => {
  expect(buildLayers(generic)).toBeInstanceOf(Array);
  const layers = buildLayers(generic);
  expect(typeof layers[0].name).toBe("string");
  expect(typeof layers[0].rotate).toBe("number");
  expect(typeof layers[0].flip).toBe("boolean");
});

test("it builds the correct layers in the correct order (0)", () => {
  const layers = buildLayers(generic);
  const target = [
    { name: "0-1", rotate: 0, flip: false },
    { name: "0-1", rotate: 90, flip: false },
    { name: "0-1", rotate: 180, flip: false },
    { name: "0-1", rotate: 270, flip: false },
  ];
  expect(layers).toEqual(target);
});

test("it builds the correct layers in the correct order (1)", () => {
  const generic = {
    0: { out: 4, connected: false },
    4: { out: 0, connected: false },
    1: { out: 7, connected: false },
    7: { out: 1, connected: false },
    2: { out: 5, connected: false },
    5: { out: 2, connected: false },
    3: { out: 6, connected: false },
    6: { out: 3, connected: false },
    order: [0, 4, 1, 7, 2, 5, 3, 6],
  };
  const layers = buildLayers(generic);
  const target = [
    { name: "0-4", rotate: 0, flip: false },
    { name: "0-2", rotate: 0, flip: true },
    { name: "0-3", rotate: 90, flip: false },
    { name: "0-5", rotate: 90, flip: true },
  ];
  expect(layers).toEqual(target);
});

test("it builds the correct layers in the correct order (2)", () => {
  const generic = {
    3: { out: 0, connected: true },
    0: { out: 3, connected: true },
    4: { out: 6, connected: false },
    6: { out: 4, connected: false },
    2: { out: 1, connected: true },
    1: { out: 2, connected: true },
    5: { out: 7, connected: false },
    7: { out: 5, connected: false },
    order: [3, 0, 4, 6, 2, 1, 5, 7],
  };
  const layers = buildLayers(generic);
  const target = [
    { name: "0-3", rotate: 0, flip: false },
    { name: "0-3-filled", rotate: 0, flip: false },
    { name: "0-2", rotate: 180, flip: false },
    { name: "0-7", rotate: 0, flip: true },
    { name: "0-7-filled", rotate: 0, flip: true },
    { name: "0-6", rotate: 180, flip: true },
  ];
  expect(layers).toEqual(target);
});

/*
"0-1-filled"
"0-1"
"0-2-filled"
"0-2"
"0-3-filled"
"0-3"
"0-4-filled"
"0-4"
"0-5-filled"
"0-5"
"0-6-filled"
"0-6"
"0-7-filled"
"0-7"
*/
