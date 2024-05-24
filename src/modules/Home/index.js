// src/modules/Home/index.js
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Hero from "../../components/Hero";
import Products from "../../components/ProductCard";
import ProductCard from "../../components/ProductCard";
import Categories from "../../components/Categories";
import StatCard from "../../components/StatCard";

import "./home.css";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products?limit=8')
      const data = await response.json()
      // console.log(data)
      setProducts(data)
    }
    fetchProducts()
  }, [])

  const navigateToProductsPage = (category) => {
    navigate(`/products?category=${category}`);
  };

  return (
    <div className="flex">
      
      <div className="main-content">
        <Hero />
        <Categories selectedCategory={selectedCategory} handleCategoryClick={navigateToProductsPage} />
        <div className="flex flex-col text-center w-full mt-20">
          <h2 className="text-xs text-purple-500 tracking-widest font-medium title-font mb-1">PRODUKTE</h2>
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">angesagte Produkte</h1>
        </div>
        {
          products.length > 0 ? 
          <ProductCard products={products} /> 
          :
          <div>Wird geladen.....</div>
        }
        <Products />
        <StatCard />
      </div>
    </div>
  );
};

export default Home;
