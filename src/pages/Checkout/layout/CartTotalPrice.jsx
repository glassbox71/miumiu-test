import React from 'react';
import Button from '../../../component/layout/Button';
import '../scss/CartTotalPrice.scss';
import { useProductsStore } from '../../../store/useProductsStore';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../../api/authStore';

//TODO 장바구니 결제창
const CartTotalPrice = ({ showCoupon = false, showVAT = false, showButton = true }) => {
  const { cartCount, totalPrice, discount, finalPrice } = useProductsStore();
  const { user } = useAuthStore();

  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate(user ? '/shipping' : '/login');
  };

  return (
    <div className="CartTotalPrice">
      <b className="">총 결제 금액</b>
      <div className="price-info">
        <div className="list">
          <p>배송비</p>
          <span>무료</span>
        </div>
        <div className="list">
          <p>
            소계 <span className="addTax">(부가세 포함)</span>
          </p>
          <span>{totalPrice.toLocaleString()} 원</span>
        </div>

        {showCoupon && (
          <div className="list">
            <p>쿠폰</p>
            <span>-{(discount || 0).toLocaleString()}원</span>
          </div>
        )}
        {showVAT && (
          <div className="list">
            <p>부가가치세</p>
            <span>{((finalPrice || totalPrice) * 0.1).toLocaleString()}원</span>
          </div>
        )}
      </div>

      <div className="total-price-wrap">
        <p>
          합계 <span className="item-count">({cartCount}개 상품)</span>
        </p>
        <div className="total-price">
          {(finalPrice || totalPrice).toLocaleString()} <span>원</span>
        </div>
      </div>
      {showButton && <Button onClick={handleCheckout} className="price-btn" title="결제하기" />}
      <div className="accordion-wrap">
        <div className="accordion-list">
          <details>
            <summary>안심 결제</summary>
            <div className="inner">
              <p>
                미우미우에서는 고객님의 안전한 쇼핑을 최우선 가치로 삼아, 최고 수준의 보안을 모든
                거래에 제공합니다.
              </p>
            </div>
          </details>

          <details>
            <summary>도움이 필요하세요?</summary>
            <div className="inner">
              <p>
                제품 및 온라인 주문에 대해 궁금한 점이 있으신 경우, 홈페이지의 FAQ를 참고하시거나
                클라이언트 서비스로 연락해주세요. 문의하기 페이지를 통해서도 도움을 받으실 수
                있습니다.
              </p>
              <p>문의하기 080-522-7198</p>
              <p>고객 서비스팀과 채팅 상담</p>
            </div>
          </details>

          <details>
            <summary>무료 배송 및 반품</summary>
            <div className="inner">
              <p>
                모든 주문은 배송 가능한 제품의 재고가 있을 경우에 한해 생성되며 2~3 영업일 내에 처리
                됩니다. 예상 배송완료 기간은 실제 배송일 이후 확인 가능합니다. 주문 완료 후 고객님께
                전달되는 운송장번호를 통해서 배송 상태를 조회하실 수 있습니다. 제품 수령일로부터
                14일 이내에 당사 지정 배송 업체를 통해서 무상으로 반품하실 수 있습니다.
              </p>
            </div>
          </details>
        </div>
      </div>
    </div>
  );
};

export default CartTotalPrice;
