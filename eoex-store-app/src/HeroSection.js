import React from 'react';
import './App.css';

const HeroSection = () => (
  <section className="eoex-hero">
    <div className="eoex-hero-left">
      <h1 className="eoex-hero-title">Play more. Discover more.</h1>
      <p className="eoex-hero-subcopy">Find your next favorite app or game in the EOEX Store.</p>
    </div>
    <div className="eoex-hero-right">
      <div className="eoex-hero-carousel">
        {/* Placeholder for carousel images */}
        <div className="eoex-hero-tile eoex-hero-badge">Editor’s Choice</div>
        <div className="eoex-hero-tile">Hot</div>
        <div className="eoex-hero-tile">New</div>
      </div>
    </div>
  </section>
);

export default HeroSection;
