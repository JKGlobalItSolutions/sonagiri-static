// src/components/Navbar.jsx

import { Link } from "react-router-dom";
import { useState } from "react";
import navlogo from "../assets/navlogo/logo2.jpg"; // ✅ import logo

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar navbar-expand-md navbar-light bg-white fixed-top shadow-sm">
      <div className="container">
        {/* ✅ Logo */}
        <Link to="/" onClick={closeMenu} className="navbar-brand">
          <img
            src={navlogo}
            alt="Logo"
            className="rounded"
            style={{ width: "120px" }}
          />
        </Link>

        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
          aria-controls="navbarNav"
          aria-expanded={isOpen ? "true" : "false"}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div
          className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto mb-2 mb-md-0 gap-5">
            {[
              ["/", "Home"],
              ["/about", "About"],
              ["/service", "Service"],
              ["/pricing", "Pricing"],
              ["/career", "Career"],
              ["/contact", "Contact"],
            ].map(([path, label]) => (
              <li key={label} className="nav-item ">
                <Link
                  to={path}
                  onClick={closeMenu}
                  className="nav-link fw-semibold"
                  style={{ color: "#038A5E" }}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
