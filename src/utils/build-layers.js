export const lowestFirst = (a, b) => [Math.min(a, b), Math.max(a, b)];
export const getFlippedOut = (out) => [1, 0, 7, 6, 5, 4, 3, 2][out];
export const buildLayers = (tile) => {
  const addressed = [false, false, false, false, false, false, false, false];
  const layers = [];
  tile.order.forEach((i) => {
    if (addressed[i]) {
      return;
    }

    let [_in, _out] = lowestFirst(i, tile[i].out);

    addressed[i] = true;
    addressed[tile[i].out] = true;
    const filled = tile[i].connected;

    let rotate = 0;
    const flip = _in % 2 === 1;

    while (_in >= 2) {
      _in = (_in + 6) % 8;
      _out = (_out + 6) % 8;

      rotate += 90;
    }

    if (_in === 1) {
      _in = 0;
      _out = getFlippedOut(_out);
    }
    const name = `${_in}-${_out}`;
    layers.push({ name, rotate, flip, filled });
  });

  return layers;
};
