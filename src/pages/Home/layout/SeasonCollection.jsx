import '../scss/SeasonCollection.scss';
import { Link } from 'react-router-dom';
import 'swiper/css';
import { useState } from 'react';

const items = [
  {
    imgUrl: './assets/images/static/main/SeasonCollection/5NE851_068_F0011.png',
    alt: '5NE851_068_F0011',
  },
  {
    imgUrl: './assets/images/static/main/SeasonCollection/5BB142_2CS4_F0003_V_OON.png',
    alt: '5BB142_2CS4_F0003_V_OON',
  },
  {
    imgUrl: './assets/images/static/main/SeasonCollection/5BB172_2CRW_F0NBL_V_OOO.png',
    alt: '5BB172_2CRW_F0NBL_V_OOO',
  },
  {
    imgUrl: './assets/images/static/main/SeasonCollection/5MC103_2FPP_F098L.png',
    alt: '5MC103_2FPP_F098L',
  },
  {
    imgUrl: './assets/images/static/main/SeasonCollection/5BC125_2IDK_F0036_V_OWS.png',
    alt: '5BC125_2IDK_F0036_V_OWS',
  },
  {
    imgUrl: './assets/images/static/main/SeasonCollection/5BF131_2IEO_F0002_V_OOO.png',
    alt: '5BF131_2IEO_F0002_V_OOO',
  },
  {
    imgUrl: './assets/images/static/main/SeasonCollection/5CC691_2IFT_F0151.png',
    alt: '5CC691_2IFT_F0151',
  },
  {
    imgUrl: './assets/images/static/main/SeasonCollection/5D499E_054_F0003_F_015.png',
    alt: '5D499E_054_F0003_F_015',
  },
  {
    imgUrl: './assets/images/static/main/SeasonCollection/5D563E_007_F0003_F_015.png',
    alt: '5D563E_007_F0003_F_015',
  },
  {
    imgUrl: './assets/images/static/main/SeasonCollection/5HC369_2CWC_F04Z6.png',
    alt: '5HC369_2CWC_F04Z6',
  },
  {
    imgUrl: './assets/images/static/main/SeasonCollection/5T515E_Z0G_F0F24_F_ZF15.png',
    alt: '5T515E_Z0G_F0F24_F_ZF15',
  },
  {
    imgUrl: './assets/images/static/main/SeasonCollection/5W315E_2KJ_F0002_F_G035.png',
    alt: '5W315E_2KJ_F0002_F_G035',
  },
];

const SeasonCollection = () => {
  const [isPaused, setPaused] = useState(false);
  // const [selected, setSelected] = useState(banners[0]);

  return (
    <section className="SeasonCollection">
      <div className="topSection">
        <div className="inner">
          <div className="left-container wow animate__animated animate__fadeInLeft">
            <span>SEASON COLLECTION</span>
            <h2>miu miu automne</h2>
          </div>
          <div className="right-container wow animate__animated animate__fadeInRight">
            <img src="/assets/images/static/main/SeasonCollection/SeasonCollection.png" alt="" />
          </div>
        </div>
      </div>
      <div
        className="bottomSection"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <ul className={`item-container ${isPaused ? 'paused' : ''}`}>
          {items.concat(items).map((el, index) => {
            return (
              <li key={index}>
                <Link to={`/product/${el.alt}`}>
                  <img src={el.imgUrl} alt={el.alt} data-alt="" />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default SeasonCollection;
