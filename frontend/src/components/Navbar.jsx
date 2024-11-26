import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="navbar-brand">
        <Link to="/">Movie App</Link>
      </div>
      <div className="nav-links">
        <Link className="nav-link" to="/home">Home</Link>
        <Link className="nav-link" to="/favorites">Favorites</Link>
      </div>
    </nav>
  );
};

export default Navbar;
