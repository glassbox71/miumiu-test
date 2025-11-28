import React, { useState } from 'react';
import './scss/Input.scss';

const IdInput = ({ value, onChange }) => {
  const [status, setStatus] = useState('');
  const [idTouch, setIdTouch] = useState(false);

  const validateId = (userId) => {
    if (!userId && idTouch) {
      setStatus('failure');
      return false;
    }
    if (!userId) {
      setStatus('');
      return false;
    }
    const idRegex = /^(?=.*[a-z])(?=.*[0-9])[a-zA-Z0-9]+$/;
    if (idRegex.test(userId)) {
      setStatus('success');
      return true;
    } else {
      setStatus('failure');
      return false;
    }
  };

  const handleIdChange = (e) => {
    const val = e.target.value;
    const filtervalue = val.replace(/[^a-zA-Z0-9]/g, '');
    onChange(filtervalue);
    validateId(filtervalue);
  };

  const handleBlur = () => {
    setIdTouch(true);
    validateId(value);
  };

  return (
    <div className={`base-input userId ${status}`}>
      <div className="input-box">
        <input
          type="email"
          placeholder="이메일을 입력해주세요*"
          value={value}
          onChange={handleIdChange}
          onBlur={handleBlur}
          required
        />
      </div>
      <div className="icon"></div>
      <div className="info">영문,숫자를 포함한 아이디를 입력하세요</div>
    </div>
  );
};

export default IdInput;
