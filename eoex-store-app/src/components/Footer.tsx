import React from 'react';
import './Footer.css';

const columns = [
  {
    title: 'About',
    links: ['Company', 'Team', 'Careers'],
  },
  {
    title: 'Help',
    links: ['Support', 'Contact', 'FAQ'],
  },
  {
    title: 'Policies',
    links: ['Privacy', 'Terms', 'Cookies'],
  },
  {
    title: 'Developers',
    links: ['API', 'Docs', 'Partners'],
  },
  {
    title: 'Languages',
    links: ['English', 'Español', 'Français'],
  },
];

const Footer = () => (
  <footer className="eoex-footer">
    <div className="eoex-footer__columns">
      {columns.map(col => (
        <div className="eoex-footer__col" key={col.title}>
          <div className="eoex-footer__col-title">{col.title}</div>
          {col.links.map(link => (
            <a href="#" className="eoex-footer__link" key={link}>{link}</a>
          ))}
        </div>
      ))}
    </div>
    <div className="eoex-footer__bottom">
      <span>Region: <select className="eoex-footer__region"><option>Global</option></select></span>
      <span>Language: <select className="eoex-footer__lang"><option>English</option></select></span>
      <span className="eoex-footer__legal">© EOEX Store</span>
    </div>
  </footer>
);

export default Footer;
