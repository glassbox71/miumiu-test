import React, { useEffect, useState } from 'react';
import './scss/OngoingProcess.scss';

// 결제시간 기준으로 상태 계산하는 함수
const getOrderStatusByTime = (paymentTime) => {
  if (!paymentTime) return '결제완료';

  const now = new Date();
  const payTime = new Date(paymentTime);
  const diff = (now - payTime) / 1000; // 초 단위 차이

  const minutes = diff / 60;
  const hours = minutes / 60;
  const days = hours / 24;

  // 1) 6시간 미만: 결제완료
  if (hours < 6) return '결제완료';

  // 2) 6시간 이상 ~ 1일 미만: 배송 준비 중
  if (days < 1) return '배송 준비 중';

  // 3) 1일 이상 ~ 3일 미만: 배송 중
  if (days < 3) return '배송 중';

  // 4) 3일 이상: 배송 완료
  return '배송 완료';
};

const OngoingProcess = ({ paymentTime, counts }) => {
  const [status, setStatus] = useState('결제완료');
  const { payment, prepare, delivering, delivered } = counts || {};

  useEffect(() => {
    // 처음 진입 시 상태 계산
    setStatus(getOrderStatusByTime(paymentTime));

    // 1분마다 상태 재계산
    const interval = setInterval(() => {
      setStatus(getOrderStatusByTime(paymentTime));
    }, 60000);

    return () => clearInterval(interval);
  }, [paymentTime]);

  return (
    <div className="ongoingProcess">
      <div className={`payment-status ${status === '결제완료' ? 'active' : ''}`}>
        <p>결제완료</p>
        <span>{payment ?? 0}</span>
      </div>
      <div className="next-icon"></div>

      <div className={`delivery-prepare ${status === '배송 준비 중' ? 'active' : ''}`}>
        <p>배송 준비 중</p>
        <span>{prepare ?? 0}</span>
      </div>
      <div className="next-icon"></div>

      <div className={`delivery-status ${status === '배송 중' ? 'active' : ''}`}>
        <p>배송 중</p>
        <span>{delivering ?? 0}</span>
      </div>
      <div className="next-icon"></div>

      <div className={`delivery-completed ${status === '배송 완료' ? 'active' : ''}`}>
        <p>배송 완료</p>
        <span>{delivered ?? 0}</span>
      </div>
    </div>
  );
};

export default OngoingProcess;
