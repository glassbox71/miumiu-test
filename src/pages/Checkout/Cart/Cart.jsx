import React from 'react';
import '../scss/Cart.scss';
import CartItem from '../layout/CartItem';
import CartTotalPrice from '../layout/CartTotalPrice';
import { useProductsStore } from '../../../store/useProductsStore';
import { useNavigate } from 'react-router-dom';

//TODO 장바구니
const Cart = () => {
  const { cartCount } = useProductsStore();
  const navigate = useNavigate();
  return (
    <section className="Cart">
      <div className="left-wrap">
        <div className="top">
          <h2>
            장바구니 <span>({cartCount}개 상품)</span>
          </h2>
        </div>
        {cartCount === 0 ? (
          <div className="cart-empty">
            <h3>장바구니가 비어 있습니다.</h3>
            <p>관심있는 상품을 추가해 보세요</p>
            <button onClick={() => navigate('/bags')}>쇼핑하러 가기</button>
          </div>
        ) : (
          <div className="cart-items">
            <CartItem />
          </div>
        )}
      </div>
      <CartTotalPrice />
    </section>
  );
};

export default Cart;
