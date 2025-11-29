import React, { useEffect, useState } from 'react';
import './scss/nameInput.scss';

const NameInput = ({ lastName, name, onLastNameChange, onNameChange }) => {
  const [nameStatus, setNameStatus] = useState('');
  const [lastNameStatus, setLastNameStatus] = useState('');
  const [lastNameTouch, setLastNameTouch] = useState(false);
  const [nameTouch, setNameTouch] = useState(false);
  const koreanRegex = /^[ㄱ-ㅎㅏ-ㅣ가-힣]*$/;

  useEffect(() => {
    // validateLastName 함수 내부로 이동
    if (!lastNameTouch) return;
    if (!lastName) {
      setLastNameStatus('failure');
      return;
    }
    if (!koreanRegex.test(lastName)) {
      setLastNameStatus('failure');
      return;
    }
    const LastNameFormetRegex = /^[가-힣]{1,2}$/;
    if (LastNameFormetRegex.test(lastName)) {
      setLastNameStatus('success');
    } else {
      setLastNameStatus('failure');
    }
  }, [lastName, lastNameTouch]);

  useEffect(() => {
    // validateName 함수 내부로 이동
    if (!nameTouch) return;
    if (!name) {
      setNameStatus('failure');
      return;
    }
    if (!koreanRegex.test(name)) {
      setNameStatus('failure');
      return;
    }
    const NameFormetRegex = /^[가-힣]{1,3}$/;
    if (NameFormetRegex.test(name)) {
      setNameStatus('success');
    } else {
      setNameStatus('failure');
    }
  }, [name, nameTouch]);

  const handleLastNameChange = (e) => {
    const val = e.target.value;
    if (!lastNameTouch) setLastNameTouch(true);
    if (koreanRegex.test(val) && val.length <= 4) {
      onLastNameChange(val);
    }
  };

  const handleNameChange = (e) => {
    const val = e.target.value;
    if (!nameTouch) setNameTouch(true);
    if (koreanRegex.test(val) && val.length <= 5) {
      onNameChange(val);
    }
  };

  return (
    <div className="base-input">
      <p>이름*</p>
      <div className="name-wrap">
        <div className={`input-box ${lastNameStatus}`}>
          <input
            className="lastName-input"
            type="text"
            placeholder="성"
            value={lastName || ''}
            onChange={handleLastNameChange}
            required
          />
          {lastNameStatus === 'success' && (
            <div className="icon">
              <img src="/assets/icon/input-success.png" alt="check" />
            </div>
          )}
          {lastNameStatus === 'failure' && <div className="info">성을 입력하세요</div>}
        </div>
        <div className={`input-box ${nameStatus}`}>
          <input
            className="name-input"
            type="text"
            placeholder="이름(성 제외)"
            value={name || ''}
            onChange={handleNameChange}
            required
          />
          {nameStatus === 'success' && (
            <div className="icon">
              <img src="/assets/icon/input-success.png" alt="check" />
            </div>
          )}
          {nameStatus === 'failure' && <div className="info">이름을 입력하세요</div>}
        </div>
      </div>
    </div>
  );
};

export default NameInput;
