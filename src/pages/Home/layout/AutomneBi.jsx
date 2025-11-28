import Logo from '../../../component/layout/Logo';
import React, { useEffect } from 'react';
import WOW from 'wowjs';
import '../scss/AutomneBi.scss';

const AutomneBi = () => {
  useEffect(() => {
    const wow = new WOW.WOW({ live: false });
    wow.init();
  }, []);

  return (
    <section className="AutomneBi">
      <div className="container wow animate__animated animate__fadeInDown" data-wow-delay="0.4s">
        <Logo />

        <b>“Miu Miu Automne – The Essence of Modern Femininity”</b>
        <p>
          과거 코드를 재조명하며, 90년대 미학과 미우미우의 컨템퍼러리 비전을 조화롭게 블렌딩한
          컬렉션입니다.
        </p>
        <p>퍼스널하고 캐주얼한 스타일 스토리 속에서 우아함이 예상치 못한 방식으로 드러납니다.</p>
      </div>
    </section>
  );
};

export default AutomneBi;
