import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <h3>Swiggy Clone</h3>
        <p>© 2025 Food Delivery Project. Built with ❤️ using React.</p>
      </div>
      <div className="footer-links">
        <a href="#">About</a>
        <a href="#">Careers</a>
        <a href="#">Help & Support</a>
        <a href="#">Terms & Conditions</a>
      </div>
    </footer>
  );
};

export default Footer;
