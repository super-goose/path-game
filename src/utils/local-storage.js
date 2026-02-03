export const getLocalStorage = (key, defaultValue) => {
  const unparsed = global?.window?.localStorage?.getItem(key);

  if (unparsed) {
    return JSON.parse(unparsed);
  }
  return defaultValue;
};

export const setLocalStorage = (key, defaultValue) => {
  localStorage.setItem(key, defaultValue);
};
