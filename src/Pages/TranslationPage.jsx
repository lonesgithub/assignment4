import PageTemplate from "./PageTemplate";
import TranslationResult from "../Components/Translation/TranslationResult";
import withAuth from "../HigherOrderComponents/withAuth";
import TranslationForm from "../Components/Translation/TranslationForm";
import SignItem from "../Components/Translation/SignItem";
import { useState } from "react";
import { useUser } from "../Context/UserContext";
import { translationAdd } from "../api/translate";
import { storageSave } from "../utils/storage";
import { STORAGE_KEY_USER } from "../const/storageKeys";

const TranslationPage = () => {
  const [inputPhrase, setInputPhrase] = useState();
  const { user, setUser } = useUser();

  const handleTranslateClicked = async () => {
    if (!inputPhrase) {
      alert("Please enter a phrase");
      return;
    }
    const [error, updatedUser] = await translationAdd(user, inputPhrase);
    if (error !== null) {
      //Something went wrong
      return;
    }
    //Keep UI state and Server state in sync
    storageSave(STORAGE_KEY_USER, updatedUser);
    //Update context state
    setUser(updatedUser); //updated is the whole user object here, which is updated with new translations

    console.log("Error", error);
    console.log("updated user", updatedUser);
  };

  return (
    <div>
      <TranslationForm
        setInputPhrase={setInputPhrase}
        onTranslate={handleTranslateClicked}
      />
      {inputPhrase ? <TranslationResult inputPhrase={inputPhrase} /> : null}
    </div>
  );
};

export default withAuth(TranslationPage);
