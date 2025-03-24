import React from 'react';
import '../Product.css';

const Headphones = () => {
  const headphones = [
    {
      id: 1,
      name: 'Headphones 1',
      price: 5000,
      image: '/images/headphone1.jpg',
      description: 'Noise-cancelling headphones with 20-hour battery life.',
    },
    {
      id: 2,
      name: 'Headphones 2',
      price: 7000,
      image: '/images/headphone2.jpg',
      description: 'Wireless headphones with 30-hour battery life.',
    },
    {
      id: 3,
      name: 'Headphones 3',
      price: 4000,
      image: '/images/headphone3.jpg',
      description: 'Over-ear headphones with 25-hour battery life.',
    },
    {
      id: 4,
      name: 'Headphones 4',
      price: 6000,
      image: '/images/headphone4.jpg',
      description: 'In-ear headphones with 15-hour battery life.',
    },
    {
      id: 5,
      name: 'Headphones 5',
      price: 8000,
      image: '/images/headphone5.jpg',
      description: 'Bluetooth headphones with 40-hour battery life.',
    },
    {
      id: 6,
      name: 'Headphones 6',
      price: 6000,
      image: '/images/headphone6.jpg',
      description: 'Bluetooth headphones with 30-hour battery life.',
    },
    {
      id: 7,
      name: 'Headphones 7',
      price: 10000,
      image: '/images/headphone7.jpg',
      description: 'Bluetooth headphones with 20-hour battery life.',
    },
    {
      id: 8,
      name: 'Headphones 8',
      price: 7000,
      image: '/images/headphone8.jpg',
      description: 'Bluetooth headphones with 20-hour battery life.',
    },
  ];

  return (
    <div className="product-container">
      <h2>Headphones</h2>
      <div className="product-grid">
        {headphones.map((headphone) => (
          <div key={headphone.id} className="product-card">
            <img src={headphone.image} alt={headphone.name} className="product-image" />
            <h3>{headphone.name}</h3>
            <p className="product-price">
              <sup>₹</sup>
              {headphone.price.toLocaleString('en-IN')}
            </p>
            <p className="product-description">{headphone.description}</p>
            <button className="product-button">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Headphones;