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
    register,
    handleSubmit, //handleSubmit from useForm prevents form from reloading and collects all data from input related to register used and passes the result to onSubmit as data
    formState: { errors },
  } = useForm();
  const { user, setUser } = useUser();
  const navigate = useNavigate();

  //LOCAL STATE
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState(null);

  //SIDE EFFECTS

  useEffect(() => {
    if (user !== null) {
      navigate("/profile");
    }
  }, [user, navigate]); // if empty depemendency  - only run once. Now each time user changes and when navigate changes

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

    //logging in is complete here
    setLoading(false);
  };

  //RENDER FUNCTIONS - changing texts or other content and display it on screen
  const errorMessage = (() => {
    //error message will be an object. Function is automatically invoked everytime it is rendered
    if (!errors.username) {
      return null;
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
      <h2>What is your name?</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            {...register("username", usernameConfig)}
            placeholder="johndoe"
          />
          {errorMessage}
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
