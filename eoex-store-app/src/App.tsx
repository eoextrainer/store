import React from 'react';

import './App.css';
import './styles/theme.css';

import Header from './components/Header';
import HeroSection from './components/HeroSection';
import SubNav from './components/SubNav';
import FilterBar from './components/FilterBar';
import ContentGrid from './components/ContentGrid';
import Footer from './components/Footer';


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
