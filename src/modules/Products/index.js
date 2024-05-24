import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Products from "../../components/ProductCard";
import ProductCard from "../../components/ProductCard";
import Categories from "../../components/Categories";
import Sidebar from "../../components/Sidebar/sidebar";

const ProductsPage = () => {

    const [products, setProducts] = useState([]);
    const [query, setQuery] = useState("");
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedPrice, setSelectedPrice] = useState("");
    const location = useLocation();

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch('https://fakestoreapi.com/products')
            const data = await response.json();
            setProducts(data);
            setFilteredProducts(data);
        }
        fetchProducts();
    }, [])

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const category = params.get('category');
        setSelectedCategory(category);
        filterProducts(query, category, selectedPrice);
    }, [location.search, products]);

    const handleSearch = (e) => {
        const value = e.target.value.toLowerCase();
        setQuery(value);
        filterProducts(value, selectedCategory, selectedPrice);
      };
    
    const handleCategoryClick = (category) => {
        const newCategory = selectedCategory === category ? "" : category;
        setSelectedCategory(newCategory);
        filterProducts(query, newCategory, selectedPrice);
    };
      
    const handleChange = (e) => {
        const value = e.target.value;
        setSelectedPrice(value);
        filterProducts(query, selectedCategory, value);
    };
    
    const filterProducts = (query, category, price) => {
        let filtered = products.filter((product) =>
          product.title.toLowerCase().includes(query)
        );
        
        if (category) {
              filtered = filtered.filter((product) => product.category === category);
        }
        
        if (price) {
              filtered = filtered.filter((product) => {
                const productPrice = product.price;
                switch (price) {
                  case "0-50":
                    return productPrice >= 0 && productPrice <= 50;
                  case "51-100":
                    return productPrice > 50 && productPrice <= 100;
                  case "101-200":
                    return productPrice > 100 && productPrice <= 200;
                  case "201+":
                    return productPrice > 200;
                  default:
                    return true;
                }
              });
            }
    
        setFilteredProducts(filtered);
    };

    return (
        <div className="flex">
            <Sidebar handleChange={handleChange} handleSearch={handleSearch} />
            <div className="ml-56 w">
                <Categories selectedCategory={selectedCategory} handleCategoryClick={handleCategoryClick} />
                <div className="flex flex-col text-center w-full mt-20">
                    <h2 className="text-xs text-purple-500 tracking-widest font-medium title-font mb-1">PRODUKTE</h2>
                    <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 capitalize">{selectedCategory ? selectedCategory : "Alle Produkte"}</h1>
                </div>
                {filteredProducts.length > 0 ? (
                    <ProductCard products={filteredProducts} />
                    ) : (
                    <div>Keine Treffer gefunden...</div>
                )}
                <Products />
            </div>
        </div>
    )
}
export default ProductsPage ;