import React from 'react';
import '../stylesheet/Header.css';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import logo from '../images/favicon.jpg';
import Slogin from './Slogin';
import Comlogin from './Comlogin';
import Collogin from './Collogin';


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
        <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" className='loginbutton'>
    Login
  </button>
  <ul class="dropdown-menu">
    <li><Link to='/Slogin' class="dropdown-item">Student</Link></li>
    <li><Link to='/Comlogin' class="dropdown-item">Company</Link></li>
    <li><Link to='/Collogin' class="dropdown-item">College</Link></li>
  </ul>
</div>
      </nav>
    </header>
  );
}

export default Header;
