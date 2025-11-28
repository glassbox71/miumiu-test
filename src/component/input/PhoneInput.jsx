import React, { useState } from 'react';
import './scss/Input.scss';

const PhoneInput = ({ value, onChange }) => {
  const [inputClass, setInputClass] = useState('');

  const handleChange = (e) => {
    let input = e.target.value.replace(/[^0-9]/g, '');

    let formatted = '';
    if (input.length <= 3) {
      formatted = input;
    } else if (input.length <= 7) {
      formatted = input.slice(0, 3) + '-' + input.slice(3);
    } else {
      formatted = input.slice(0, 3) + '-' + input.slice(3, 7) + '-' + input.slice(7, 11);
    }

    onChange(formatted);

    if (input.length === 11) {
      setInputClass('success');
    } else if (input.length > 0) {
      setInputClass('failure');
    } else {
      setInputClass('');
    }
  };

  return (
    <div className={`base-input phone ${inputClass}`}>
      <input
        type="text"
        value={value}
        maxLength={13}
        placeholder="전화번호를 입력해주세요"
        onChange={handleChange}
        required
      />
      <div className="icon"></div>
      <div className="info">이 필드는 필수 입력란입니다.</div>
    </div>
  );
};

export default PhoneInput;
