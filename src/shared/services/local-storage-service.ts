export const saveItemInStorage = (key: string, value: string) =>
  localStorage.setItem(key, value);

export const retrieveItemFromStorage = (key: string) =>
  localStorage.getItem(key);
