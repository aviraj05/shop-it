import React from 'react';
import './Header.css';
import searchIcon from '../assets/search-interface-symbol.png'; // Corrected import path

const Header = () => {
    return (
        <header className="header">
            <h1>ShopIt</h1>
            <div className="search-bar">
                <input type="text" placeholder="Search a product e.g. milk" />
                <button>
                    <img src={searchIcon} alt="Search" />
                </button>
            </div>
            <nav>
                <ul className="nav-list">
                    <li>Location</li>
                    <li>Nearby Shops</li>
                    <li>Shopping List</li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;