
export const saveItem = async (keyName, keyValue) => {
  try {
    await localStorage.setItem(keyName, keyValue);
    return true;
  } catch (e) {
    return false;
  }
};

export const getItem = async keyName => {
  try {
    return await localStorage.getItem(keyName);
  } catch (e) {
    return false;
  }
};

export const clearAll = async () => {
  try {
    return await localStorage.clear();
  } catch (e) {
    return false;
  }
};
