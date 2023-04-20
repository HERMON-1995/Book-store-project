import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav>
    <h1 className="page-name">Bookstore CMS</h1>
    <ul className="nav-links">
      <li><Link to="/" className="nav-link active-link">BOOKS</Link></li>
      <li><Link to="/categories" className="nav-link ">CATEGORIES</Link></li>
    </ul>
    <button type="button" className="account-btn">
      {/* account */}
    </button>
  </nav>
);
export default NavBar;
