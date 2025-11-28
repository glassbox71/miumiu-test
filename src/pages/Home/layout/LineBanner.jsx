import React from 'react';
import '../scss/Linebanner.scss';

const LineBanner = () => {
  return (
    <div className="line-banner">
      <div className="banner-track">
        {[...Array(2)].map((_, i) => (
          <div className="banner-group" key={i}>
            {[...Array(20)].map((_, j) => (
              <span className="textBanner" key={j}>
                <img src="./assets/logo/logo.png" alt="" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LineBanner;
