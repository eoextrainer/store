import React from 'react';
import './App.css';

const categories = [
  'Featured',
  'Top charts',
  'Categories',
  'Premium',
  'Family',
  'Indie',
];

const SubNav = () => (
  <nav className="eoex-subnav" aria-label="Primary navigation">
    {categories.map((cat, i) => (
      <button
        key={cat}
        className={`eoex-subnav-tab${i === 0 ? ' active' : ''}`}
        aria-current={i === 0 ? 'page' : undefined}
      >
        {cat}
      </button>
    ))}
  </nav>
);

export default SubNav;
