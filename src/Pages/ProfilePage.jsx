import PageTemplate from "./PageTemplate";
import withAuth from "../HigherOrderComponents/withAuth";
import ProfileHeader from "../Components/Profile/ProfileHeader";
import ProfileActions from "../Components/Profile/ProfileActions";
import ProfileTranslationHistory from "../Components/Profile/ProfileTranslationHistory";
import { useUser } from "../Context/UserContext";
import { useEffect } from "react";
import { userById } from "../api/user";
import { storageSave } from "../utils/storage";
import { STORAGE_KEY_USER } from "../const/storageKeys";

const ProfilePage = () => {
  const { user, setUser } = useUser();

  useEffect(() => {
    const findUser = async () => {
      const [error, latestUser] = await userById(user.id);
      if (error === null) {
        storageSave(STORAGE_KEY_USER, latestUser);
        setUser(latestUser);
      }
    };
    // findUser();
  }, [setUser, user.id]);

  return (
    <>
      <main className="container-fluid profilepage">
        <ProfileHeader username={user.username} />
        <ProfileActions />
        <ProfileTranslationHistory translations={user.translations} />
      </main>
    </>
  );
};

export default withAuth(ProfilePage);
