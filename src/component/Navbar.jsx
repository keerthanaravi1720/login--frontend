import React, { useState } from 'react';
import './Nav.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div className="menu-toggle" onClick={handleMenuToggle}>
        <i className="fas fa-bars"></i>
      </div>
      <ul className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <li>
          <a href="/">Home</a>
        </li>
        {/* <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li> */}
        <li>
          <a href="/login">Login</a>
        </li>

      </ul>


    </nav>
  );
};

export default Navbar;

