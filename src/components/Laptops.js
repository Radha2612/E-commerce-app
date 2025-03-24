import React from 'react';
import '../Product.css';

const Laptops = () => {
  const laptops = [
    {
      id: 1,
      name: 'Laptop 1',
      price: 80000,
      image: '/images/laptop1.jpg',
      description: 'High-performance laptop with 16GB RAM and 512GB SSD.',
    },
    {
      id: 2,
      name: 'Laptop 2',
      price: 90000,
      image: '/images/laptop2.jpg',
      description: 'Ultra-slim laptop with 8GB RAM and 256GB SSD.',
    },
    {
      id: 3,
      name: 'Laptop 3',
      price: 70000,
      image: '/images/laptop3.jpg',
      description: 'Gaming laptop with 32GB RAM and 1TB SSD.',
    },
    {
      id: 4,
      name: 'Laptop 4',
      price: 85000,
      image: '/images/laptop4.jpg',
      description: 'Business laptop with 16GB RAM and 512GB SSD.',
    },
    {
      id: 5,
      name: 'Laptop 5',
      price: 75000,
      image: '/images/laptop5.jpg',
      description: 'Convertible laptop with 12GB RAM and 512GB SSD.',
    },
    {
      id: 6,
      name: 'Laptop 6',
      price: 77000,
      image: '/images/laptop6.jpg',
      description: 'Convertible laptop with 12GB RAM and 512GB SSD.',
    },
    {
      id: 7,
      name: 'Laptop 7',
      price: 85000,
      image: '/images/laptop7.jpg',
      description: 'Convertible laptop with 12GB RAM and 512GB SSD.',
    },
    {
      id: 8,
      name: 'Laptop 8',
      price: 78000,
      image: '/images/laptop8.jpg',
      description: 'Convertible laptop with 12GB RAM and 512GB SSD.',
    },
  ];

  return (
    <div className="product-container">
      <h2>Laptops</h2>
      <div className="product-grid">
        {laptops.map((laptop) => (
          <div key={laptop.id} className="product-card">
            <img src={laptop.image} alt={laptop.name} className="product-image" />
            <h3>{laptop.name}</h3>
            <p className="product-price">
              <sup>₹</sup>
              {laptop.price.toLocaleString('en-IN')}
            </p>
            <p className="product-description">{laptop.description}</p>
            <button className="product-button">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Laptops;