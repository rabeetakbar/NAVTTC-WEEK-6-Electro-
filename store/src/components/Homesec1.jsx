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
          <div className="bg-red-500 text-white text-center p-4 mt-4 w-full"> 
            <h3 className="text-lg md:text-xl font-bold mb-2"> <Link to="/laptops">Laptop Collection</Link> </h3>
            <button className="text-sm md:text-base">Shop Now --</button>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img src={images.headphone} alt="Headphone" />
          <div className="bg-red-500 text-white text-center p-4 mt-4 w-full">
            <h3 className="text-lg md:text-xl font-bold mb-2"> <Link to="/accessories">Accessories Collection</Link></h3>
            <button className="text-sm md:text-base">Shop Now --</button>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img src={images.cam} alt="Camera" />
          <div className="bg-red-500 text-white text-center p-4 mt-4 w-full">
            <h3 className="text-lg md:text-xl font-bold mb-2"> <Link to="/cameras">Camera Collection</Link></h3>
            <button className="text-sm md:text-base">Shop Now --</button>
          </div>
        </div>
      </div>

      {/* Part 2: New Products */}
      <div className="py-10 w-full max-w-screen-lg">
        <div className="flex flex-col md:flex-row justify-between items-center px-5 md:px-20 lg:px-40 py-10 w-full">
          <h4 className="font-bold text-xl md:text-2xl">NEW PRODUCTS</h4>
          <div className="flex justify-center space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover-underline hover:text-red-600"><Link to="/laptops">Laptops</Link></a>
            <a href="#" className="hover-underline hover:text-red-600"><Link to="/smartphones">Smart Phones</Link></a>
            <a href="#" className="hover-underline hover:text-red-600"><Link to="/cameras">Cameras</Link></a>
            <a href="#" className="hover-underline hover:text-red-600"><Link to="/accessories">Accessories</Link></a>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full">
          <ProductCard
            imageKey="tablet"
            category="Category"
            productName="PRODUCT NAME GOES HERE"
            price="980.00"
            oldPrice="990.00"
            rating={5}
            addToCart={addToCart}   
          />
          <ProductCard
            imageKey="hp"
            category="CATEGORY"
            productName="PRODUCT NAME GOES HERE"
            price="980.00"
            oldPrice="990.00"
            rating={5}
            addToCart={addToCart}   
          />
          <ProductCard
            imageKey="laptop2"
            category="CATEGORY"
            productName="PRODUCT NAME GOES HERE"
            price="980.00"
            oldPrice="990.00"
            rating={5}
            addToCart={addToCart}   
          />
          <ProductCard
            imageKey="headphone2"
            category="CATEGORY"
            productName="PRODUCT NAME GOES HERE"
            price="980.00"
            oldPrice="990.00"
            rating={5}
            addToCart={addToCart}   
          />
        </div>
      </div>
    </div>
  );
}

export default Homesec1;
