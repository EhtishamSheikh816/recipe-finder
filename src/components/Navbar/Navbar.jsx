import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo Section */}
      <div className="nav-logo-sec">
        <img src="/images/logo.png" className="logo" alt="logo" />
        <span className="logo-txt">Cook Find</span>
      </div>

      {/* Hamburger Button */}
      <div
        className={`hamburger ${isOpen ? "active" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Links Section */}
      <div className={`nav-links-sec ${isOpen ? "open" : ""}`}>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "active-link" : "normal-link"
              }
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "active-link" : "normal-link"
              }
              onClick={() => setIsOpen(false)}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/favorite"
              className={({ isActive }) =>
                isActive ? "active-link" : "normal-link"
              }
              onClick={() => setIsOpen(false)}
            >
              Favorite
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
