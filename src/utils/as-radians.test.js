import { asRadians } from './as-radians';

test('it converts degrees to radians', () => {
  expect(asRadians(0)).toBe(0);
  expect(asRadians(90)).toBe(Math.PI / 2);
  expect(asRadians(180)).toBe(Math.PI);
  expect(asRadians(270)).toBe((3 * Math.PI) / 2);
  expect(asRadians(360)).toBe(0);
});
