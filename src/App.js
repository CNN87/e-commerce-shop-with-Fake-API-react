import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './modules/Home';
import Footer from './components/Footer';
// import { Routes, Route } from 'react-router-dom';
import Product from './modules/Product';
import Products from './modules/Products';
import CategoryProducts from './modules/CategoryProducts';
import Cart from './modules/Cart';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductsPage from "./modules/Products";
import ScrollToTopButton from "./components/ScrollToTopButton/scrollToTopButton"; 
import ContactPage from './modules/Contact/contact';
import AboutUsPage from './modules/AboutUs/aboutUs';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/products/:id" element={ <Product /> } />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/categories/:name" element={ <CategoryProducts /> } />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/cart" element={ <Cart /> } />
        <Route path="*" element={ <div>404 ERROR</div> } />
      </Routes>
      <ScrollToTopButton /> 
      
      <Footer/>
    </div>
  );
}

export default App;
