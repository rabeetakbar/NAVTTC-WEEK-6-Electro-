import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart, faBars, faTimes, faUser } from '@fortawesome/free-solid-svg-icons';
import '../App.css';

const Navbar = ({ cartItems }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <section>
      <div className="Navbarsec1 flex justify-between items-center p-4 bg-black text-white">
        <Link to="/">
          <img src={logo} alt="Logo" className="h-10" />
        </Link>

        <div className="flex-grow flex items-center justify-center max-w-md">
          <select className="font-thin text-black h-10 border rounded-l-md px-2">
            <option value="All Categories">All Categories</option>
            <option value="Category1">Category 1</option>
            <option value="Category2">Category 2</option>
          </select>
          <input
            type="text"
            placeholder="Search Here"
            className="h-10 border-t border-b border-gray-300 px-4 w-full"
          />
          <button className="bg-red-600 text-white h-10 px-4 rounded-r-md">
            Search
          </button>
        </div>

        <div className="flex space-x-4">
          <button className="flex flex-col items-center">
            <FontAwesomeIcon icon={faHeart} />
            <span className="text-xs">Your Wishlist</span>
          </button>

          <Link to="/cart">
            <button className="flex flex-col items-center relative">
              <FontAwesomeIcon icon={faShoppingCart} />
              <span className="text-xs">Your Cart</span>
              
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </Link>

          <Link to="/signup">
            <button className="flex flex-col items-center">
              <FontAwesomeIcon icon={faUser} />
              <span className="text-xs">Your Account</span>
            </button>
          </Link>
        </div>
      </div>

      <hr className="custom-hr" />

      <div className="navbarsec2 p-4 bg-white">
        <button
          onClick={toggleDrawer}
          className="md:hidden text-2xl text-black float-right"
        >
          <FontAwesomeIcon icon={isDrawerOpen ? faTimes : faBars} />
        </button>

        <ul className={`nav-links ${isDrawerOpen ? 'block' : 'hidden'} md:flex`}>
          <li>
            <Link to="/" className="hover-underline hover:text-red-600">
              Home
            </Link>
          </li>
          <li>
            <Link to="/hot-deals" className="hover-underline hover:text-red-600">
              Hot Deals
            </Link>
          </li>
          <li>
            <Link to="/categories" className="hover-underline hover:text-red-600">
              Categories
            </Link>
          </li>
          <li>
            <Link to="/laptops" className="hover-underline hover:text-red-600">
              Laptops
            </Link>
          </li>
          <li>
            <Link to="/smartphones" className="hover-underline hover:text-red-600">
              SmartPhones
            </Link>
          </li>
          <li>
            <Link to="/cameras" className="hover-underline hover:text-red-600">
              Cameras
            </Link>
          </li>
          <li>
            <Link to="/accessories" className="hover-underline hover:text-red-600">
              Accessories
            </Link>
          </li>
        </ul>
      </div>

      <hr className="custom-hr2" />
    </section>
  );
};

export default Navbar;
