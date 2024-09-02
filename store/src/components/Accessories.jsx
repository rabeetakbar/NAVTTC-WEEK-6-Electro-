import React from 'react';
import ProductCard from './ProductCard';
import Images from './images'; // Assuming images is an object mapping imageKey to image paths

const Accessories = () => {
  const accessories = [
    {
      id: 1,
      imageKey: "hp",
      category: "Accessories",
      productName: "Accessory 1",
      price: 50.00,
      oldPrice: 60.00,
      rating: 4,
    },
    {
      id: 2,
      imageKey: "headphone2",
      category: "Accessories",
      productName: "Accessory 2",
      price: 30.00,
      oldPrice: 40.00,
      rating: 3,
    },
    {
      id: 3,
      imageKey: "headphone2",
      category: "Accessories",
      productName: "Accessory 3",
      price: 70.00,
      oldPrice: 80.00,
      rating: 5,
    },
    {
      id: 4,
      imageKey: "hp",
      category: "Accessories",
      productName: "Accessory 4",
      price: 90.00,
      oldPrice: 100.00,
      rating: 4,
    },
    {
      id: 5,
      imageKey: "hp",
      category: "Accessories",
      productName: "Accessory 5",
      price: 20.00,
      oldPrice: 25.00,
      rating: 3,
    },
    {
      id: 6,
      imageKey: "headphone2",
      category: "Accessories",
      productName: "Accessory 6",
      price: 40.00,
      oldPrice: 50.00,
      rating: 4,
    },
    {
      id: 7,
      imageKey: "hp",
      category: "Accessories",
      productName: "Accessory 7",
      price: 25.00,
      oldPrice: 35.00,
      rating: 3,
    },
    {
      id: 8,
      imageKey: "headphone2",
      category: "Accessories",
      productName: "Accessory 8",
      price: 60.00,
      oldPrice: 70.00,
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Complete Your Setup: Shop Accessories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {accessories.map(accessory => (
          <div
            key={accessory.id}
            className="bg-white text-black p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <ProductCard
              imageKey={accessory.imageKey}
              category={accessory.category}
              productName={accessory.productName}
              price={accessory.price}
              oldPrice={accessory.oldPrice}
              rating={accessory.rating}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accessories;
