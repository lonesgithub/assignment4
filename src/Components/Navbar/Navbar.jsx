import { NavLink } from "react-router-dom";
import { useUser } from "../../Context/UserContext";

const Navbar = () => {
  const { user } = useUser();
  return (
    <nav>
      <header className="nav-header-logo">
        <img
          src="images/Logo.png"
          alt="Cartoon Robot"
          width="50px"
          height="50px"
        />
        <h1 className="headerh1 ml-2">Translations</h1>
      </header>

      {/* For logged in users only */}
      {user !== null && (
        <ul>
          <li>
            <NavLink to="/translation">New translation</NavLink>
          </li>
          <li>
            <NavLink to="/profile">My Profile</NavLink>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
