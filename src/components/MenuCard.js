import React from "react";
import "./MenuCard.css";

const MenuCard = ({ item, addToCart }) => {
  return (
    <div className="menu-card">
      <img src={item.image} alt={item.name} className="menu-image" />
      <div className="menu-details">
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <p>₹ {item.price}</p>
        <button onClick={() => addToCart(item)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default MenuCard;
