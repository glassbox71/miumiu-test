import React, { useState } from 'react';
import '../scss/Payment.scss';
import Button from '../../../component/layout/Button';
import OrderTotal from '../OrderTotal/OrderTotal';
import { useNavigate } from 'react-router-dom';
import { useProductsStore } from '../../../store/useProductsStore';

const Payment = () => {
  const navigate = useNavigate();
  const [selectedPayment, setSelectedPayment] = useState('');
  const { createOrder } = useProductsStore();

  const handleComplete = async () => {
    if (!selectedPayment) {
      alert('결제수단을 선택해 주세요.');
      return;
    }

    const shippingData = JSON.parse(localStorage.getItem('order_shipping_data') || '{}');

    if (!shippingData || !shippingData.lastName) {
      alert('배송 정보를 찾을 수 없습니다. 다시 주문 진행을 해주세요.');
      return;
    }

    const paymentData = {
      method: selectedPayment, // 'kakao' | 'credit' | 'cash'
      status: 'paid',
      paidAt: new Date(),
    };

    const orderId = await createOrder({
      shippingData,
      paymentData,
      orderMessage: shippingData.message || '',
    });

    if (!orderId) {
      alert('주문 저장에 실패했습니다.');
      return;
    }

    // localStorage 정리(선택)
    localStorage.removeItem('order_shipping_data');

    navigate(`/orderComplete/${orderId}`);
  };

  const handleBackSum = () => {
    navigate('/orderSummary');
  };

  return (
    <section className="Payment-wrap">
      <div className="payment-left">
        <div className="payment-top">
          <p>결제 방법을 선택해 주세요.</p>
          <ul>
            <li>1. 주문서 작성 </li>
            <li>&nbsp; &gt;&nbsp; 2. 배송정보</li>
            <li>&nbsp; &gt;&nbsp; 3. 결제하기 </li>
          </ul>
        </div>
        <div className="select-payment">
          <h4>결제수단 선택</h4>
          <div className="payment-box">
            <ul className="payment-list">
              <li
                className={`payment-icon ${selectedPayment === 'kakao' ? 'active' : ''}`}
                onClick={() => setSelectedPayment('kakao')}>
                <img src="/assets/icon/kakaoPay.png" alt="카카오페이" />
                <p>카카오페이</p>
              </li>
              <li
                className={`payment-icon ${selectedPayment === 'credit' ? 'active' : ''}`}
                onClick={() => setSelectedPayment('credit')}>
                <img src="/assets/icon/creditPay.png" alt="신용카드" />
                <p>신용카드</p>
              </li>
              <li
                className={`payment-icon ${selectedPayment === 'cash' ? 'active' : ''}`}
                onClick={() => setSelectedPayment('cash')}>
                <img src="/assets/icon/cashPay.png" alt="실시간 계좌이체" />
                <p>실시간 계좌이체</p>
              </li>
            </ul>
            <div className="payment-btn">
              <Button title="이전" onClick={handleBackSum} />
              <Button title="결제진행" onClick={handleComplete} />
            </div>
          </div>
        </div>
      </div>
      <OrderTotal />
    </section>
  );
};

export default Payment;
