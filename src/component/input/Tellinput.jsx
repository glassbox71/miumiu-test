import React, { useState } from 'react';
import './scss/Input.scss';
import { country } from '../../store/data';

const Tellinput = ({ phone, onPhone, countNum, onCountNum }) => {
  const [phoneCountry, setPhoneCountry] = useState('KR');
  const [phoneNumber, setPhoneNumber] = useState('');
  // const selectedDial = country.find((c) => c.code === phoneCountry)?.dial ?? '+82';

  const handlePhoneNumber = (e) => {
    let onlyNumber = e.target.value.replace(/[^0-9]/g, '');

    let formatted = '';
    if (onlyNumber.length <= 3) {
      formatted = onlyNumber;
    } else if (onlyNumber.length <= 7) {
      formatted = onlyNumber.slice(0, 3) + '-' + onlyNumber.slice(3);
    } else {
      formatted =
        onlyNumber.slice(0, 3) + '-' + onlyNumber.slice(3, 7) + '-' + onlyNumber.slice(7, 11);
    }

    onPhone(formatted);

    setPhoneNumber(onlyNumber.length === 11 ? 'success' : 'failure');
  };

  const handleCountry = (e) => {
    const code = e.target.value;
    setPhoneCountry(code);

    const dial = country.find((c) => c.code === code)?.dial ?? '+82';
    onCountNum(dial);
  };

  return (
    <div className={`base-input phone ${phoneNumber}`}>
      <p>전화번호*</p>
      <div className="select-num">
        {/* TODO 국가 코드 선택 */}
        <select value={phoneCountry} onChange={handleCountry}>
          {country.map((c) => (
            <option key={c.code} value={c.code}>
              {c.label}
            </option>
          ))}
        </select>

        <input
          type="text"
          value={phone ?? ''}
          maxLength={13}
          placeholder="전화번호를 입력해주세요"
          onChange={handlePhoneNumber}
        />
      </div>
      <p className="info">이 필드는 필수 입력란입니다.</p>
    </div>
  );
};

export default Tellinput;
