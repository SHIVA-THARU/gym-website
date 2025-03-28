import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo1.png";  
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="FitLife Gym Logo" className="logo" />FitLife Gym 
      </div>
      <ul className="nav-links">
        <li><Link to="/gym-website/">Home</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
