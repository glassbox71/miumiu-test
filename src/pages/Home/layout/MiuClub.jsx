import React from 'react';
import '../scss/club.scss';
import ClubSlider from './ClubSlider';

const MiuClub = () => {
  return (
    <section className="miu-club-wrap">
      <div className="inner">
        <div className="club-title">
          <h2>
            MIU MIU
            <br /> JEWELLERY
          </h2>
          <p>
            미우미우의 현대적이고 여성스러운 감성을 담은
            <br />
            JEWELLERY COLLECTION
          </p>
        </div>
        <ClubSlider />
      </div>
    </section>
  );
};

export default MiuClub;
