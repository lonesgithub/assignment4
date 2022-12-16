import PageTemplate from "./PageTemplate";
import LoginForm from "../Components/Startup/LoginForm";
const StartupPage = () => {
  return (
    <>
      <h2 className="headerh2">Let's get started</h2>
      <LoginForm />
    </>
  );
};

export default PageTemplate(StartupPage);
