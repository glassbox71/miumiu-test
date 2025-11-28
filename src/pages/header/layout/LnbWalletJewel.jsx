import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/lnbSub.scss';
import { wallets, jewels } from '../../../store/data';

const LnbWalletJewel = ({ isActive }) => {
  return (
    <div className={`lnb-box ${isActive ? '' : 'hidden'}`}>
      <div className="lnb-inner">
        <div className="lnb-left">
          <div className="lnb-menus">
            <p className="lnb-menus-title">지갑</p>
            <ul className="lnb-sub-menus">
              {wallets.map((wallet) => (
                <li className="lnb-menuList" key={wallet.alt}>
                  <Link to={`/wallets/${wallet.alt2}`}>{wallet.alt}</Link>
                </li>
              ))}
            </ul>
          </div>
          <ul className="lnb-img">
            <li>
              <Link>
                <img src="/assets/images/lnb/wall-list.jpg" alt="bag" />
              </Link>
            </li>
          </ul>
        </div>
        <div className="lnb-right">
          <div className="lnb-menus">
            <p className="lnb-menus-title">패션 주얼리</p>
            <ul className="lnb-sub-menus">
              {jewels.map((jewel) => (
                <li className="lnb-menuList" key={jewel.alt}>
                  <Link to={`/jewellery/${jewel.alt2}`}>{jewel.alt}</Link>
                </li>
              ))}
            </ul>
          </div>
          <ul className="lnb-imgs">
            {jewels.slice(0, 4).map((jewel) => (
              <li key={jewel.alt} data-alt={jewel.alt}>
                <Link to={`/${jewel.alt2}`}>
                  <img src={jewel.src} alt={jewel.alt} />
                  <p>{jewel.alt}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default LnbWalletJewel;
