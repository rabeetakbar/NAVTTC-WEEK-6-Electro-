import React from 'react';
import ProductCard from './ProductCard';
import images from './images'; // Ensure this maps imageKey to image paths

const LaptopPage = () => {
  const laptops = [
    {
      id: 1,
      imageKey: "laptop",
      category: "Laptops",
      productName: "Laptop 1",
      price: 850.00,
      oldPrice: 950.00,
      rating: 4,
    },
    {
      id: 2,
      imageKey: "laptop2",
      category: "Laptops",
      productName: "Laptop 2",
      price: 1200.00,
      oldPrice: 1300.00,
      rating: 5,
    },
    {
      id: 3,
      imageKey: "laptop3",
      category: "Laptops",
      productName: "Laptop 3",
      price: 600.00,
      oldPrice: 750.00,
      rating: 3,
    },
    {
      id: 4,
      imageKey: "laptop2",
      category: "Laptops",
      productName: "Laptop 4",
      price: 1000.00,
      oldPrice: 1100.00,
      rating: 4,
    },
    {
      id: 5,
      imageKey: "laptop",
      category: "Laptops",
      productName: "Laptop 5",
      price: 1300.00,
      oldPrice: 1400.00,
      rating: 5,
    },
    {
      id: 6,
      imageKey: "laptop3",
      category: "Laptops",
      productName: "Laptop 6",
      price: 780.00,
      oldPrice: 880.00,
      rating: 4,
    },
    {
      id: 7,
      imageKey: "laptop",
      category: "Laptops",
      productName: "Laptop 7",
      price: 920.00,
      oldPrice: 1020.00,
      rating: 4,
    },
    {
      id: 8,
      imageKey: "laptop2",
      category: "Laptops",
      productName: "Laptop 8",
      price: 1500.00,
      oldPrice: 1600.00,
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Our Laptop's Collection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {laptops.map(laptop => (
          <ProductCard
            key={laptop.id}
            imageKey={laptop.imageKey}
            category={laptop.category}
            productName={laptop.productName}
            price={laptop.price}
            oldPrice={laptop.oldPrice}
            rating={laptop.rating}
          />
        ))}
      </div>
    </div>
  );
};

export default LaptopPage;
