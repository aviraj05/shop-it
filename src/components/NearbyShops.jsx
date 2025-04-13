import React from 'react';
import './NearbyShops.css';
import shopPic1 from '../assets/shop-pic1.jpeg';
import shopPic2 from '../assets/shop-pic2.avif';
import shopPic3 from '../assets/shop-pic3.webp';
import Dmart from '../assets/dmart.jpg';    // Example image for DMart
import medical_store from '../assets/medical_store.jpg'; // Example image for Medical Store

const NearbyShops = () => {
    const shops = [
        {
            name: 'FreshMart',
            address: '123 Market Street, Pune',
            distance: '2 km away',
            promo: 'Flat 20% OFF',
            closingTime: 'Closes in 2 hours',
            img: shopPic2,
        },
        {
            name: 'Green Grocery',
            address: '456 Green Avenue, Pune',
            distance: '1.5 km away',
            promo: 'Flat 15% OFF',
            closingTime: 'Closes in 1 hour',
            img: shopPic1,
        },
        {
            name: 'DailyMart',
            address: '789 Daily Lane, Pune',
            distance: '3 km away',
            promo: 'Flat 25% OFF',
            closingTime: 'Closes in 3 hours',
            img: shopPic3,
        },
        {
            name: 'DMart',
            address: '123 Market Street, Pune',
            distance: '2.8 km away',
            promo: 'Flat 30% OFF',
            closingTime: 'Closes in 4 hours',
            img: Dmart,
        },
        {
            name: 'General Store',
            address: '123 Market Street, Pune',
            distance: '2.8 km away',
            promo: 'Flat 30% OFF',
            closingTime: 'Closes in 4 hours',
            img: shopPic3,
        },
        {
            name: 'Medical store',
            address: '123 Market Street, Pune',
            distance: '4 km away',
            promo: 'Flat 10% OFF',
            closingTime: '24/7 Open',
            img: medical_store,
        },
    ];

    return (
        <div className="nearby-shops">
            <h2>Shops Near You</h2>
            <div className="shop-list">
                {shops.map((shop, index) => (
                    <div key={index} className="shop-card">
                        <img src={shop.img} alt={`${shop.name}`} className="shop-image" />
                        <div className="shop-info">
                            <h3 className="shop-name">{shop.name}</h3>
                            <p>{shop.address}</p>
                            <p>{shop.distance}</p>
                            <p className="promo">{shop.promo}</p>
                            <p className="closing-time">{shop.closingTime}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NearbyShops;