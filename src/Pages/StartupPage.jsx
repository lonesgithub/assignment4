import PageTemplate from "./PageTemplate";
import LoginForm from "../Components/Startup/LoginForm";
const StartupPage = () => {
  return (
    <>
      <h1>Lost in translation</h1>
      <p>Let's get started</p>
      <LoginForm />
    </>
  );
};

export default PageTemplate(StartupPage);
