import React from 'react';
import ProductCard from './ProductCard';
import Images from './images'; // Assuming images is an object mapping imageKey to image paths

const SmartphonePage = () => {
  const smartphones = [
    {
      id: 1,
      imageKey: "smartphone",
      category: "SmartPhones",
      productName: "SmartPhone 1",
      price: 700.00,
      oldPrice: 800.00,
      rating: 4,
    },
    {
      id: 2,
      imageKey: "smartphone",
      category: "SmartPhones",
      productName: "SmartPhone 2",
      price: 950.00,
      oldPrice: 1050.00,
      rating: 5,
    },
    {
      id: 3,
      imageKey: "smartphone",
      category: "SmartPhones",
      productName: "SmartPhone 3",
      price: 850.00,
      oldPrice: 900.00,
      rating: 4,
    },
    {
      id: 4,
      imageKey: "smartphone",
      category: "SmartPhones",
      productName: "SmartPhone 4",
      price: 1200.00,
      oldPrice: 1300.00,
      rating: 5,
    },
    {
      id: 5,
      imageKey: "smartphone",
      category: "SmartPhones",
      productName: "SmartPhone 5",
      price: 500.00,
      oldPrice: 600.00,
      rating: 3,
    },
    {
      id: 6,
      imageKey: "smartphone",
      category: "SmartPhones",
      productName: "SmartPhone 6",
      price: 780.00,
      oldPrice: 850.00,
      rating: 4,
    },
    {
      id: 7,
      imageKey: "smartphone",
      category: "SmartPhones",
      productName: "SmartPhone 7",
      price: 1050.00,
      oldPrice: 1150.00,
      rating: 5,
    },
    {
      id: 8,
      imageKey: "smartphone",
      category: "SmartPhones",
      productName: "SmartPhone 8",
      price: 650.00,
      oldPrice: 750.00,
      rating: 4,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Explore Our Latest Smartphones</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {smartphones.map(smartphone => (
          <div
            key={smartphone.id}
            className="bg-white text-black p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 hover:bg-blue-100"
          >
            <ProductCard
              imageKey={smartphone.imageKey}
              category={smartphone.category}
              productName={smartphone.productName}
              price={smartphone.price}
              oldPrice={smartphone.oldPrice}
              rating={smartphone.rating}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SmartphonePage;
