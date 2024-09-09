import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HotDeals from './components/HotDeals';
import Categories from './components/Categories';
import Laptops from './components/Laptops';
import SmartPhones from './components/Smartphones';
import Cameras from './components/Cameras';
import Accessories from './components/Accessories';
import AboutUsPage from './components/Aboutus';
import ContactUs from './components/Contactus';
import CartPage from './components/CartPage';  
import SignUp from './components/Signup';
import SignIn from './components/Signin';
import Checkout from './components/checkout';
function App() {
  const [cartItems, setCartItems] = useState([]);

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

  const removeFromCart = (index) => {
    const newCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(newCartItems);
  };

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
          <Route path="/laptops" element={<Laptops addToCart={addToCart} />} />  
          <Route path="/smartphones" element={<SmartPhones addToCart={addToCart} />} />  
          <Route path="/cameras" element={<Cameras addToCart={addToCart} />} />  
          <Route path="/accessories" element={<Accessories addToCart={addToCart} />} /> 
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
