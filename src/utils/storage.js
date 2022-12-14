export const storageSave = (key, value) => {
  //global object
  //built in object, no need to import or install

  if (!key || typeof key !== "string") {
    throw new Error("StorageSave: Invalid storage key provided");
  }
  if (!value) {
    throw new Error("StorageSave: No value provided for " + { key });
  }
  sessionStorage.setItem(key, JSON.stringify(value));
};

export const storageRead = (key) => {
  if (!key || typeof key !== "string") {
    throw new Error("StorageRead: Invalid storage key provided");
  }

  //data = what ever is in the local storage, as a string, because it is stringified:
  const data = sessionStorage.getItem(key);
  if (data) {
    return JSON.parse(data); //transforms string back to object
  }
  return null;
};

export const storageDelete = (key) => {
  if (!key || typeof key !== "string") {
    throw new Error("StorageDelete: Invalid storage key provided"); //Error stops the code, so no need for return statement
  }

  sessionStorage.removeItem(key);
};
