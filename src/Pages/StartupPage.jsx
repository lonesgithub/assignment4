import PageTemplate from "./PageTemplate";
import LoginForm from "../Components/Startup/LoginForm";
const StartupPage = () => {
  return (
    <>
      <h1>Log in</h1>
      <LoginForm />;
    </>
  );
};

export default PageTemplate(StartupPage);
