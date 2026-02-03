export const getEntryRectProps = ({ entry, scale }) => {
  const [coord, position] = entry.split(":");

  const width = ["0", "4"].includes(position) ? 20 * scale + 2 : 8 * scale;

  const height = ["2", "6"].includes(position) ? 20 * scale + 2 : 8 * scale;

  const x = {
    0: 15 * scale - 1,
    2: 100 - width / 2,
    4: 100 - (15 * scale - 1) - width,
    6: -width / 2,
  }[position];

  const y = {
    0: -4 * scale,
    2: 15 * scale - 1,
    4: 100 - 4 * scale,
    6: 100 - (15 * scale - 1) - height,
  }[position];

  return {
    x,
    y,
    width,
    height,
    strokeWidth: 4 * scale,
  };
};
