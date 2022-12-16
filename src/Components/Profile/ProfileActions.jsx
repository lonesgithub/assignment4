import { Link } from "react-router-dom";
import { storageDelete, storageSave } from "../../utils/storage";
import { useUser } from "../../Context/UserContext";
import { STORAGE_KEY_USER } from "../../const/storageKeys";
import { translationClearHistory } from "../../api/translate";

const ProfileActions = () => {
  const { user, setUser } = useUser();

  const handleLogOutClick = () => {
    if (window.confirm("Are you sure you want to log out?")) {
      //Deleting usr in local storage only (not in the api/database)
      //Clearing state too
      storageDelete(STORAGE_KEY_USER);
      setUser(null);
    }
  };

  const handleClearHistoryClick = async () => {
    if (
      !window.confirm(
        "Are you sure you want to clear history?\nThis can not be undone!"
      )
    ) {
      return;
    }
    const [clearError] = await translationClearHistory(user.id);
    if (clearError !== null) {
      //Do something
      return;
    }

    const updatedUser = { ...user, translations: [] };
    storageSave(STORAGE_KEY_USER, updatedUser); //key first, value second argument
    setUser(updatedUser);
  };

  return (
    <ul>
      <li>
        <button onClick={handleClearHistoryClick} className="btns">
          Clear history
        </button>
      </li>
      <li>
        <button onClick={handleLogOutClick} className="btns">
          Log out
        </button>
      </li>
    </ul>
  );
};

export default ProfileActions;
