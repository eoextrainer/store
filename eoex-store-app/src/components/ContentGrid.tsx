import React from 'react';
import './ContentGrid.css';

const cards = [
  {
    title: 'Super Fun Game',
    developer: 'FunDev',
    rating: 4.8,
    reviews: 1200,
    tags: ['Action', 'Multiplayer'],
    img: 'https://play-lh.googleusercontent.com/1',
  },
  {
    title: 'Puzzle Master',
    developer: 'PuzzleWorks',
    rating: 4.6,
    reviews: 800,
    tags: ['Puzzle', 'Offline'],
    img: 'https://play-lh.googleusercontent.com/2',
  },
  {
    title: 'Adventure Quest',
    developer: 'Questers',
    rating: 4.7,
    reviews: 950,
    tags: ['Adventure', 'Free'],
    img: 'https://play-lh.googleusercontent.com/3',
  },
  {
    title: 'Family Fun',
    developer: 'FamilySoft',
    rating: 4.5,
    reviews: 500,
    tags: ['Family', 'Casual'],
    img: 'https://play-lh.googleusercontent.com/4',
  },
  {
    title: 'Indie Gem',
    developer: 'IndieDev',
    rating: 4.9,
    reviews: 300,
    tags: ['Indie', 'Premium'],
    img: 'https://play-lh.googleusercontent.com/5',
  },
];

const ContentGrid = () => (
  <section className="eoex-contentgrid">
    {cards.map((card, idx) => (
      <div className="eoex-card" key={idx} tabIndex={0}>
        <img src={card.img} alt={card.title} className="eoex-card__img" />
        <div className="eoex-card__body">
          <h3 className="eoex-card__title">{card.title}</h3>
          <div className="eoex-card__meta">{card.developer}</div>
          <div className="eoex-card__rating">
            <span className="material-symbols-rounded eoex-card__star">star</span>
            {card.rating} <span className="eoex-card__reviews">({card.reviews})</span>
          </div>
          <div className="eoex-card__tags">
            {card.tags.map(tag => (
              <span className="eoex-card__tag" key={tag}>{tag}</span>
            ))}
          </div>
          <button className="eoex-card__install">Install</button>
        </div>
        <button className="eoex-card__overflow" aria-label="More actions">
          <span className="material-symbols-rounded">more_vert</span>
        </button>
      </div>
    ))}
  </section>
);

export default ContentGrid;
