import React from 'react';
import '../scss/ProductDetailSkeleton.scss';

const ProductDetailSkeleton = () => {
  return (
    <div className="ProductDetailSkeleton-wrap">
      <div className="inner">
        <div className="top">
          <div className="left"></div>

          <div className="right">
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

export default ProductDetailSkeleton;
