import React from 'react';
import './MobileAppPromo.css';
import smartphone from '../assets/smartphone.png'; // Adjust the path as necessary
import google_play from '../assets/google play.png'; // Adjust the path as necessary


const MobileAppPromo = () => {
    return (
        <div className="mobile-app-promo">
            <div className="promo-content">
                <div className="promo-text">
                    <h2 className="main-text">Shop cheap and on the go using our mobile app</h2>
                    <p className="sub-text">Your weekly shopping routine, in just a click</p>
                    <div className="download-buttons">
                        <img src={google_play} alt="Google Play" className="download-button" />
                    </div>
                </div>
                <div className="promo-image">
                    <img src={smartphone} alt="Mobile App" className="smartphone" />
                </div>
            </div>
        </div>
    );
};

export default MobileAppPromo;