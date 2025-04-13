import React from 'react';
import './Header.css';
import searchIcon from '../assets/search-interface-symbol.png';
import loginIcon from '../assets/user_icon.png';
import locationIcon from '../assets/loc_icon_white.png'; // Location pin image
import Drop_down from '../assets/drop-down.png'; // Dropdown arrow image

const Header = () => {
    return (
        <header className="header">
            <h1>ShopIt</h1>
            <nav>
                <div className="search-bar">
                    <input type="text" placeholder="Search a product e.g. milk" />
                    <button>
                        <img src={searchIcon} alt="Search Icon" />
                    </button>
                </div>
                <ul className="nav-list">
                    <li>Shopping List</li>
                    <li>Nearby Shops</li>
                </ul>
                <div className="location-dropdown">
                    <img src={locationIcon} alt="Location Icon" className="location-icon" />
                    <span id='loc_name'>Pune</span>
                    <img src={Drop_down} alt="Dropdown Arrow" className="dropdown-arrow" />
                </div>
                <button className="login-button">
                    <img src={loginIcon} alt="Login Icon" />
                    Log In/Sign Up
                </button>
            </nav>
        </header>
    );
};

export default Header;