import PageTemplate from "./PageTemplate";
import LoginForm from "../Components/Startup/LoginForm";
import { Splash } from "../Components/svg/Splash";

const StartupPage = () => {
  return (
    <div className="container">
      <div className="logo-startpage row">
        <div className="logo-container col-12 col-md-4 ">
          <img src="images/Logo-Hello.png" alt="Cartoon Robot" width="200px" />
          {/* <Splash className="splash" /> */}
        </div>
        <div className=" col-12 col-md-8 ">
          <h2 className="headerh2 mb-5">Let's get started</h2>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default PageTemplate(StartupPage);
