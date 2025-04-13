import React, { useState, useEffect } from 'react';
import './DynamicBanner.css';
import image1 from '../assets/image-1.jpg';
//import image2 from '../assets/image-2.jpg';

const DynamicBanner = () => {
    const images = [
        image1,
        
    ];
    const [currentIndex, setCurrentIndex] = useState(0);

    // Change background image every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // 3000ms = 3 seconds

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, [images.length]);

    return (
        <div
            className="dynamic-banner"
            style={{ backgroundImage: `url(${images[currentIndex]})` }}
        >
            <div className="banner-text">
                <h2>Easy, Fresh & Convenient</h2>
                <h1>Stock Up on Daily Essentials</h1>
                <p>Save Big and shop from local stores.</p>
                <button>Shop Now</button>
            </div>
        </div>
    );
};

export default DynamicBanner;