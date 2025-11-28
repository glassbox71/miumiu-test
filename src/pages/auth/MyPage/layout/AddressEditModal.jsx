import React from 'react';
import '../scss/AddressEditModal.scss';
import PhoneInput from '../../../../component/input/PhoneInput';

//TODO 마이페이지  배송지 수정
const AddressEditModal = ({ onclose, userData }) => {
  return (
    <div className="edit-popup-wrap">
      <div className="edit-popup">
        <div className="title-wrap">
          <h2>배송 정보 수정하기</h2>
          <div className="popupClose-icon" onClick={onclose}></div>
        </div>

        <div className="popup-content">
          <div className="input-wrap">
            <h3>배송지 정보</h3>

            <div className="nameEdit-input">
              <p>이름</p>
              <input type="text" placeholder={userData.fullName} readOnly />
            </div>

            <div className="phoneEdit-input">
              <p>휴대폰 번호</p>
              <PhoneInput />
            </div>

            <div className="addressEdit-input">
              <p>주소</p>
              <input type="text" placeholder="" />
            </div>
          </div>
          <div className="button-wrap">
            <button onClick={onclose}>취소</button>
            <button>수정하기</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressEditModal;
