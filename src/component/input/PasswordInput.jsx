import React, { useState } from 'react';
import './scss/Input.scss';

const PasswordInput = ({ value, onChange }) => {
  const [status, setStatus] = useState('');
  const [passwordTouch, setPasswordTouch] = useState(false);

  const validatePass = (userPassword) => {
    if (!userPassword && passwordTouch) {
      setStatus('failure');
      return false;
    }
    if (!userPassword) {
      setStatus('');
      return false;
    }
    const passRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*?])(?=.*[0-9])[a-zA-Z0-9!@#$%^&*?]{6,12}$/;
    if (passRegex.test(userPassword)) {
      setStatus('success');
      return true;
    } else {
      setStatus('failure');
      return false;
    }
  };

  const handlePassChange = (e) => {
    const val = e.target.value;
    const filtervalue = val.replace(/[^a-zA-Z0-9!@#$%^&*?]/g, '');
    onChange(filtervalue);
    validatePass(filtervalue);
  };

  const handleBlur = () => {
    setPasswordTouch(true);
    validatePass(value);
  };

  return (
    <div className={`base-input password ${status}`}>
      <div className="input-box">
        <input
          type="password"
          placeholder="비밀번호를 입력해주세요*"
          value={value}
          onChange={handlePassChange}
          onBlur={handleBlur}
          required
        />
      </div>
      <div className="icon"></div>
      <div className="info">대소문자,특수문자를 포함한 비밀번호를 입력하세요</div>
    </div>
  );
};

export default PasswordInput;
