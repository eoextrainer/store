import React from 'react';
import './App.css';


// 5x3 grid, 15 images, in the order specified in EOEX Store Design.txt
const appImages = [
  // Row 1
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv1dqVdAnnoQboletpfBXr0f8WuISentbaGA&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXcq7uY8sL-1Lchx7pns28m44RxgtbF2IrZA&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCNToyl3NGiCln1a_ZfR_KYEZOjq2uOEALkA&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWq2GXMNBfoXjErAJ7gz5JXVMVV1efI5ZTEA&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwtYSTg7onAO8H5Og408CxXcsNrsd85jEaoA&s',
  // Row 2
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfun9D1pOz7Z4MFqZTzezqIsZSkY_3UhQAAw&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn6PhfQoI88H45GmAMwOg-bUN-IPPtVEokwA&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaENOBc2-4F6vc8-SxlIUyOItHSz0_3NxlLQ&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnYLDdujw0NLJWt0iQYlu_HVArT7PklPc4_w&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZdKMUDbQcXSW8mi4vHANgXLsbiJOfLWb1mw&s',
  // Row 3
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnYLDdujw0NLJWt0iQYlu_HVArT7PklPc4_w&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXcq7uY8sL-1Lchx7pns28m44RxgtbF2IrZA&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCNToyl3NGiCln1a_ZfR_KYEZOjq2uOEALkA&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWq2GXMNBfoXjErAJ7gz5JXVMVV1efI5ZTEA&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwtYSTg7onAO8H5Og408CxXcsNrsd85jEaoA&s',
];

const appData = appImages.map((img, i) => ({
  id: i + 1,
  title: `App ${i + 1}`,
  developer: 'EOEX Dev',
  rating: (4.2 + (i % 5) * 0.1).toFixed(1),
  reviews: 1000 + i * 123,
  tags: ['Action', 'Free'],
  image: img,
}));

const ContentGrid: React.FC = () => {
  return (
    <section className="content-grid-section">
      <div className="content-grid">
        {appData.map(app => (
          <div className="app-card" key={app.id} tabIndex={0} aria-label={app.title}>
            <div className="app-card-image-wrapper">
              <img src={app.image} alt={app.title} className="app-card-image" loading="lazy" />
            </div>
            <div className="app-card-content">
              <h3 className="app-card-title">{app.title}</h3>
              <div className="app-card-meta">
                <span className="app-card-developer">{app.developer}</span>
                <span className="app-card-rating">
                  <span className="material-symbols-rounded" aria-hidden="true">star</span>
                  {app.rating}
                  <span className="app-card-reviews">({app.reviews})</span>
                </span>
              </div>
              <div className="app-card-tags">
                {app.tags.map(tag => (
                  <span className="app-card-tag" key={tag}>{tag}</span>
                ))}
              </div>
              <button className="app-card-install-btn" aria-label={`Install ${app.title}`}>Install</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContentGrid;
