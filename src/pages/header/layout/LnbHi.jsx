import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/lnbHi.scss';

const colections = [
  { key: 'MIUMIUAUTOMNE', label: 'MIU MIU AUTOMNE' },
  { key: 'NEWBALANCEXMIUMIU', label: 'NEW BALANCE X MIU MIU' },
  { key: 'MIUMIUCUSTOMSTUDIO', label: 'MIU MIU CUSTOM STUDIO' },
  { key: 'MIUMIUUPCYCLED', label: 'MIU MIU UPCYCLED' },
  { key: 'CLOSET', label: 'MIU CLOSET' },
  { key: '기프트', label: '기프트' },
  { key: '향수', label: '향수' },
];
const newitems = [
  { key: '슈즈', label: '슈즈' },
  { key: '악세서리', label: '악세서리' },
  { key: '의류', label: '의류' },
  { key: '가방', label: '가방' },
];
const LnbHi = ({ isActive }) => {
  return (
    <div className={`lnb-hi ${isActive ? '' : 'hidden'}`}>
      <div className="lnb-inner">
        <div className="lnb-left hi">
          <div className="lnb-menus">
            <p className="lnb-menus-title">컬렉션</p>
            <ul className="lnb-sub-menus">
              {colections.map((colection) => (
                <li className="lnb-menuList" key={colection.key}>
                  <Link to={`/${colection.key}`}>{colection.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lnb-menus">
            <p className="lnb-menus-title">신상품</p>
            <ul className="lnb-sub-menus">
              {newitems.map((items) => (
                <li className="lnb-menuList" key={items.key}>
                  <Link to={`/${items.key}`}>{items.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lnb-menus">
            <p className="lnb-menus-title">MIU MIU CLUB</p>
            <ul>
              <Link>
                <li className="lnb-sub-menus">Miu Miu Women's Tales</li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="lnb-right">
          <ul>
            <li>
              <Link>
                <img src="/assets/images/lnb/collection-1.jpg" alt="collection-1" />
              </Link>
            </li>
            <li>
              <Link>
                <img src="/assets/images/lnb/collection-2.jpg" alt="collection-2" />
              </Link>
            </li>
            <li>
              <Link>
                <img src="/assets/images/lnb/collection-3.jpg" alt="collection-3" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LnbHi;
