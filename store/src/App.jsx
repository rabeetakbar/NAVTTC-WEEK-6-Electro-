import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Newsletter from './components/Newsletter';
import HotDeals from './components/HotDeals';
import Categories from './components/Categories';
import Laptops from './components/Laptops';
import SmartPhones from './components/Smartphones';
import Cameras from './components/Cameras';
import Accessories from './components/Accessories';
import AboutUsPage from './components/Aboutus';
import ContactUs from './components/Contactus';
function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hot-deals" element={<HotDeals />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/laptops" element={<Laptops />} />
          <Route path="/smartphones" element={<SmartPhones />} />
          <Route path="/cameras" element={<Cameras />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/aboutus" element={<AboutUsPage />} />
          <Route path="/contactus" element={<ContactUs />} />


        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
