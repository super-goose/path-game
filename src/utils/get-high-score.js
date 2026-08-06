export const getHighScore = (dimensions) =>
  JSON.parse(
    localStorage.getItem(`highScore-${JSON.stringify(dimensions)}`) || 0,
  );

export const saveHighScore = (dimensions, score) =>
  localStorage.setItem(
    `highScore-${JSON.stringify(dimensions)}`,
    JSON.stringify(score),
  );
