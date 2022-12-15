import { NavLink } from "react-router-dom";
import { useUser } from "../../Context/UserContext";

const Navbar = () => {
  const { user } = useUser();
  return (
    <nav>
      <header>
        <h1>Translations</h1>
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
