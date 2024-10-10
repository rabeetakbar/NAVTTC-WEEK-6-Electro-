import React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-800 to-gray-900 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <h4 className="text-3xl font-bold mb-8 text-center">Categories</h4>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 bg-gray-700 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Link to="/hot-deals" className="text-xl font-semibold hover:text-red-500 block text-center">
              Hot Deals
            </Link>
          </div>
          
          <div className="p-6 bg-gray-700 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Link to="/products/laptops" className="text-xl font-semibold hover:text-red-500 block text-center">
              Laptops
            </Link>
          </div>
          
          <div className="p-6 bg-gray-700 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Link to="/products/smartphones" className="text-xl font-semibold hover:text-red-500 block text-center">
              SmartPhones
            </Link>
          </div>
          
          <div className="p-6 bg-gray-700 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Link to="/products/cameras" className="text-xl font-semibold hover:text-red-500 block text-center">
              Cameras
            </Link>
          </div>
          
          <div className="p-6 bg-gray-700 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Link to="/products/accessories" className="text-xl font-semibold hover:text-red-500 block text-center">
              Accessories
            </Link>
          </div>

          <div className="p-6 bg-gray-700 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-xl font-semibold text-center text-gray-300">
              More Coming Soon...
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Categories;
