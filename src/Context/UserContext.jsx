import { createContext, useContext, useState } from "react";
import { STORAGE_KEY_USER } from "../const/storageKeys";
import { storageRead } from "../utils/storage";
//Context  -> exposing the state

const UserContext = createContext();

//creating our own custom hook to use later instead of useContext everywhere
export const useUser = () => {
  return useContext(UserContext); //exposing the value, providing the state in the userContext // returns object: {user,setUser}
};
//Provider -> managing the state
const UserProvider = ({ children }) => {
  const [user, setUser] = useState(storageRead(STORAGE_KEY_USER)); //no user when app starts

  //create an object of state:
  const state = {
    user,
    setUser,
  };
  return <UserContext.Provider value={state}>{children}</UserContext.Provider>;
};
export default UserProvider;
