import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="/f1-logo.jpg" alt="F1 Logo" />
      </div>
      <nav className="nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/drivers">Drivers</Link></li>
          <li><Link to="/teams">Teams</Link></li>
          <li><Link to="/schedule">Schedule</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
