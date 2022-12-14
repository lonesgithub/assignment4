import { useForm } from "react-hook-form";
import SignItem from "./SignItem";

const TranslationForm = ({ setInputPhrase, onTranslate }) => {
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();

  const onSubmit = ({ phrase }) => {
    onTranslate(phrase);
    setInputPhrase(phrase);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset>
        <label htmlFor="phrase">Translation frase here:</label>
        <input
          type="text"
          {...register("phrase")}
          id="phrase"
          placeholder="What do you want to translate?"
        />
      </fieldset>
      <button type="submit">Translate now</button>
    </form>
  );
};

export default TranslationForm;
