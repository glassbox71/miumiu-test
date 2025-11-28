import React from 'react';
import './scss/OngoingNone.scss';

//TODO 결제 상품 없을 시
const OngoingNone = () => {
  return (
    <div className="ongoingNone">
      <p>진행 중인 주문 상품이 없습니다.</p>
    </div>
  );
};

export default OngoingNone;
