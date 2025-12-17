import React, { useState } from 'react';
import './SubNav.css';

const tabs = [
  'Featured',
  'Top charts',
  'Categories',
  'Premium',
  'Family',
  'Indie',
];

const SubNav = () => {
  const [active, setActive] = useState(0);
  return (
    <nav className="eoex-subnav" aria-label="Primary navigation">
      <ul className="eoex-subnav__list">
        {tabs.map((tab, idx) => (
          <li key={tab}>
            <button
              className={`eoex-subnav__tab${active === idx ? ' active' : ''}`}
              onClick={() => setActive(idx)}
              aria-current={active === idx ? 'page' : undefined}
            >
              {tab}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SubNav;
