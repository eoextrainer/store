import React from 'react';
import './App.css';

const Header = () => (
  <header className="eoex-header">
    <div className="eoex-header-left">
      <span className="eoex-logo">EOEX <span className="eoex-logo-green">Store</span></span>
    </div>
    <div className="eoex-header-center">
      <div className="eoex-search-bar">
        <span className="material-symbols-rounded eoex-search-icon">search</span>
        <select className="eoex-search-scope" aria-label="Category scope">
          <option>All</option>
          <option>Games</option>
          <option>Apps</option>
        </select>
        <input className="eoex-search-input" type="text" placeholder="Search apps & games" aria-label="Search" />
      </div>
    </div>
    <div className="eoex-header-right">
      <button className="eoex-header-action" aria-label="Wishlist"><span className="material-symbols-rounded">favorite</span></button>
      <button className="eoex-header-action" aria-label="Install/manage"><span className="material-symbols-rounded">download</span></button>
      <button className="eoex-header-avatar" aria-label="Sign in"><span className="material-symbols-rounded">account_circle</span></button>
    </div>
  </header>
);

export default Header;
