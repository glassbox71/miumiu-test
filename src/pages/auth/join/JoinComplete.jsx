import React from 'react';
import './scss/JoinComplete.scss';
import { Link } from 'react-router-dom';

const JoinComplete = () => {
  return (
    <div className="joinCom-wrap">
      <div className="joinCom-img">
        <img src="/assets/icon/OrderComplete.png" alt="" />
      </div>
      <div className="joinCom-text">
        <h2>회원가입이 완료되었습니다.</h2>
        <p>로그인 하시면 더욱 다양한 서비스와 혜택을 제공 받으실 수 있습니다.</p>
      </div>

      <div className="joinCom-move">
        <div className="black">
          <Link to={'/Login'}>로그인</Link>
        </div>
      </div>
    </div>
  );
};

export default JoinComplete;
