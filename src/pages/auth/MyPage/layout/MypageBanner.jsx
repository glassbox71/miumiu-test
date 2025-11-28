import React from 'react';
import '../scss/MypageBanner.scss';

//TODO 마이페이지 상단 베너
const MypageBanner = ({ userName }) => {
  return (
    <div className="mypage-banner-wrap">
      <div className="mypage-banner-inner">
        <div className="banner-text">
          <p className="welcome-text">Welcome to Miu Miu</p>
          <p className="userName">
            <span>{userName}</span> 님
          </p>
        </div>
        <div className="banner-right">
          <div className="coupon">
            <p className="bannerTitle">쿠폰</p>
            <p className="bannerCount">
              2<span>개</span>
            </p>
          </div>
          <div className="point">
            <p className="bannerTitle">적립금</p>
            <p className="bannerCount">19,600</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MypageBanner;
