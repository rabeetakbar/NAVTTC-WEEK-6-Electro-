import React from 'react';
import laptop from '../assets/laptop.png';
import mobile from '../assets/mobile.png';
import cam from '../assets/cam.png';

const TopSelling = () => {
  // Sample data for top-selling products
  const products = [
    {
      id: 1,
      imageUrl: laptop, // No need for brackets here
      category: 'CATEGORY',
      productName: 'PRODUCT NAME GOES HERE',
      price: 980.00,
      oldPrice: 990.00,
    },
    {
      id: 2,
      imageUrl: mobile, // No need for brackets here
      category: 'CATEGORY',
      productName: 'PRODUCT NAME GOES HERE',
      price: 980.00,
      oldPrice: 990.00,
    },
    {
      id: 3,
      imageUrl: cam, // No need for brackets here
      category: 'CATEGORY',
      productName: 'PRODUCT NAME GOES HERE',
      price: 980.00,
      oldPrice: 990.00,
    },
  ];

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">TOP SELLING</h2>
      <div>
        {products.map((product) => (
          <div 
            key={product.id} 
            className="flex items-center mb-6 hover:bg-gray-100 p-4 rounded-lg"
          >
            {/* Product Image */}
            <div className="w-24 h-24 flex-shrink-0">
              <img
                src={product.imageUrl}
                alt={product.productName}
                className="w-full h-full object-contain"
              />
            </div>
            {/* Product Details */}
            <div className="ml-4">
              <p className="text-sm text-gray-400">{product.category}</p>
              <button className="text-lg font-semibold hover:text-red-600 transition duration-300">
                {product.productName}
              </button>
              <div className="mt-2">
                <span className="text-red-600 text-xl font-bold">{`$${product.price.toFixed(2)}`}</span>
                {product.oldPrice && (
                  <span className="text-gray-400 line-through ml-2">{`$${product.oldPrice.toFixed(2)}`}</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopSelling;
