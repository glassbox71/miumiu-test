// src/pages/.../InfoEditPopup.jsx
import React, { useState } from 'react';
import PhoneInput from '../../../../component/input/PhoneInput';
import EmailInput from '../../../../component/input/EmailInput';
import '../scss/InfoEditPopup.scss';

import { db } from '../../../../api/firebase';
import { doc, updateDoc } from 'firebase/firestore';

const InfoEditPopup = ({ userData, onclose }) => {
  const fullName =
    [userData.lastName, userData.name].filter(Boolean).join('') || userData.displayName || '-';

  // 🔹 입력값 상태 세팅
  const [phone, setPhone] = useState(userData.phone || '');
  const [email, setEmail] = useState(userData.email || '');

  // 🔹 변경하기 버튼
  const handleSave = async () => {
    try {
      const uid = userData.uid || userData.userId;

      if (!uid) {
        alert('유저 정보가 올바르지 않습니다.');
        return;
      }

      const ref = doc(db, 'users', uid);

      await updateDoc(ref, {
        phone,
        email,
      });

      alert('회원 정보가 변경되었습니다.');

      onclose(); // 팝업 닫고
      window.location.reload(); // 새로고침해서 MyInfo 업데이트
    } catch (error) {
      console.error(error);
      alert('정보 업데이트 중 오류가 발생했습니다.');
    }
  };

  return (
    <div className="edit-popup-wrap" onClick={onclose}>
      <div className="edit-popup" onClick={(e) => e.stopPropagation()}>
        <div className="title-wrap">
          <h2>회원 정보 수정하기</h2>
          <div className="popupClose-icon" onClick={onclose}></div>
        </div>

        <div className="popup-content">
          <div className="input-wrap">
            <h3>기본 정보</h3>

            {/* 이름 표시 */}
            <div className="lockedName-input">
              <p>이름</p>
              <input type="text" value={fullName} readOnly />
            </div>

            {/* 전화번호 */}
            <div className="phoneEdit-input">
              <p>휴대폰 번호</p>
              <PhoneInput value={phone} onChange={setPhone} />
            </div>

            {/* 이메일 */}
            <div className="emailEdit-input">
              <div className="emailEdit-text">
                <p>이메일</p>
                <span> *이메일만 변경 됩니다</span>
              </div>
              <EmailInput value={email} onChange={setEmail} />
            </div>
          </div>

          <div className="button-wrap">
            <button onClick={onclose}>취소</button>
            <button onClick={handleSave}>변경하기</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoEditPopup;
