import React from 'react';
import './scss/ProductSkeleton.scss';

const ProductSkeleton = () => {
  return (
    <div className="ProductSkeleton-wrap">
      <div className="inner">
        {' '}
        <div className="top">
          <div className="left"></div>

          <div className="rigth">
            <div className="box1"></div>
            <div className="box2"></div>
            <div className="box3"></div>
            <div className="box4"></div>
            <div className="box5"></div>
          </div>
        </div>
        <div className="bottom">
          <div className="nav"></div>
          <div className="img"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductSkeleton;
