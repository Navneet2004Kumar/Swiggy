import React from 'react';
import './offers.css';

const offersData = [
  {
    id: 1,
    title: '50% OFF on Burgers',
    desc: 'Limited time offer',
    img: 'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg',
  },
  {
    id: 2,
    title: 'Combo Meal Deal',
    desc: 'Buy 1 Get 1 Free',
    img: 'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg',
  },
  {
    id: 3,
    title: 'Dessert Special',
    desc: 'Free dessert on orders above ₹500',
    img: 'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg',
  },
  {
    id: 4,
    title: 'Pizza Fiesta',
    desc: 'Up to 40% OFF',
    img: 'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg',
  },
];

const Offers = () => {
  return (
    <section className="offers">
      <h2>Hot Offers 🔥</h2>
      <div className="offer-list">
        {offersData.map(offer => (
          <div key={offer.id} className="offer-card">
            <div className="badge">Offer</div>
            <img src={offer.img} alt={offer.title} />
            <h3>{offer.title}</h3>
            <p>{offer.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Offers;
