import React, { useState } from 'react';
import './scss/Input.scss';

const Address = ({ address, onAddChange }) => {
  return (
    <div className="base-input">
      <p>주소*</p>
      <input
        type="text"
        placeholder="주소를 입력해주세요"
        value={address}
        onChange={(e) => onAddChange(e.target.value)}
      />
    </div>
  );
};

export default Address;
