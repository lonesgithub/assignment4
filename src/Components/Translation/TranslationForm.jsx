import { useForm } from "react-hook-form";

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
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="form-container row gy-4 d-flex justify-content-center"
    >
      <fieldset className="col-12 col-md-9 ">
        {/* <label htmlFor="phrase" className="d-none ">
          Translation frase here:
        </label> */}
        <input
          type="text"
          {...register("phrase")}
          id="phrase"
          placeholder="Translate something..."
          className="input-translation px-4 "
        />
      </fieldset>
      <button type="submit" className="btns col-8 col-md-3  mx-sm-0">
        Translate
      </button>
    </form>
  );
};

export default TranslationForm;
