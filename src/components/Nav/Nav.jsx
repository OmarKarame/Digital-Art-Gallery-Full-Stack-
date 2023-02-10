import "./Nav.scss";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <Link className="nav__item" to="/">
        Home
      </Link>

      <Link className="nav__item" to="/artimages">
        Art Images
      </Link>

      <Link className="nav__item" to="/artimage/create">
        Add Art
      </Link>
    </div>
  );
};

export default Nav;