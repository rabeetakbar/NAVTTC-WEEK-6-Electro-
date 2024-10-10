import React from 'react';
import images from './images';
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom'; 

function Homesec1({ addToCart }) { 
  return (
    <div className="flex flex-col items-center">
      {/* First 3 cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full max-w-screen-lg">
        <div className="flex flex-col items-center">
          <img src={images.laptop} alt="Laptop" />
          <div className="bg-red-500 text-white text-center p-4 mt-4 w-full"> <Link to="/products/laptops">
            <h3 className="text-lg md:text-xl font-bold mb-2"> Laptop Collection </h3>
            <button className="text-sm md:text-base">Shop Now --</button>
            </Link></div>
        </div>
        <div className="flex flex-col items-center">
          <img src={images.headphone} alt="Headphone" />
          <div className="bg-red-500 text-white text-center p-4 mt-4 w-full"><Link to="/products/accessories">
            <h3 className="text-lg md:text-xl font-bold mb-2"> Accessories Collection</h3>
            <button className="text-sm md:text-base">Shop Now --</button>
            </Link></div>
        </div>
        <div className="flex flex-col items-center">
          <img src={images.cam} alt="Camera" />
          <div className="bg-red-500 text-white text-center p-4 mt-4 w-full"><Link to="/products/cameras">
            <h3 className="text-lg md:text-xl font-bold mb-2"> Camera Collection</h3>
            <button className="text-sm md:text-base">Shop Now --</button>
            </Link></div>
        </div>
      </div>

      {/* Part 2: New Products */}
      <div className="py-10 w-full max-w-screen-lg">
        <div className="flex flex-col md:flex-row justify-between items-center px-5 md:px-20 lg:px-40 py-10 w-full">
          <h4 className="font-bold text-xl md:text-2xl">NEW PRODUCTS</h4>
          <div className="flex justify-center space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover-underline hover:text-red-600"><Link to="/products/laptops">Laptops</Link></a>
            <a href="#" className="hover-underline hover:text-red-600"><Link to="/products/smartphones">Smart Phones</Link></a>
            <a href="#" className="hover-underline hover:text-red-600"><Link to="/products/cameras">Cameras</Link></a>
            <a href="#" className="hover-underline hover:text-red-600"><Link to="/products/accessories">Accessories</Link></a>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full">
        <Link to="/products/laptops">
          <ProductCard
          
            imageKey="tablet"
            category="Laptop"
            productName="Samsung Galaxy Tab"
            price="980.00"
            oldPrice="990.00"
            rating={5}
            // addToCart={addToCart}   
          /></Link>
         <Link to="/products/accessories">
          <ProductCard
            imageKey="hp"
            category="Accessory"
            productName="Beats Headphones"
            price="980.00"
            oldPrice="990.00"
            rating={5}
            // addToCart={addToCart}   
          /></Link>
         <Link to="/products/laptops">
          <ProductCard
            imageKey="laptop2"
            category="Laptop"
            productName="Hp spectre x6"
            price="980.00"
            oldPrice="990.00"
            rating={5}
            // addToCart={addToCart}   
          /></Link>
         <Link to="/products/accessories">
          <ProductCard
            imageKey="headphone2"
            category="Accessory"
            productName="Headphones"
            price="980.00"
            oldPrice="990.00"
            rating={5}
            // addToCart={addToCart}   
          /></Link>
        </div>
      </div>
    </div>
  );
}

export default Homesec1;
