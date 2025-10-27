import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">SwiggyClone</div>

      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#offers">Offers</a></li>
        <li><a href="#help">Help</a></li>
      </ul>

      <div className="auth-buttons">
        <button className="signin-btn">Sign In</button>
        <button className="signup-btn">Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;
