import React from 'react';
import './Header.css';

const Header = () => (
  <header className="eoex-header">
    <div className="eoex-header__left">
      <span className="eoex-logo">EOEX <span className="eoex-logo-green">Store</span></span>
    </div>
    <div className="eoex-header__center">
      <div className="eoex-search-bar">
        <span className="material-symbols-rounded eoex-search-icon">search</span>
        <select className="eoex-search-scope">
          <option>All</option>
          <option>Games</option>
          <option>Apps</option>
        </select>
        <input className="eoex-search-input" placeholder="Search games, apps..." />
        <span className="eoex-search-shortcut">/</span>
      </div>
    </div>
    <div className="eoex-header__right">
      <button className="eoex-header-action" aria-label="Wishlist">
        <span className="material-symbols-rounded">favorite</span>
      </button>
      <button className="eoex-header-action" aria-label="Install/manage">
        <span className="material-symbols-rounded">download</span>
      </button>
      <button className="eoex-header-avatar" aria-label="Sign in">
        <span className="material-symbols-rounded">account_circle</span>
      </button>
    </div>
  </header>
);

export default Header;
