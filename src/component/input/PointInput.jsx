import React, { useState } from 'react';
import './scss/Input.scss';

const PointInput = () => {
  const [point, setPoint] = useState('');

  const pointInput = /^[0-9]*$/;

  const handlePoint = (e) => {
    if (pointInput.test(e.target.value)) {
      setPoint(e.target.value);
    }
  };

  return (
    <div className="base-input">
      <input
        type="text"
        placeholder="사용하실 적립금을 입력해주세요."
        value={point}
        maxLength={7}
        onChange={handlePoint}
      />
    </div>
  );
};

export default PointInput;
