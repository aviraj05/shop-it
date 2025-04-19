import React, { useState } from 'react';
import './StartYourList.css';
import banana from '../assets/banana-2.png';
import milk from '../assets/milk-2.jpeg';
import bread from '../assets/bread.png';
import apple from '../assets/apple.png';

const StartYourList = () => {
    const allItems = [
        { name: 'Banana Bunch - 1 lb', price: '$1.89', store: 'FreshMart', img: banana  },
        { name: 'Whole Milk Gallon', price: '$2.69', store: 'Green Grocery', img: milk },
        { name: 'Apple - 1kg', price: '$3.99', store: 'DailyMart', img: apple },
        { name: '100% Whole Wheat Bread', price: '$4.69', store: 'FreshMart', img: bread },
        { name: 'Greenhouse Cucumber - 1 lb', price: '$0.99', store: 'Green Grocery', img: '/assets/cucumber.jpg' },
        { name: 'Cheddar Cheese Block', price: '$6.99', store: 'DailyMart', img: '/assets/cheese.jpg' },
        { name: 'Fresh Strawberries - 1 lb', price: '$3.49', store: 'FreshMart', img: '/assets/strawberries.jpg' },
        { name: 'Spinach Bag - 1 lb', price: '$2.19', store: 'Green Grocery', img: '/assets/spinach.jpg' },
    ];

    const [visibleItems, setVisibleItems] = useState(4); // Initially display 4 items

    const handleShowMore = () => {
        setVisibleItems((prevVisibleItems) => Math.min(prevVisibleItems + 3, allItems.length)); // Show 3 more items
    };

    return (
        <div className="start-your-list">
            <h2>Start Your List</h2>
            <div className="item-grid">
                {allItems.slice(0, visibleItems).map((item, index) => (
                    <div key={index} className="item-card">
                        <div className="image-container">
                            <img src={item.img} alt={item.name} className="item-image" />
                        </div>
                        <div className="item-info">
                            <h3 className="item-name">{item.name}</h3>
                            <p className="item-price">{item.price}</p>
                            <p className="item-store">Available at <strong>{item.store}</strong></p>
                            <button className="add-button">Add to Cart</button>
                        </div>
                    </div>
                ))}
            </div>
            {visibleItems < allItems.length && (
                <div className="button-container">
                    <button className="show-more-button" onClick={handleShowMore}>
                        Show More
                    </button>
                </div>
            )}
        </div>
    );
};

export default StartYourList;