import React from 'react';
import '../stylesheet/Header.css';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import logo from '../images/favicon.jpg';
import Resource from './Resource';

function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo"><img src={logo}></img><Link to='/'>CareerConnect</Link></div>
        <ul className="nav-links">
          <li><Link to='/'>Home</Link></li>
          <li><HashLink to="/#features">Features</HashLink></li>
          <li><Link to='/about'>About Us</Link></li>
          <li><Link to='/Resource'>Resources</Link></li>
        </ul>
        <div className="auth-buttons">
          <a href="#" className="btn btn-signup">Sign Up</a>
          
          <a href="#" className="btn btn-signin">Sign In</a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
