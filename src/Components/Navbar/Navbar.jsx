import { NavLink } from "react-router-dom";
import { useUser } from "../../Context/UserContext";
import { useEffect } from "react";
import { userById } from "../../api/user";
import { storageSave } from "../../utils/storage";
import { STORAGE_KEY_USER } from "../../const/storageKeys";

const Navbar = () => {
  const { user, setUser } = useUser();

  return (
    <nav className="container-fluid">
      <header className="nav-header-logo row">
        <NavLink to="/translation" className="logoName col-12 col-sm-6">
          <img
            src="images/Logo.png"
            alt="Cartoon Robot"
            width="50px"
            height="50px"
          />
          <h1 className="headerh1 mx-2">Translations</h1>
        </NavLink>
      </header>

      {/* For logged in users only */}
      {user !== null && (
        <ul className="col-12 col-sm-6">
          <li>
            <NavLink to="/translation">New translation</NavLink>
          </li>
          <li>
            <NavLink to="/profile"> {user.username}'s profile </NavLink>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
