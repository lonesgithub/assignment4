import { createHeaders } from "./index";

const apiUrl = process.env.REACT_APP_API_URL; //need to stop and restart server if you create a new enivornment-variable

//Check if user exists
const checkForUser = async (username) => {
  //Allways try catch when using async await

  try {
    const response = await fetch(`${apiUrl}?username=${username}`); //querystring
    if (!response.ok) {
      throw new Error("Could not complete request");
    }
    const data = await response.json();
    return [null, data];
  } catch (error) {
    return [error.message, []];
  }
};

//Create new user

//Needs authentication before we can add date to the database/api, therefore we need the configruation object as a 2 argument to the fetch()
const createUser = async (username) => {
  try {
    const response = await fetch(apiUrl, {
      //second argument is a configuration-object:
      method: "POST", //because we shall post something, here user
      headers: createHeaders(), // returns a new object that become the header
      body: JSON.stringify({
        //can't send object with fetch.Http does not understand js, only understand strings. Json turning object into string
        username, //input from user
        translations: [], //new user needs to start with empty array of translations
      }),
    }); //querystring
    if (!response.ok) {
      throw new Error("Could not create user with username " + username);
    }
    const data = await response.json();
    return [null, data];
  } catch (error) {
    return [error.message, []];
  }
};

export const loginUser = async (username) => {
  const [checkError, user] = await checkForUser(username);

  //if something went wrong, return the error so the component knows about it
  if (checkError !== null) return [checkError, null];

  // if nothing went wrong, return null and the user
  if (user.length > 0) {
    return [null, user.pop()]; //null represents error, second arg: user
  }

  return await createUser(username); //returnerer enten userdata eller null
};

export const userById = async (userId) => {
  try {
    const response = await fetch(`${apiUrl}/${userId}`);
    if (!response.ok) {
      throw new Error("Could not fetch user");
    }

    const user = await response.json();
    return [null, user];
  } catch (error) {
    return [error.message, null];
  }
};
