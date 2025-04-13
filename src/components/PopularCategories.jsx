import React from 'react';
import './PopularCategories.css';
import Vegetable_image from '../assets/veggies_image.avif';
import Bakery_image from '../assets/Bakery_image.avif';
import Dairy_image from '../assets/D&E_image.avif';
import fruit_image from '../assets/fruit_image_new.png';

const PopularCategories = () => {
    const categories = [
        { name: 'Vegetables', img: Vegetable_image },
        { name: 'Fruits', img: fruit_image },
        { name: 'Dairy & Eggs', img: Dairy_image},
        { name: 'Bread', img: Bakery_image },
    ];

    return (
        <div className="popular-categories">
            <h2>Most Popular Categories</h2>
            <div className="category-list">
                {categories.map((category, index) => (
                    <div key={index} className="category-card">
                        <img src={category.img} alt={category.name} className="category-image" />
                        <h3 className="category-name">{category.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PopularCategories;