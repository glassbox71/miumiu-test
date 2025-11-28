import React from 'react';
import CartTotalPrice from '../layout/CartTotalPrice';
import '../scss/OrderTotal.scss';

const OrderTotal = () => {
  return (
    <>
      <CartTotalPrice showCoupon={true} showVAT={true} showButton={false} className="OrderTotal" />
    </>
  );
};

export default OrderTotal;
