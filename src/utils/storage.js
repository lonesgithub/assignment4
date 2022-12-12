export const storageSave = (key, value) => {
  //global object
  //built in object, no need to import or install
  localStorage.setItem(key, JSON.stringify(value));
};

export const storageRead = (key) => {
  //data = what ever is in the local storage, as a string, because it is stringified:
  const data = localStorage.getItem(key);
  if (data) {
    return JSON.parse(data); //transforms string back to object
  }
  return null;
};
