import React from "react";
import "./Categories.css";

const categories = [
  { name: "Pizza", img: "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg" },
  { name: "Burger", img: "https://images.pexels.com/photos/1639564/pexels-photo-1639564.jpeg" },
  { name: "Ice Cream", img: "https://images.pexels.com/photos/3023476/pexels-photo-3023476.jpeg" },
  { name: "Biryani", img: "https://images.pexels.com/photos/5410401/pexels-photo-5410401.jpeg" },
  { name: "Desserts", img: "https://images.pexels.com/photos/3023476/pexels-photo-3023476.jpeg" },
];

const Categories = () => {
  return (
    <section className="categories">
      <h2>What's on your mind?</h2>
      <div className="category-list">
        {categories.map((item, index) => (
          <div className="category-card" key={index}>
            <img src={item.img} alt={item.name} />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
