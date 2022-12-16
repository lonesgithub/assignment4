import { createHeaders } from ".";

const apiUrl = process.env.REACT_APP_API_URL;

//POST - Create new user record
//POST - Update parts of user record
//GET - Read records
//DELETE - Removes a record
//PUT - replaces enitre record

export const translationAdd = async (user, translation) => {
  try {
    const response = await fetch(`${apiUrl}/${user.id}`, {
      method: "PATCH", //updating existing record
      headers: createHeaders(), //adding the token
      body: JSON.stringify({
        translations: [...user.translations, translation], //updating translation history, keeping the existing history
      }),
    });
    if (!response.ok) {
      throw new Error("Could not update translation history");
    }

    const result = await response.json();
    return [null, result];
  } catch (error) {
    return [error.message, null];
  }
};

export const translationClearHistory = async (userId) => {
  try {
    const response = await fetch(`${apiUrl}/${userId}`, {
      method: "PATCH",
      headers: createHeaders(),
      body: JSON.stringify({ translations: [] }), //clearing traslation array/history
    });
    if (!response.ok) {
      throw new Error("Could not update orders");
    }
    const result = await response.json();
    return [null, result]; //return null if no error message, result if there is one??
  } catch (error) {
    return [error.message, null];
  }
};
