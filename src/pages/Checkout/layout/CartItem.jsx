import React from 'react';
import '../scss/CartItem.scss';
import { useProductsStore } from '../../../store/useProductsStore';
import { Link } from 'react-router-dom';

//TODO 장바구니 아이템
const CartItem = () => {
  const { cartItems, onMinusItem, onPlusItem, onRemoveCart } = useProductsStore();
  console.log(cartItems, 'item.cartImg');
  return (
    <>
      {cartItems.map((item) => (
        <div className="CartItem" key={item.id}>
          <div className="itemleft-Img">
            <Link to={`/product/${item.id}`}>
              <img src={`${item.detail_images[0].url}`} alt={item.name} />
            </Link>
          </div>
          <div className="itemRight">
            <div className="top">
              <span className="itemNO">{item.id}</span>
              <button className="icon" onClick={() => onRemoveCart(item.id)}></button>
            </div>
            <p className="title">{item.name}</p>
            <div className="bottom">
              <div className="countBtn">
                <button onClick={() => onMinusItem(item.id)}>-</button>
                <span>{item.count}</span>
                <button onClick={() => onPlusItem(item.id)}>+</button>
              </div>
              <p className="price">{(item.price * item.count).toLocaleString()}원</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CartItem;
