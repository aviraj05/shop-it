import React from 'react';
import './Footer.css';
import facebook from '../assets/facebook-app-round-white-icon.png';
import youbtube from '../assets/youtube-app-white-icon.png';
import twitter from '../assets/x-social-media-white-icon.png';
import instagram from '../assets/instagram-white-icon.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                <h1  className="footer-logo">ShopIt</h1>
            </div>
            <div className="footer-columns">
                <div className="footer-column">
                    <h3>Menu</h3>
                    <ul>
                        <li>Deals</li>
                        <li>Food</li>
                        <li>Beverages</li>
                        <li>Household</li>
                        <li>Personal Care</li>
                        <li>My Orders</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Categories</h3>
                    <ul>
                        <li>Vegetables</li>
                        <li>Bakery</li>
                        <li>Medicines</li>
                        <li>Dairy & Eggs</li>
                        <li>Fruits</li>
                        <li>Cleaning Supplies</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Info</h3>
                    <ul>
                        <li>FAQ</li>
                        <li>About Us</li>
                        <li>Customer Support</li>
                        <li>Locations</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Contact</h3>
                    <p>Need Help?</p>
                    <p className="contact-number">123-456-7890</p>
                    <p><a href="#">Customer Support</a></p>
                    <div className="social-icons">
                        <img src={facebook} alt="Facebook" />
                        <img src={instagram} alt="Instagram" />
                        <img src={twitter} alt="Twitter" />
                        <img src={youbtube} alt="YouTube" />
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p><a href="#">Give a Feedback</a> | <a href="#">Terms & Conditions</a> | <a href="#">Payment Methods</a></p>
            </div>
        </footer>
    );
};

export default Footer;