import React from 'react';
import '../Product.css';

const Smartphones = () => {
  const smartphones = [
    {
      id: 1,
      name: 'Smartphone 1',
      price: 25000,
      image: '/images/phone1.jpg',
      description: 'Latest smartphone with 128GB storage and 48MP camera.',
    },
    {
      id: 2,
      name: 'Smartphone 2',
      price: 30000,
      image: '/images/phone2.jpg',
      description: 'Flagship smartphone with 256GB storage and 64MP camera.',
    },
    {
      id: 3,
      name: 'Smartphone 3',
      price: 20000,
      image: '/images/phone3.jpg',
      description: 'Budget smartphone with 64GB storage and 32MP camera.',
    },
    {
      id: 4,
      name: 'Smartphone 4',
      price: 35000,
      image: '/images/phone4.jpg',
      description: '5G smartphone with 128GB storage and 108MP camera.',
    },
    {
      id: 5,
      name: 'Smartphone 5',
      price: 28000,
      image: '/images/phone5.jpg',
      description: 'Mid-range smartphone with 128GB storage and 48MP camera.',
    },
    {
      id: 6,
      name: 'Smartphone 6',
      price: 29000,
      image: '/images/phone6.jpg',
      description: 'Mid-range smartphone with 128GB storage and 48MP camera.',
    },
    {
      id: 7,
      name: 'Smartphone 7',
      price: 26000,
      image: '/images/phone7.jpg',
      description: 'Mid-range smartphone with 128GB storage and 48MP camera.',
    },
    {
      id: 8,
      name: 'Smartphone 8',
      price: 23000,
      image: '/images/phone8.jpg',
      description: 'Mid-range smartphone with 128GB storage and 48MP camera.',
    },
    
  ];

  return (
    <div className="product-container">
      <h2>Smartphones</h2>
      <div className="product-grid">
        {smartphones.map((smartphone) => (
          <div key={smartphone.id} className="product-card">
            <img src={smartphone.image} alt={smartphone.name} className="product-image" />
            <h3>{smartphone.name}</h3>
            <p className="product-price">
              <sup>₹</sup>
              {smartphone.price.toLocaleString('en-IN')}
            </p>
            <p className="product-description">{smartphone.description}</p>
            <button className="product-button">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Smartphones;