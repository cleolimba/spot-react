import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">
            <img src="public/images/logo40 (1) 1.png" alt="" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/search">
            <img src="public/images/loupe.png" alt="" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/shop">
            <img src="public/images/shop.png" alt="" />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
