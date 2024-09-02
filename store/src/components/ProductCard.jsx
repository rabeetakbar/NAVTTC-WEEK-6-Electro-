// ProductCard.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faRetweet, faEye } from '@fortawesome/free-solid-svg-icons';
import Images from './images'; // Import the Images object

const ProductCard = ({ imageKey, category, productName, price, oldPrice, rating }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`border rounded-lg p-4 shadow-sm max-w-xs transition-transform transform hover:scale-105 ${isHovered ? 'border-red-500' : 'border-gray-200'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <img
          src={Images[imageKey]}  // Use the image from the Images object
          alt={productName}
          className="w-full h-48 object-contain mb-4"
        />
      </div>
      <div className="text-center">
        <p className="text-sm text-gray-400">{category}</p>
        <h2 className="text-lg font-semibold">{productName}</h2>
        <div className="mt-2">
          <span className="text-red-600 text-xl font-bold">{`$${price}`}</span>
          {oldPrice && (
            <span className="text-gray-400 line-through ml-2">{`$${oldPrice}`}</span>
          )}
        </div>
        <div className="flex justify-center mt-2">
          {[...Array(rating)].map((_, i) => (
            <span key={i} className="text-red-500">★</span>
          ))}
        </div>
        <div className="flex justify-around mt-4">
          <FontAwesomeIcon icon={faHeart} className="text-gray-500 cursor-pointer" />
          <FontAwesomeIcon icon={faRetweet} className="text-gray-500 cursor-pointer" />
          <FontAwesomeIcon icon={faEye} className="text-gray-500 cursor-pointer" />
        </div>
      </div>

      {isHovered && (
        <div className="bg-black text-white text-center py-2 mt-4 transition-opacity duration-300 ease-in-out">
          <button className="bg-red-500 px-4 py-2">Add to Cart</button>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
