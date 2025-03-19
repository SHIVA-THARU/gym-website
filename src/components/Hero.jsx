import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <header className="hero">
      <h1>Welcome to FitLife Gym</h1>
      <p>Train Hard, Stay Fit</p>
      <Link to="/register" className="btn">Join Now</Link>
    </header>
  );
};

export default Hero;
