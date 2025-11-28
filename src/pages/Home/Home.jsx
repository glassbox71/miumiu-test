import React from 'react';
import NewItemMain from './layout/NewItemMain';
import AutomneBi from './layout/AutomneBi';
import LineBanner from './layout/LineBanner';
import MostLove from './layout/MostLove';
import Main from './layout/Main';
import SeasonCollection from './layout/SeasonCollection';
import './scss/home.scss';
import CousLet from './layout/CouLet';
import MiuClub from './layout/MiuClub';
import SpecialCo from './layout/SpecialCo';

const Home = () => {
  return (
    <main className="main">
      <Main />
      <div className="inner">
        <NewItemMain />
      </div>
      {/* <LineBanner /> */}
      <div className="inner-second">
        <AutomneBi />
      </div>
      <MostLove />
      <LineBanner />
      <SeasonCollection />
      <SpecialCo />
      <MiuClub />
      <CousLet />
    </main>
  );
};

export default Home;
