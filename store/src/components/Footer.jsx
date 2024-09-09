import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import images from './images';
import { Link } from 'react-router-dom'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section about-us">
          <h4>About Us</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.</p>
          <ul className="contact-info">
            <li><FontAwesomeIcon icon={faMapMarkerAlt} /><a href="#" className="hover-underline hover:text-red-600"> 1734 Stonecoal Road</a> </li>
            <li><FontAwesomeIcon icon={faPhone} /><a href="#" className="hover-underline hover:text-red-600"> +021-95-51-84</a> </li>
            <li><FontAwesomeIcon icon={faEnvelope} /><a href="#" className="hover-underline hover:text-red-600"> email@email.com</a> </li>
          </ul>
        </div>
        <div className="footer-section categories">
          <h4>Categories</h4>
          <ul>
            <li><a href="#" className="hover-underline hover:text-red-600">Hot Deals</a></li>
            <li><a href="#" className="hover-underline hover:text-red-600">Laptops</a></li>
            <li><a href="#" className="hover-underline hover:text-red-600">SmartPhones</a></li>
            <li><a href="#" className="hover-underline hover:text-red-600">Cameras</a></li>
            <li><a href="#" className="hover-underline hover:text-red-600">Accessories</a></li>
          </ul>
        </div>
        <div className="footer-section information">
          <h4>Information</h4>
          <ul>
            <li><Link to="/aboutus" className="hover-underline hover:text-red-600">About Us</Link></li>
            <li><Link to="/contactus" className="hover-underline hover:text-red-600">Contact Us</Link></li>
            <li><a href="#" className="hover-underline hover:text-red-600">Privacy Policy</a></li>
            <li><a href="#" className="hover-underline hover:text-red-600">Orders and Returns</a></li>
            <li><a href="#" className="hover-underline hover:text-red-600">Terms & Conditions</a></li>
          </ul>
        </div>
        <div className="footer-section service">
          <h4>Service</h4>
          <ul>
          <li><Link to="/signup" className="hover-underline hover:text-red-600">My Account</Link></li>
          <li><Link to="/cart" className="hover-underline hover:text-red-600">View cart</Link></li>
            <li><a href="#" className="hover-underline hover:text-red-600">Wish List</a></li>
            <li><a href="#" className="hover-underline hover:text-red-600">Track My Order</a></li>
            <li><a href="#" className="hover-underline hover:text-red-600">Help</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 All rights reserved | This template is made by Meee :) </p>
        <div className="payment-icons  items-center space-x-4">
          <img src={images.visa} alt="Visa" className="h-10" />
          <img src={images.paypal} alt="PayPal" className="h-10" />
          <img src={images.stripe} alt="Stripe" className="h-10" />
          <img src={images.payment} alt="Amazon Pay" className="h-10" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
