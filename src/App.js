import React, { useState } from "react";
import Navbar from "./components/Navbar";
import MenuCard from "./components/MenuCard";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import Offers from "./components/Offers";
import Restaurants from "./components/Restaurants";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

  const menuItems = [
    {
      id: 1,
      name: "Paneer Butter Masala",
      price: 250,
      description: "Delicious paneer curry",
      image: "https://images.unsplash.com/photo-1604908177549-0b6e1de049e0?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      name: "Veg Biryani",
      price: 180,
      description: "Spicy vegetable biryani",
      image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      name: "Gulab Jamun",
      price: 60,
      description: "Sweet dessert",
      image: "https://images.unsplash.com/photo-1617196037011-0e9aaf0e21a2?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      name: "Masala Dosa",
      price: 120,
      description: "Crispy and savory South Indian dosa",
      image: "https://images.unsplash.com/photo-1603201269555-52f094123b37?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const addToCart = (item) => {
    setCart([...cart, item]);
    alert(`${item.name} added to cart!`);
  };

  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
      <Offers />
      
      {}
      <section className="menu-section">
        <h2 className="menu-title">Our Menu</h2>
        <div className="menu-row">
          {menuItems.map((item) => (
            <MenuCard key={item.id} item={item} addToCart={addToCart} />
          ))}
        </div>
      </section>

      <Restaurants />
      <Footer />
    </>
  );
}

export default App;
