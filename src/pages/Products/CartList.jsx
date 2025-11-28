import React from 'react';
import CartItem from '../Checkout/layout/CartItem';
import { useProductsStore } from '../../store/useProductsStore';
import Button from '../../component/layout/Button';
import { useNavigate } from 'react-router-dom';
import './scss/CartList.scss';
import { useAuthStore } from '../../api/authStore';

const CartList = ({ onClose }) => {
  const { cartCount, totalPrice, finalPrice } = useProductsStore();
  const { user } = useAuthStore();

  const navigate = useNavigate();

  const handleBackClick = (e) => {
    if (e.target.classList.contains('add-cart')) {
      onClose();
    }
  };

  const handleCart = () => {
    navigate('/cart');
    onClose();
  };

  const handleShipping = () => {
    navigate(user ? '/shipping' : '/login');
    onClose();
  };

  return (
    <section className="add-cart" onClick={handleBackClick}>
      <div className="add-cart-wrap">
        <div className="cartpop-top">
          <h2>장바구니에 추가된 상품</h2>
          <div className="close-icon" onClick={onClose}>
            <img src="/assets/icon/close.png" alt="Close" />
          </div>
        </div>
        <div className="cartpop-list">
          <CartItem />
        </div>
        <div className="cartpop-bottom">
          <div className="cartpop-title">
            <h3>
              합계<span>({cartCount}개 상품)</span>
            </h3>
            <p>{(finalPrice || totalPrice).toLocaleString()} 원</p>
          </div>
          <Button title="구매하기" onClick={handleShipping} />
          <Button title="장바구니 보기" onClick={handleCart} />
        </div>
      </div>
    </section>
  );
};

export default CartList;
