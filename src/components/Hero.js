import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Order Food & Get it Delivered Instantly 🍔</h1>
        <p>Discover the best food & drinks near you.</p>
        <input type="text" placeholder="Enter your delivery location" />
        <button>Find Food</button>
      </div>
      <div className="hero-image">
        <img src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg" alt="Food Delivery" />
      </div>
    </section>
  );
};

export default Hero;
