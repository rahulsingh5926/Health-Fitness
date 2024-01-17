import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <nav className="navbar fixed top-0 w-full z-10">
      <div className="container">
        <Link to="/" className="brand">
          NutriFitJourney
        </Link>
        <div className="nav-links">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/about" className="nav-link">
            About
          </Link>
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
          <div className="dropdown">
            <span className="nav-link">Services</span>
            <div className="dropdown-content">
              <Link to="/Nutrition">Nutrition Analysis</Link>
              <Link to="/ExerciseModule/Training">Fitness Training</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
