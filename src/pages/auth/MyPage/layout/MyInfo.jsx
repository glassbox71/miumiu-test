import React, { useState } from 'react';
import AddressTable from './AddressTable';
import InfoEditPopup from './InfoEditPopup';
import AddressEditModal from './AddressEditModal';

//TODO 내정보
const MyInfo = ({ userData }) => {
  console.log(userData, '유저데이터값');
  const [isOpen, setIsOpen] = useState(false);
  if (!userData) {
    return null;
  }
  const isSocial = userData.provider === 'google';
  const fullName =
    [userData.lastName, userData.name].filter(Boolean).join('') || userData.displayName || '-';

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <div className="container">
      <section className="basicInfo">
        <div className="basicInfo-inner">
          <div className="title-wrap">
            <h2>기본 정보</h2>
            <button className="editBtn" onClick={openPopup}>
              수정하기
            </button>
          </div>

          <table className="info-table">
            <tbody>
              <tr>
                <th>이름</th>
                <td>{fullName || userData.displayName}</td>
                <th>생년월일</th>
                <td>{userData.birthday || '-'}</td>
              </tr>

              <tr>
                <th>이메일</th>
                <td>{userData.email || '-'}</td>
                <th>휴대폰 번호</th>
                <td>{userData.phone || '-'}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="loginInfo">
        <div className="loginInfo-inner">
          <h2>로그인 정보</h2>
          <table className="login-table">
            <tbody>
              <tr>
                <th>아이디</th>
                <td>{userData.email || '-'}</td>
                <th>비밀번호</th>
                <td>**********</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="myCoupon">
        <div className="myCoupon-inner">
          <h2>내 쿠폰</h2>

          <div className="coupon-wrap">
            <div className="coupon-box">
              <p className="title">10% 할인 쿠폰</p>
              <p className="coupon-detail">
                <span className="desc">100만원 이상 구매시 사용가능</span>
                <span className="validDate">2026. 08. 31 까지</span>
              </p>
            </div>
            <div className="coupon-box">
              <p className="title">15% 할인 쿠폰</p>
              <p className="coupon-detail">
                <span className="desc">150만원 이상 구매시 사용가능</span>
                <span className="validDate">2026. 08. 31 까지</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="deliveryAddress">
        <div className="address-inner">
          <div className="title-wrap">
            <h2>배송지 관리</h2>
            <button className="addAddressBtn">배송지 추가하기</button>
          </div>
          <AddressTable userData={userData} />
        </div>
      </section>
      {isOpen && <InfoEditPopup onclose={closePopup} userData={userData} />}
    </div>
  );
};

export default MyInfo;
