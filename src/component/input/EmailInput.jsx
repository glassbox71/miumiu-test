import React, { useEffect, useState } from 'react';
import './scss/Input.scss';

const EmailInput = ({ value, onChange }) => {
  const [status, setStatus] = useState('');

  const validateEmail = (email) => {
    if (!email) {
      setStatus('');
      return;
    }

    const allowedCharsRegex = /^[a-zA-Z0-9@._-]*$/;

    if (!allowedCharsRegex.test(email)) {
      setStatus('failure');
      return;
    }

    const emailFormatRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+$/;

    if (emailFormatRegex.test(email)) {
      setStatus('success');
    } else {
      setStatus('failure');
    }
  };

  const handleEmailChange = (e) => {
    const val = e.target.value;

    // ✅ 입력 제한 정규식도 동일하게 수정
    const allowedCharsRegex = /^[a-zA-Z0-9@._-]*$/;

    if (allowedCharsRegex.test(val)) {
      onChange(val);
    }
  };

  useEffect(() => {
    validateEmail(value);
  }, [value]);

  return (
    <div className={`base-input ${status}`}>
      <div className="email-wrap">
        <input
          type="text"
          placeholder="이메일을 입력해주세요*"
          value={value}
          onChange={handleEmailChange}
          required
          className="email-input"
        />
        {status === 'success' && (
          <div className="icon">
            <img src="/assets/icon/input-success.png" alt="check" />
          </div>
        )}
      </div>
      {status === 'failure' && (
        <div className="info">올바른 형식의 이메일 주소를 입력해주세요.</div>
      )}
    </div>
  );
};

export default EmailInput;
