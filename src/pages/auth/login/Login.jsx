import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../../api/authStore';
import './login.scss';

import { auth, db } from '../../../api/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';

const list = [
  { icon: '', title: '개인계정을 통해 특별한 쇼핑 경험을 느껴보세요.' },
  { icon: '', title: '전용 섹션에서 주문 및 반품 내역을 관리하고 배송 상태를 추적할 수 있습니다.' },
  { icon: '', title: '마음에 드는 제품은 위시리스트에 저장해보세요.' },
  { icon: '', title: '개인 맞춤 예약과 수선 요청 내역도 한눈에 확인하실 수 있습니다.' },
  { icon: '', title: '고객 서비스팀의 맞춤형 응대를 받아보세요.' },
  { icon: '', title: '온라인 익스클루시브 제품도 간편하게 만나보실 수 있습니다.' },
  { icon: '', title: '고객님을 위한 특별 이벤트와 경험에 참여하세요.' },
];

const Login = () => {
  //1. 변수
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const { onGoogleLogin, setUser } = useAuthStore();
  const navigate = useNavigate();

  //1-2 구글 로그인
  const handleGoogleLogin = async () => {
    console.log('구글');
    await onGoogleLogin();
    navigate('/');
  };

  //2. 메서드
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // 2. Firebase Auth에서 이메일/비번으로 로그인
      // id 입력값을 "이메일"로 쓰는 구조
      const userCredential = await signInWithEmailAndPassword(auth, id, password);
      const firebaseUser = userCredential.user;

      // 2-1. Firestore users/{uid} 문서 가져오기
      const userDocRef = doc(db, 'users', firebaseUser.uid);
      const userSnap = await getDoc(userDocRef);

      if (!userSnap.exists()) {
        alert('사용자 정보가 존재하지 않습니다. 관리자에게 문의해주세요.');
        return;
      }

      const userData = userSnap.data();

      // 2-2. Zustand 상태에 저장 → persist가 알아서 localStorage까지 저장
      setUser(userData);

      alert(`${userData.name || userData.displayName || '고객'}님, 환영합니다!`);
      navigate('/');
    } catch (err) {
      console.error('로그인 에러:', err);

      if (err.code === 'auth/user-not-found') {
        alert('가입되지 않은 이메일입니다.');
      } else if (err.code === 'auth/wrong-password') {
        alert('비밀번호가 일치하지 않습니다.');
      } else if (err.code === 'auth/invalid-email') {
        alert('이메일 형식이 올바르지 않습니다.');
      } else {
        alert('로그인 중 오류가 발생했습니다.');
      }
    }
  };

  //3.뿌려
  return (
    <section className="login-wrap">
      <div className="login-container">
        <div className="login-inner">
          <h2>SIGN IN</h2>
          <p className="subTitle">미우미우를 찾아주셔서 감사합니다.</p>

          <div className="login-input">
            <form onSubmit={handleLogin}>
              <input
                className="inputID"
                value={id}
                placeholder="이메일 / 휴대폰 번호"
                type="text"
                required
                onChange={(e) => setId(e.target.value)}
              />
              <input
                className="inputPassword"
                value={password}
                placeholder="비밀번호"
                type="password"
                required
                onChange={(e) => setPassword(e.target.value)}
                // name????
              />
            </form>

            <div className="half">
              <p>
                <Link className="link">비밀번호를 잊으셨나요?</Link>
              </p>
              <p>
                <Link to="/Join" className="link">
                  회원가입
                </Link>
              </p>
            </div>

            <div className="button-wrap">
              <p>
                <button type="button" className="btnLogin" onClick={handleLogin}>
                  로그인
                </button>{' '}
              </p>
              <p>
                <button type="button" className="btnGoogle" onClick={handleGoogleLogin}>
                  구글 계정으로 로그인
                </button>
              </p>
            </div>

            <ul className="info">
              {list.map((el, i) => {
                return (
                  <li key={i}>
                    <span className="icon">{el.icon}</span>
                    <span>{el.title}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
