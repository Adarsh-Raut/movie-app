import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <div className="headerLeft">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <img
            className="header__icon"
            src="https://i.pinimg.com/originals/ea/8d/11/ea8d11f1ffc6355b8a440106ce61d0f3.jpg"
            alt="poster"
          />
        </Link>
        <Link to="/movies/popular" style={{ textDecoration: 'none' }}>
          <span>Popular</span>
        </Link>
        <Link to="/movies/top_rated" style={{ textDecoration: 'none' }}>
          <span>Top Rated</span>
        </Link>
        <Link to="/movies/upcoming" style={{ textDecoration: 'none' }}>
          <span>Upcoming</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
