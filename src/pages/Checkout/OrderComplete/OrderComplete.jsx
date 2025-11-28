import React from 'react';
import '../scss/orderComplete.scss';
import { Link } from 'react-router-dom';

const OrderComplete = () => {
  return (
    <div className="orderCom-wrap">
      <div className="orderCom-img">
        <img src="/assets/icon/OrderComplete.png" alt="" />
      </div>
      <div className="orderCom-text">
        <h2>주문이 정상적으로 완료되었습니다.</h2>
        <p>미우미우를 이용해주셔서 감사합니다.</p>
      </div>

      <div className="OrderCom-move">
        <div className="white">
          <Link to={'/mypage/info'}>마이페이지로 가기</Link>
        </div>
        <div className="black">
          <Link to={'/'}>홈으로 가기</Link>
        </div>
      </div>
    </div>
  );
};

export default OrderComplete;
