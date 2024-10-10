import React from 'react';
import images from './images';
import ProductCard from './ProductCard';
import TopSelling from './TopSelling';
import { Link } from 'react-router-dom';
const Homesec2 = () => {
  return (
    <div className="flex flex-col items-center">
      {/* Hot Deal Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center bg-gray-100 p-8 rounded-lg shadow-md w-full max-w-screen-lg">
        {/* Left Side - Image */}
        <div className="flex-1 mb-8 lg:mb-0 lg:mr-4">
          <img src={images.laptop} alt="Laptop" className="w-full h-auto object-contain" />
        </div>

        {/* Center - Countdown and Message */}
        <div className="flex-1 text-center mb-8 lg:mb-0">
          <div className="flex justify-center space-x-2 sm:space-x-4 text-center text-white">
            <div className="bg-red-500 rounded-full p-2 sm:p-4">
              <span className="block text-lg sm:text-2xl font-bold">02</span>
              <span className="block text-xs sm:text-base">DAYS</span>
            </div>
            <div className="bg-red-500 rounded-full p-2 sm:p-4">
              <span className="block text-lg sm:text-2xl font-bold">10</span>
              <span className="block text-xs sm:text-base">HOURS</span>
            </div>
            <div className="bg-red-500 rounded-full p-2 sm:p-4">
              <span className="block text-lg sm:text-2xl font-bold">34</span>
              <span className="block text-xs sm:text-base">MINS</span>
            </div>
            <div className="bg-red-500 rounded-full p-2 sm:p-4">
              <span className="block text-lg sm:text-2xl font-bold">60</span>
              <span className="block text-xs sm:text-base">SECS</span>
            </div>
          </div>
          <h2 className="text-lg sm:text-2xl font-bold mt-4">HOT DEAL THIS WEEK</h2>
          <p className="text-gray-500 text-xs sm:text-sm">NEW COLLECTION UP TO 50% OFF</p>
          <button className="mt-4 bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-600 transition duration-200">
            SHOP NOW
          </button>
        </div>

        {/* Right Side - Image */}
        <div className="flex-1 lg:ml-4">
          <img src={images.headphone} alt="Headphones" className="w-full h-auto object-contain" />
        </div>
      </div>

      {/* Top Selling Section */}
      <div className="py-10 w-full max-w-screen-lg">
        <div className="flex flex-col md:flex-row justify-between items-center px-5 md:px-20 lg:px-40 py-10">
          <h4 className="font-bold text-xl md:text-2xl">TOP SELLING</h4>
          <div className="flex justify-center space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover-underline hover:text-red-600"><Link to="/products/laptops">Laptops</Link></a>
            <a href="#" className="hover-underline hover:text-red-600"><Link to="/products/smartphones">Smart Phones</Link></a>
            <a href="#" className="hover-underline hover:text-red-600"><Link to="/products/cameras">Cameras</Link></a>
            <a href="#" className="hover-underline hover:text-red-600"><Link to="/products/accessories">Accessories</Link></a>
            </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full">
        <Link to="/products/smartphones">
          <ProductCard
            imageKey="mobile"
            category="SmartPhones"
            productName="Samsung S7 edge"
            price="980.00"
            oldPrice="990.00"
            rating={5}
          /></Link>
         <Link to="/products/laptops">
          <ProductCard
            imageKey="laptop"
            category="Laptop"
            productName="Dell Inspiron 5530"
            price="980.00"
            oldPrice="990.00"
            rating={5}
          /></Link>
         <Link to="/products/cameras">
          <ProductCard
            imageKey="cam"
            category="Camera"
            productName="Sony Pocket Cam"
            price="980.00"
            oldPrice="990.00"
            rating={5}
          /></Link>
         <Link to="/products/laptops">
          <ProductCard
            imageKey="laptop3"
            category="Laptop"
            productName="Hp Folio G3"
            price="980.00"
            oldPrice="990.00"
            rating={5}
          /></Link>
        </div>
      </div>

      {/* Additional Top Selling Products */}
      <div className="flex flex-col lg:flex-row justify-center gap-10 w-full max-w-screen-lg">
      <Link to="/categories">
      <TopSelling /></Link>
      <Link to="/categories">
      <TopSelling /></Link>
      <Link to="/categories">
      <TopSelling /></Link>
      </div>
    </div>
  );
};

export default Homesec2;
