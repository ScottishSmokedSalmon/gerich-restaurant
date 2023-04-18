import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutLineRestaurantMenu } from 'react-icons/md';

import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => (
  <nav className="app__navbar">
    <div className="app__navbar-logo">
      <img src={images.gericht} alt="app logo" />  
    </div>
    <ul className="app__navbar-links">
      <li className="p__opensas"><a href="home">/Home</a></li>
      <li className="p__opensas"><a href="about">/About</a></li>
      <li className="p__opensas"><a href="menu">/Menu</a></li>
      <li className="p__opensas"><a href="awards">/Awards</a></li>
      <li className="p__opensas"><a href="contact">/Contact</a></li>
    </ul>
  </nav>
);

export default Navbar;
