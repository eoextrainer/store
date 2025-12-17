import React from 'react';
import './FilterBar.css';

const filters = [
  { label: 'Genre', icon: 'category' },
  { label: 'Rating', icon: 'star' },
  { label: 'Price', icon: 'attach_money' },
  { label: 'Device', icon: 'devices' },
  { label: 'New & updated', icon: 'new_releases' },
];

const FilterBar = () => (
  <div className="eoex-filterbar">
    {filters.map(f => (
      <button key={f.label} className="eoex-filterbar__btn">
        <span className="material-symbols-rounded eoex-filterbar__icon">{f.icon}</span>
        {f.label}
      </button>
    ))}
    <button className="eoex-filterbar__btn eoex-filterbar__tune" aria-label="Advanced filters">
      <span className="material-symbols-rounded">tune</span>
    </button>
  </div>
);

export default FilterBar;
