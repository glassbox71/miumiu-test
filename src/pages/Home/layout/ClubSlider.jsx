import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { clubCard, clubCard2 } from '../../../store/data';

const ClubSlider = () => {
  const [Scard, setScard] = useState(false);
  return (
    <div
      className="club-slides"
      onMouseEnter={() => setScard(true)}
      onMouseLeave={() => setScard(false)}>
      <div className={`slider-card ${Scard ? 'paused' : ''}`}>
        <ul className="card-container">
          {clubCard.concat(clubCard).map((c, id) => {
            return (
              <li className="card-box" key={id}>
                <Link to={`/product/${c.menu}`}>
                  <img src={c.src} alt={c.alt} />
                  <p className="card-menu">{c.menu}</p>
                  <span className="card-title">{c.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className={`slider-card2 ${Scard ? 'paused' : ''}`}>
        <ul className="card-container">
          {clubCard2.concat(clubCard2).map((c, id) => {
            return (
              <li className="card-box" key={id}>
                <Link to={`/product/${c.menu}`}>
                  <img src={c.src} alt={c.alt} />
                  <p className="card-menu">{c.menu}</p>
                  <span className="card-title">{c.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ClubSlider;
