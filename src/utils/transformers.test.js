import { coordsToKey, keyToCoords } from "./transformers";

test('it genrates a key from a coordinate object', () => {
  expect(coordsToKey({x: 0, y: 0})).toEqual('0,0');
  expect(coordsToKey({x: 12, y: 0})).toEqual('12,0');
  expect(coordsToKey({x: 69, y: 69})).toEqual('69,69');
})

test('it genrates a coordinate object from a key', () => {
  expect(keyToCoords('0,0')).toEqual({x: 0, y: 0});
  expect(keyToCoords('12,0')).toEqual({x: 12, y: 0});
  expect(keyToCoords('69,69')).toEqual({x: 69, y: 69});
})

