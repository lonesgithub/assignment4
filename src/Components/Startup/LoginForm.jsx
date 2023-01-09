import { useForm } from "react-hook-form";
import { loginUser } from "../../api/user";
import { useState, useEffect } from "react";
import { storageSave } from "../../utils/storage";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../Context/UserContext";
import { STORAGE_KEY_USER } from "../../const/storageKeys";

//only declared once and not rerendered because it is outside the formComponent
const usernameConfig = {
  required: true,
  minLength: 3,
};

const LoginForm = () => {
  //HOOKS
  const {
    register, //to register inputs in our form
    handleSubmit, //handleSubmit from useForm prevents form from reloading and collects all data from input related to register used and passes the result to onSubmit as data
    formState: { errors }, // restructuring errors from formstate
  } = useForm(); // no arguments needed, but needs destructuring.

  const { user, setUser } = useUser();
  const navigate = useNavigate();

  //LOCAL STATE
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState(null);

  //SIDE EFFECTS
  useEffect(() => {
    if (user !== null) {
      navigate("/translation");
    }
  }, [user, navigate]); // if empty dependency  - only run once. Now each time user changes and when navigate changes

  //EVENT HANDLERS
  const onSubmit = async ({ username }) => {
    //username from form
    setLoading(true);
    const [error, userResponse] = await loginUser(username);
    if (error !== null) {
      setApiError(error);
    }
    if (userResponse !== null) {
      storageSave(STORAGE_KEY_USER, userResponse);
      setUser(userResponse);
    }

    //logging in is completed here
    setLoading(false);
  };

  //RENDER FUNCTIONS - changing texts or other content and display it on screen
  const errorMessage = (() => {
    //error message will be an object. Function is automatically invoked everytime it is rendered
    if (!errors.username) {
      return null; //renders null as a component is perfectly ok in react. Element is just ignored.
    }
    if (errors.username.type === "required") {
      return <span>Username is required</span>;
    }
    if (errors.username.type === "minLength") {
      return <span>Username needs at least 3 characters</span>;
    }
  })();

  return (
    <>
      <h3 className="mb-4">What is your name?</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <label hidden htmlFor="username">
            Username:
          </label>
          <input
            type="text"
            {...register("username", usernameConfig)}
            placeholder="johndoe"
            className="input-name px-4 mb-4"
          />
          {errorMessage} {/* this is not a function, but an object */}
        </fieldset>
        <button type="submit" disabled={loading} className="btns">
          Continue
        </button>
        {loading && <p>Logging in...</p>}
        {apiError && <p>{apiError}</p>}
      </form>
    </>
  );
};

export default LoginForm;
