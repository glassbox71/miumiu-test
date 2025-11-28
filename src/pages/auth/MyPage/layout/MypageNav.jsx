import React from 'react';
import '../scss/MypageNav.scss';
import { Link } from 'react-router-dom';

//TODO 마이페이지 탭 네비
const MypageNav = ({ activeTab, onChangeTab }) => {
  return (
    <div className="mypageNav">
      <div className="nav-inner">
        <ul>
          <li className={activeTab === 'info' ? 'active' : ''}>
            <button type="button" onClick={() => onChangeTab('info')}>
              나의 정보
            </button>
          </li>
          <li className={activeTab === 'order' ? 'active' : ''}>
            <button type="button" onClick={() => onChangeTab('order')}>
              주문 / 배송 조회
            </button>
          </li>
          <li className={activeTab === 'wishlist' ? 'active' : ''}>
            <button type="button" onClick={() => onChangeTab('wishlist')}>
              위시리스트
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MypageNav;
