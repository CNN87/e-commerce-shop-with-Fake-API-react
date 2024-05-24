import React, { useEffect, useState } from "react";
import FeatureCard from '../FeartureCard';
import "./categories.css";

const Categories = ({ selectedCategory, handleCategoryClick }) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            const response = await fetch('https://fakestoreapi.com/products/categories')
            const data = await response.json();
            // console.log(data);
            setCategories(data);
        }
        fetchCategories();
    }, [])

    if(categories.length === 0) return <div>Wird Geladen...</div>

    return (
            // <FeatureCard cards={categories} />
            <div className="categories-container mt-24">
                {categories.map(category => (
                    <button
                    key={category}
                    onClick={() => handleCategoryClick(category)}
                    className={`category-button ${selectedCategory === category ? 'selected' : ''} capitalize`}
                    >
                    {category}
                    </button>
                ))}
            </div>
    )
}
export default Categories;