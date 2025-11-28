import React from 'react';
import './scss/Input.scss';

//TODO 인증 input
const AuthInput = () => {
  return (
    // 성공 success
    // 실패 failure
    <div className="base-input auth ">
      <input type="text" placeholder="인증코드를 입력해주세요*" required />
      <div className="auth-icon"></div>
      <button className="sand">재전송</button>
      {/* <div className="info">유효한 비밀번호를 입력하세요</div> */}
    </div>
  );
};

export default AuthInput;
