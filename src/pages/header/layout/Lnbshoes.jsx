import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/lnbSub.scss';
import { shoes, conicshoes } from '../../../store/data';

const Lnbshoes = ({ isActive }) => {
  return (
    <div className={`lnb-box ${isActive ? '' : 'hidden'}`}>
      <div className="lnb-inner">
        <div className="lnb-left">
          <div className="lnb-menus">
            <p className="lnb-menus-title">슈즈</p>
            <ul className="lnb-sub-menus">
              {shoes.map((shoe) => (
                <li className="lnb-menuList" key={shoe.alt}>
                  <Link to={`/shoes/${shoe.alt2}`}>{shoe.alt}</Link>
                </li>
              ))}
            </ul>
          </div>
          <ul className="lnb-img">
            <li>
              <Link>
                <img src="/assets/images/lnb/shoes-list.jpg" alt="bag" />
              </Link>
            </li>
          </ul>
        </div>
        <div className="lnb-right">
          <div className="lnb-menus">
            <p className="lnb-menus-title">아이코닉 슈즈</p>
            <ul className="lnb-sub-menus">
              {conicshoes.map((shoes) => (
                <li className="lnb-menuList" key={shoes.alt}>
                  <Link to={`/shoes/tag/${shoes.alt2}`}>{shoes.alt}</Link>
                </li>
              ))}
            </ul>
          </div>
          <ul className="lnb-imgs">
            {conicshoes.slice(0, 4).map((conicshoe) => (
              <li key={conicshoe.alt} data-alt={conicshoe.alt}>
                <Link to={`/shoes/${conicshoe.alt2}`}>
                  <img src={conicshoe.src} alt={conicshoe.alt} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Lnbshoes;
