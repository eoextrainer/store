import React from 'react';
import './App.css';

const FilterBar = () => (
  <div className="eoex-filter-bar">
    <button className="eoex-filter">Genre</button>
    <button className="eoex-filter">Rating</button>
    <button className="eoex-filter">Price</button>
    <button className="eoex-filter">Device</button>
    <button className="eoex-filter">New & updated</button>
    <button className="eoex-filter-tune" aria-label="Advanced filters"><span className="material-symbols-rounded">tune</span></button>
  </div>
);

export default FilterBar;
