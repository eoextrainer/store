import React from 'react';
import './HeroSection.css';

const HeroSection = () => (
  <section className="eoex-hero">
    <div className="eoex-hero__left">
      <h1 className="eoex-hero__headline">Play more. Discover more.</h1>
      <p className="eoex-hero__subcopy">Welcome to EOEX Store — your destination for games and apps, inspired by Google Play’s best design patterns.</p>
    </div>
    <div className="eoex-hero__right">
      {/* Carousel placeholder */}
      <div className="eoex-hero__carousel">
        <div className="eoex-hero__tile eoex-hero__tile--active">
          <img src="https://play-lh.googleusercontent.com/1" alt="Featured 1" className="eoex-hero__img" />
          <span className="eoex-hero__badge">Editor's Choice</span>
        </div>
        <div className="eoex-hero__tile">
          <img src="https://play-lh.googleusercontent.com/2" alt="Featured 2" className="eoex-hero__img" />
        </div>
        <div className="eoex-hero__tile">
          <img src="https://play-lh.googleusercontent.com/3" alt="Featured 3" className="eoex-hero__img" />
        </div>
        {/* Carousel controls would go here */}
      </div>
    </div>
  </section>
);

export default HeroSection;
