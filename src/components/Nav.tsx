import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';

import './Nav.scss';

const NavBar = () => {  
  return (
    <div className='container'>
      <nav className='nav-bar'>
        <a href='/'>
          <img className='logo' src={Logo} />
        </a>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link
              to="/products">Products</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar;
