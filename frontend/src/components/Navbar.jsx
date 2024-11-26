import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../assets/movie.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img className="logo" src={logo} alt="movie logo" />
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
