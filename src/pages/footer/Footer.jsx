import React from 'react';
import './scss/footer.scss';
import Logo from '../../component/layout/Logo';
import { Link } from 'react-router-dom';

const footerModalMenu = [
  { name: '이용약관', className: 'TermsOfService' },
  { name: '개인정보 처리방침', className: 'PrivacyPolicy' },
  { name: '쿠키 정책', className: 'CookiePolicy' },
  { name: '판매 약관', className: 'ProductPurchaseTerms' },
];

const Footer = ({ openModal }) => {
  const handleModalOpen = (el) => {
    // 부모 컴포넌트에게 모달을 열고, 제목과 렌더링 키를 전달합니다.
    openModal(el.name, el.className);
  };

  return (
    <footer>
      <div className="inner">
        <div className="footer-top">
          <div className="footer-logo">
            <Logo color="black" />
          </div>
          <div className="footer-right">
            <div className="menu-box">
              <ul>
                {' '}
                {footerModalMenu.map((el, i) => (
                  <li key={i}>
                    <Link
                      href="#" // 페이지 이동 방지를 위해 # 또는 to={null}
                      className={`link ${el.className}`}
                      onClick={(e) => {
                        e.preventDefault(); // 기본 링크 이동 방지
                        handleModalOpen(el);
                      }}
                    >
                      {el.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <address>
            <p>
              회사명: 프라다 코리아 (유). 사업자등록번호: 213-86-18599. 대표자: 최문영. 개인정보
              보호책임자: 조우제. 통신판매신고번호: 2017-서울강남-04082. 주소: 서울시 강남구
              압구정로 439 06010. 클라이언트 서비스: 080-522-7198.
              이메일: CLIENT.SERVICE.KR@MIUMIU.COM.
            </p>
            <p>
              법적고지 및 이용약관 (링크를 확인하세요). 호스팅 서비스: WIIT. 구매안전서비스: NHN한국
              사이버결제 주식회사에 가입하여 고객님의 안전한 거래를 보장하고 있습니다. 모든제품은
              2016년 1월 이후 생산된 제품 입니다.
            </p>
          </address>
          <p className="copy">© PRADA 2005 - 2025 | Tax registration number is 213-86-18599</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
