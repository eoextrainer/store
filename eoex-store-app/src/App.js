import React from 'react';



import Header from './Header.js';
import SubNav from './SubNav.js';
import HeroSection from './HeroSection.js';
import FilterBar from './FilterBar.js';
import Footer from './Footer.js';
import './App.css';
import ContentGrid from './ContentGrid.js';




function App() {
  return (
    <div className="eoex-app">
      <Header />
      <SubNav />
      <HeroSection />
      <FilterBar />
      <ContentGrid />
      <Footer />
    </div>
  );
}

export default App;
