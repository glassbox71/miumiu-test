import React, { useEffect, useState } from 'react';
import Button from '../../../component/layout/Button';
import '../scss/OrderSummary.scss';
import OrderTotal from '../OrderTotal/OrderTotal';
import { useProductsStore } from '../../../store/useProductsStore';
import { useNavigate } from 'react-router-dom';

const OrderSummary = () => {
  const navigate = useNavigate();
  const { onSelectCoupon, onFinalPrice, cartItems } = useProductsStore();
  const [activeTab, setActiveTab] = useState('delivery');
  const [fixTab, setFixTab] = useState('delivery'); // 선택한 탭 고정
  const [shippingData, setShippingData] = useState(null);
  const [msg, setMsg] = useState('');
  const maxMsg = 200;
  const [agree19, setAgree19] = useState(false);
  const [agree19Err, setAgree19Err] = useState(false);

  // 배송 예상일 계산 함수
  const getDeliveryDateRange = () => {
    const today = new Date();
    const startDate = new Date(today);
    startDate.setDate(today.getDate() + 1); // 내일부터

    const endDate = new Date(today);
    endDate.setDate(today.getDate() + 3); // 3일 후

    const formatDate = (date) => {
      const month = date.getMonth() + 1;
      const day = date.getDate();
      const weekdays = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
      const weekday = weekdays[date.getDay()];
      return `${month}월 ${day}일 ${weekday}`;
    };

    return `${formatDate(startDate)} ~ ${formatDate(endDate)}`;
  };

  useEffect(() => {
    const pull = localStorage.getItem('shippingData');
    if (pull) {
      const data = JSON.parse(pull);
      setShippingData(data.checkData); // checkData 객체만 꺼내기
      setActiveTab(data.activeTab);
      setFixTab(data.activeTab); // 선택한 탭 고정

      if (data.couponInfo) {
        onSelectCoupon(data.couponInfo.selectedCoupon);
        onFinalPrice();
      }
    }
  }, []);

  console.log('배송정보:', shippingData);

  const handleMsg = (e) => {
    const value = e.target.value;
    if (value.length <= maxMsg) {
      setMsg(value);
    }
  };

  const handlePayment = () => {
    if (fixTab === 'store' && !agree19) {
      setAgree19Err(true);
      return;
    }

    if (!shippingData) {
      alert('배송 정보가 없습니다. 다시 진행해 주세요.');
      return;
    }

    // Payment에서 쓸 shipping + 탭 + 메세지 저장
    const orderShippingData = {
      ...shippingData,
      receiveType: fixTab,
      message: msg,
    };

    localStorage.setItem('order_shipping_data', JSON.stringify(orderShippingData));

    navigate('/payment');
  };

  const handleBack = () => {
    navigate('/shipping');
  };

  const handleAgree19 = (e) => {
    setAgree19(e.target.checked);
    if (e.target.checked) {
      setAgree19Err(false);
    }
  };

  return (
    <section className="OrderSummary-wrap">
      <div className="summary-left">
        <div className="summary-top">
          <p>수령정보를 확인하고 결제를 진행해 주세요.</p>
          <ul>
            <li>1. 주문서 작성 </li>
            <li>&nbsp; &gt;&nbsp; 2. 배송정보</li>
            <li>&nbsp; &gt;&nbsp; 3. 결제하기 </li>
          </ul>
        </div>
        <div className="tab-menu">
          <button type="button" className={activeTab === 'delivery' ? 'active' : ''} disabled>
            주소지로 배송
          </button>
          <button type="button" className={activeTab === 'store' ? 'active' : ''} disabled>
            매장에서 수령
          </button>
        </div>
        <div className="info-left">
          {fixTab === 'delivery' && (
            <div className="delivery-info">
              <div>
                <h4>구매자 정보</h4>
                {shippingData && (
                  <ul>
                    <li>
                      {shippingData.lastName} {shippingData.name}
                    </li>
                    <li>
                      {shippingData.countryNum} {shippingData.phone}
                    </li>
                    <li>{shippingData.email}</li>
                  </ul>
                )}
              </div>
              <div>
                <h4>배송 주소</h4>
                {shippingData && (
                  <ul>
                    <li>{shippingData.country}</li>
                    <li>
                      {shippingData.city} {shippingData.zipAddress}
                    </li>
                    <li>{shippingData.detailAddress}</li>
                  </ul>
                )}
              </div>
              <div>
                <h4>배송 방법</h4>
                {shippingData && (
                  <ul>
                    <li>일반 배송</li>
                    <li>예상 도착일: {getDeliveryDateRange()}</li>
                  </ul>
                )}
              </div>
            </div>
          )}

          {fixTab === 'store' && (
            <div className="store-info">
              <div>
                <h4>픽업 매장</h4>
                {shippingData && shippingData.selectedStore && (
                  <ul>
                    <li>{shippingData.selectedStore.title}</li>
                    <li>{shippingData.selectedStore.address}</li>
                    <li>{shippingData.selectedStore.number}</li>
                  </ul>
                )}
              </div>
              <div>
                <h4>청구서 발송 정보</h4>
                {shippingData && (
                  <ul>
                    <li>
                      {shippingData.lastName} {shippingData.name}
                    </li>
                    <li>{shippingData.zipAddress}</li>
                    <li>{shippingData.detailAddress}</li>
                    <li>{shippingData.city}</li>
                    <li>
                      {shippingData.countryNum} {shippingData.phone}
                    </li>
                    <li>{shippingData.email}</li>
                  </ul>
                )}
              </div>
            </div>
          )}

          <div className="selectedItem">
            {/* 장바구니나 상세제품에서 바로 넘어온 상품 보여주기 */}
            <h4>선택상품</h4>
            {cartItems.map((item) => (
              <div key={item.id} className="item">
                <img src={`${item.cartImg}`} alt={item.name} />
                <div className="item-info">
                  <p className="name">{item.name}</p>
                  <p className="quantity">수량: {item.count}</p>
                  <p className="price">{(item.price * item.count).toLocaleString()}원</p>
                </div>
              </div>
            ))}
          </div>
          <div className="msg-input">
            <h4>카드 메세지 입력</h4>
            <p>미우미우 카드에 메시지를 담아 선물을 더욱 특별하게 만들어 보세요!</p>
            <textarea
              value={msg}
              onChange={handleMsg}
              maxLength={maxMsg}
              placeholder="직접 작성을 원하실 경우, 메시지란을 비워두시면 내용이 적히지 않은 미우미우 카드가 함께 제공됩니다."
            />
            <span className="char-count">
              {msg.length}/{maxMsg}자 남음
            </span>
          </div>
          {fixTab === 'store' && (
            <div className={`agree19 ${agree19Err ? 'err' : ''}`}>
              <label>
                <input type="checkbox" checked={agree19} onChange={handleAgree19} />
                <span>
                  본인은 사용 약관 및 개인정보 처리방침을 읽었으며 이에 동의합니다. 그리고 아래에
                  명시된 대로 온라인 구매 주문을 처리하는 데 개인 데이터가 사용되는 것에 동의합니다.
                  본인은 만 19세 이상임을 확인합니다.
                </span>
              </label>
              {agree19Err && <p className="err-msg">* 동의가 필요합니다.</p>}
            </div>
          )}
          <div className="order-btn">
            <Button title="이전" onClick={handleBack} />
            <Button title="확인 및 결제진행" onClick={handlePayment} />
          </div>
        </div>
      </div>
      <OrderTotal />
    </section>
  );
};

export default OrderSummary;
