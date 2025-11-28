import React, { useState } from 'react';
import './scss/Input.scss';
import DaumPostcode from 'react-daum-postcode';

const DetailAddress = ({ zipAddress, detailAddress, setZipAddress, setDetailAddress }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }

    setZipAddress(fullAddress); // ✅ 내부에서 주소 상태 저장
    setIsOpen(false); // 창 닫기
  };

  return (
    <div className="base-input">
      <p>주소 검색</p>
      <input
        type="text"
        placeholder="주소 검색을 위해 클릭하세요"
        value={zipAddress}
        readOnly
        onClick={() => setIsOpen(true)}
      />

      <p className="detailAddress">상세 주소(선택)</p>
      <input
        type="text"
        placeholder="상세 주소를 입력해주세요"
        value={detailAddress}
        onChange={(e) => setDetailAddress(e.target.value)}
      />

      {isOpen && (
        <div
          className="postcode-modal"
          style={{
            position: 'absolute',
            top: 20,
            zIndex: 100,
            background: '#fff',
            border: '1px solid #ccc',
            padding: '10px',
          }}>
          <DaumPostcode onComplete={handleComplete} />
          <button onClick={() => setIsOpen(false)}>닫기</button>
        </div>
      )}
    </div>
  );
};

export default DetailAddress;
