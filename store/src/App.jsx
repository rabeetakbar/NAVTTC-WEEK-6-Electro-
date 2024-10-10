import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HotDeals from './components/HotDeals';
import Categories from './components/Categories';
import AboutUsPage from './components/Aboutus';
import ContactUs from './components/Contactus';
import CartPage from './components/CartPage';  
import SignUp from './components/Signup';
import SignIn from './components/Signin';
import Checkout from './components/checkout'; 
import LogoutButton from './components/Logout';
import ProductList from './components/ProductList';  // The new dynamic product list component

function App() {
  const [cartItems, setCartItems] = useState([]);

  // Add product to cart
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(item => item.id === product.id);

      if (existingItem) {
        return prevItems.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  // Remove product from cart
  const removeFromCart = (index) => {
    const newCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(newCartItems);
  };

  // Update product quantity in cart
  const updateQuantity = (product, newQuantity) => {
    if (newQuantity <= 0) return;
    setCartItems((prevItems) => 
      prevItems.map(item => 
        item.id === product.id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  return (
    <Router>
      <div>
        <Navbar cartItems={cartItems} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hot-deals" element={<HotDeals />} />
          <Route path="/categories" element={<Categories />} />

          {/* Dynamic routes for product categories */}
          <Route 
            path="/products/:category" 
            element={<ProductList addToCart={addToCart} />} 
          />

          <Route path="/aboutus" element={<AboutUsPage />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/checkout" element={<Checkout />} />

          <Route 
            path="/cart" 
            element={
              <CartPage 
                cartItems={cartItems} 
                removeFromCart={removeFromCart} 
                updateQuantity={updateQuantity}
              />
            } 
          />  
          <Route path="/signup" element={<SignUp />} />  
          <Route path="/signin" element={<SignIn />} />  
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;











