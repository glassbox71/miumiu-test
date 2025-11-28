import React from 'react';
import '../scss/couLet.scss';
import { Link } from 'react-router-dom';
import Button from '../../../component/layout/Button';
import EmailInput from '../../../component/input/EmailInput';

const CousLet = () => {
  return (
    <section className="CousLetter-wrap">
      <div className="inner">
        <div className="box">
          <div className="boxlayout">
            <p className="title">GIFT BOX SERVICE</p>
            <p className="sub-title">미우미우 기프트 패키지</p>
            <p className="sub-desc">
              미우미우에서 주문하신 제품은 지속가능하게 디자인 및 제작된 <br />
              익스클루시브 기프트 박스에 담아 배송됩니다.
            </p>
          </div>
          <div className="boxlayout">
            <p className="title">GIFT CARD SERVICE</p>
            <p className="sub-title">미우미우 기프트 카드</p>
            <p className="sub-desc">
              익스클루시브 미우미우 기프트 카드로 최신 컬렉션에서 <br />
              원하는 제품을 직접 고르는 즐거움을 선사하세요.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CousLet;
