import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuthStore } from '../../../api/authStore';
import MypageBanner from './layout/MypageBanner';
import MypageNav from './layout/MypageNav';
import MyInfo from './layout/MyInfo';
import './scss/Mypage.scss';
import CousLet from '../../Home/layout/CouLet';
import WIshList from '../WishList/WIshList';
import MyOrder from '../../Checkout/MyOrder/MyOrder';

//TODO 마이페이지  시작점
const Mypage = () => {
  const { tab } = useParams();
  const navigate = useNavigate();
  const user = useAuthStore((state) => state.user);
  const activeTab = tab || 'info';

  if (!user) {
    return <div>로그인 정보가 없습니다</div>;
  }

  const fullName = [user.lastName, user.name].filter(Boolean).join('');

  const handleChangeTab = (nextTab) => {
    navigate(`/mypage/${nextTab}`);
  };
  return (
    <div className="myPage">
      <div className="mypage-inner">
        <MypageBanner
          userName={fullName || user.displayName}
          couponCount={user.couponCount || 0}
          point={user.point || 0}
        />
        <MypageNav activeTab={activeTab} onChangeTab={handleChangeTab} />

        {activeTab === 'info' && <MyInfo userData={user} />}
        {activeTab === 'order' && <MyOrder />}

        {activeTab === 'wishlist' && <WIshList />}
        {/* 테스트 */}
      </div>
    </div>
  );
};

export default Mypage;
