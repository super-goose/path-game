import tileSprites from '../asset-data-urls.json';

const resolveDataUrl = (name, data) => new Promise((resolve, reject) => {
  const img = new Image();
  img.onerror = reject;
  img.onload = () => {
    resolve(img);
  };
  img.src = data;
});

export const primeSprites = () => new Promise((resolve) => {
  const sprites = {};
  return Promise.all(
    Object.keys(tileSprites).map(
      (key) => resolveDataUrl(key, tileSprites[key])
        .then((img) => {
          sprites[key] = img;
        }),
    ),
  )
    .then(() => resolve(sprites));
});
