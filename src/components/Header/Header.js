import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="text-black" style={{ marginTop: '15rem', textDecoration: 'none', marginLeft: '20rem' }} >
            <nav>
                <div className="nav-details" >
                    <Link to="/home">Home</Link>
                    <Link to="/about">About Us</Link>
                    <Link to="/Service">Service</Link>
                    <Link to="/contact">Contact Us</Link>
                </div>
            </nav>
        </div>
    );
};

export default Header;