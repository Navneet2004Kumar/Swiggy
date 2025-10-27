import React from "react";
import "./Restaurants.css";

const restaurants = [
  {
    name: "Burger King",
    img: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg",
    rating: "4.3",
    time: "30 mins",
    cuisine: "Burgers, Fast Food",
  },
  {
    name: "Domino’s Pizza",
    img: "https://images.pexels.com/photos/6267/menu-restaurant-vintage-table.jpg",
    rating: "4.5",
    time: "25 mins",
    cuisine: "Pizza, Italian",
  },
  {
    name: "KFC",
    img: "https://images.pexels.com/photos/3026803/pexels-photo-3026803.jpeg",
    rating: "4.2",
    time: "35 mins",
    cuisine: "Chicken, Rolls",
  },
  {
    name: "Haldiram’s",
    img: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg",
    rating: "4.4",
    time: "28 mins",
    cuisine: "Indian, Snacks",
  },
  {
    name: "Biryani Blues",
    img: "https://images.pexels.com/photos/6267/menu-restaurant-vintage-table.jpg",
    rating: "4.6",
    time: "32 mins",
    cuisine: "Biryani, Mughlai",
  },
  {
    name: "Naturals Ice Cream",
    img: "https://images.pexels.com/photos/3026803/pexels-photo-3026803.jpeg",
    rating: "4.8",
    time: "20 mins",
    cuisine: "Desserts, Ice Cream",
  },
  {
    name: "Burger King",
    img: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg",
    rating: "4.3",
    time: "30 mins",
    cuisine: "Burgers, Fast Food",
  },
  {
    name: "Domino’s Pizza",
    img: "https://images.pexels.com/photos/6267/menu-restaurant-vintage-table.jpg",
    rating: "4.5",
    time: "25 mins",
    cuisine: "Pizza, Italian",
  },
  {
    name: "KFC",
    img: "https://images.pexels.com/photos/3026803/pexels-photo-3026803.jpeg",
    rating: "4.2",
    time: "35 mins",
    cuisine: "Chicken, Rolls",
  },
  
];

const Restaurants = () => {
  return (
    <section className="restaurants">
      <h2>Top Restaurants Near You</h2>
      <div className="restaurant-list">
        {restaurants.map((r, i) => (
          <div className="restaurant-card" key={i}>
            <img src={r.img} alt={r.name} />
            <div className="restaurant-info">
              <h3>{r.name}</h3>
              <p className="cuisine">{r.cuisine}</p>
              <div className="details">
                <span className="rating">⭐ {r.rating}</span>
                <span>•</span>
                <span>{r.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Restaurants;
