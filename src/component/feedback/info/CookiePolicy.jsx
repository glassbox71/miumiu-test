import React from 'react';

//TODO 쿠키 정책
const CookiePolicy = () => {
  return (
    <div className="CookiePolicy">
      <ul>
        <li className="title">쿠키의 이용에 관한 추가 정보</li>
        <li>
          대한민국 서울에 본사를 두고 웹사이트 https://miumiu.com/kr/ko.html (이하 “사이트”)에서
          제공되고 한국에서 배송되는 상품을 직접 판매하고 있는 프라다 코리아 (이하 “회사”)는, 회사의
          모회사이면서 프라다 그룹의 운영지주회사이자 www.miumiu.com 브랜드 website 의 관리자인
          Prada S.p.A., 이탈리아, 밀라노(이하와 총칭하여 “프라다”)와 함께 다음과 같이 사이트의 쿠키
          이용에 관한 정보를 제공합니다.
        </li>
      </ul>

      <ul>
        <li className="title">쿠키는 무엇인가요?</li>
        <li>
          쿠키는 귀하가 방문하는 웹사이트의 인터넷(보통은 귀하의 브라우저)에 접근 시 귀하가 사용하는
          터미널로 보내지는 작은 문자 파일입니다. 쿠키는 귀하가 해당 웹사이트를 추후 방문 시 인식될
          수 있도록 귀하의 컴퓨터나 디바이스에 저장됩니다. 각 쿠키는 사이트에 접속하기 위하여
          이용되는 브라우저와 디바이스를 위한 특유한 것입니다.
        </li>
        <li>
          쿠키는 다른 쿠키의 데이터를 보거나 검색하거나, 컴퓨터 바이러스를 전송하거나, 전자 메일
          주소를 식별 및 사용할 수 없으며, 장치에 저장된 파일 또는 데이터를 캡처할 수도 없습니다.
        </li>
        <li>
          쿠키는 이용자가 방문하는 웹사이트의 소유자에 의하여 설치되거나(“당사자 쿠키”) 다른
          웹사이트에 의하여 설치됩니다(“제3자 쿠키”).
        </li>
        <li className="mb">
          쿠키는 이용자의 만료 또는 이용자의 삭제 시까지 디바이스에 영구적으로 보관되거나(“지속적
          쿠키”), 사이트 브라우징 세션이 종료하거나 브라우저를 닫는 때에 자동적으로 삭제될 수
          있습니다 (“세션 쿠키”).
        </li>
        <li className="mb">쿠키는 사이트의 올바른 기능을 보장하고 보다 나은 경험을 제공합니다</li>
        <li>• 네비게이션 설정 유지</li>
        <li>• 방문자의 선호 사항 기억</li>
        <li>• 전체적인 사용자 경험 개선</li>
        <li>• 반복 광고 노출 횟수 제한</li>
      </ul>

      <ul>
        <li className="title">사이트에서 이용되는 쿠키</li>
        <li>사이트에서 이용되는 쿠키는 아래 표에 표시된 바와 같습니다</li>
      </ul>

      <p className="bold mb">당사자 쿠키</p>
      <table className="cookie-table PrivacyPolicy_3 mb">
        <tbody>
          <tr>
            <th className="label">분류</th>
            <td>
              <strong>필수 쿠키</strong>
            </td>
          </tr>
          <tr>
            <th className="label">종류</th>
            <td>기술적 쿠키</td>
          </tr>
          <tr>
            <th className="label">목적</th>
            <td>
              이러한 쿠키는 웹 사이트 작동에 필요하므로 시스템에서 비활성화할 수 없습니다.
              일반적으로 웹 사이트의 예약된 영역에 액세스하기 위한 구입 또는 인증과 같은 서비스
              요청을 구성하는 사용자의 작업에 대해서만 설정됩니다. 엄격히 필요한 쿠키는 사용자의
              동의가 단말기에 배치될 필요가 없습니다.
              <br />
              이러한 쿠키를 차단하거나 알리도록 브라우저를 설정할 수 있지만 결과적으로 웹 사이트의
              일부 기능이 작동하지 않습니다. 이러한 쿠키는 개인 정보를 저장하지 않습니다.
            </td>
          </tr>
          <tr>
            <th className="label">기간</th>
            <td>세션 및 지속</td>
          </tr>
        </tbody>
      </table>

      {/* 제 3자 쿠키 */}

      <p className="bold mb">제3자 쿠키</p>
      <table className="cookie-table PrivacyPolicy_4">
        <tbody>
          <tr>
            <th className="label">분류</th>
            <td colSpan="6">기본 설정 쿠키</td>
          </tr>
          <tr>
            <th className="label">종류</th>
            <td colSpan="6">기술적 쿠키</td>
          </tr>

          <tr>
            <th className="label">목적</th>
            <td colSpan="6">
              이러한 쿠키를 통해 웹 사이트는 제공된 서비스를 개선하기 위해 사용자가 선택한 기준(예:
              구입을 위해 선택한 언어 또는 제품)에 따라 기능 및 개인 설정을 제공할 수 있습니다.
              기능성 쿠키는 웹사이트가 작동하기 위해 꼭 필요한 것은 아니지만, 검색 품질과 경험을
              향상시킨다. 이러한 쿠키를 허가하지 않으면 이러한 서비스의 일부 또는 전체가 올바르게
              작동하지 않을 수 있습니다.
            </td>
          </tr>

          <tr>
            <th className="label">제목</th>
            <td colSpan="6">기술적 쿠키</td>
          </tr>

          <tr>
            <th className="label">기간</th>
            <td colSpan="6">지속</td>
          </tr>

          <tr>
            <th className="label">타사 개인정보 보호 정책 및 옵션 아웃 링크</th>
            <td colSpan="6">
              For more information: https://www.adobe.com/privacy/policy.html
              <br />
              Opt-out: https://www.pradapsa.d3.sc.omtrdc.net/optout.html
            </td>
          </tr>
          <tr>
            <th className="label">분류</th>
            <td colSpan="6">통계 쿠키</td>
          </tr>

          <tr>
            <th className="label">종류</th>
            <td colSpan="6">분석 쿠키</td>
          </tr>

          <tr>
            <th className="label">목적</th>
            <td colSpan="6">
              이러한 쿠키는 방문자 수, 조회 페이지 등 웹사이트 이용 데이터를 수집하여 통계 분석을
              가능하게 합니다.
            </td>
          </tr>
          <tr>
            <th className="label">제목</th>
            <td>Adobe Analytics</td>
            <td>Google Analytics</td>
            <td>Contentsquare</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>

          <tr>
            <th className="label">기간</th>
            <td colSpan={2} className="bg text-center border">
              세션 및 지속
            </td>
            <td colSpan={2} className="bg text-center border">
              지속
            </td>
            <td colSpan={2} className="bg text-center border">
              세션 및 지속
            </td>
          </tr>

          <tr>
            <th className="label">타사 개인정보 보호 정책 및 옵션 아웃 링크</th>
            <td className="section" colSpan={2}>
              더 많은 정보를 위하여 아래 링크를 클릭하세요
              <br />
              http://www.adobe.com/privacy/policy.html
              <br />
              쿠키의 거부를 위하여 아래 링크를 클릭하세요 <br />
              http://www.pradapsa.d3.sc.omtrdc.net/optout.html
            </td>
            <td className="section" colSpan={2}>
              더 많은 정보를 위하여 아래 링크를 클릭하세요
              <br />
              https://support.google.com/analytics/answer/6004245?hl=en
              <br />
              쿠키의 거부를 위하여 아래 링크를 클릭하세요 <br />
              https://tools.google.com/dlpage/gaoptout?hl=en
            </td>
            <td className="section" colSpan={2}>
              더 많은 정보를 위하여 아래 링크를 클릭하세요
              <br />
              https://contentsquare.com/privacy-center/privacy-policy/
              <br />
              쿠키의 거부를 위하여 아래 링크를 클릭하세요 <br />
              https://contentsquare.com/privacy-center/cookie-policy/
            </td>
          </tr>

          <tr>
            <th className="label">분류</th>
            <td colSpan="6">마케팅 쿠키</td>
          </tr>

          <tr>
            <th className="label">종류</th>
            <td colSpan="6">쿠키 대상 지정/광고</td>
          </tr>

          <tr>
            <th className="label">목적</th>
            <td colSpan="6">
              이러한 쿠키는 브라우징에 필수적이지는 않지만 탐색 중에 표시되는 기본 설정을 반영하는
              개인화된 광고를 만드는 데 유용합니다. 이러한 쿠키는 타사에서 릴리스 및 관리하며
              사용자의 동의가 필요합니다. 이러한 쿠키를 거부할 경우, 인터넷을 탐색할 때 광고(저희
              회사 포함)가 계속 표시됩니다. 단, 사용자의 개인 관심사에 특정되지 않으므로 관련성이
              떨어집니다.
            </td>
          </tr>

          <tr>
            <th className="label">제목</th>
            <td className="bg keep-all">Adobe Audience Manager</td>
            <td className="bg keep-all">Google DoubleClick</td>
            <td className="bg keep-all">Facebook</td>
            <td className="bg keep-all">Bing</td>
            <td className="bg keep-all">Twitter</td>
            <td className="bg keep-all">Kakao</td>
          </tr>

          <tr>
            <th className="label">기간</th>
            <td className="text-center">지속</td>
            <td className="text-center">지속</td>
            <td className="text-center">지속</td>
            <td className="text-center">지속</td>
            <td className="text-center">지속</td>
            <td className="text-center">지속</td>
          </tr>

          <tr>
            <th className="label">타사 개인정보 보호 정책 및 옵션 아웃 링크</th>
            <td className="text-center text-top">
              더 많은 정보를 위하여 아래 링크를 클릭하세요
              <br />
              https://www.adobe.com/privacy/policy.html
              <br />
              쿠키의 거부를 위하여 아래 링크를 클릭하세요
              <br />
              https://www.adobe.com/privacy/opt-out.html
            </td>
            <td className="text-center text-top">
              더 많은 정보를 위하여 아래 링크를 클릭하세요
              <br />
              https://business.safety.google/privacy/
              <br />
              쿠키의 거부를 위하여 아래 링크를 클릭하세요
              <br />
              https://www.google.com/settings/ads/onweb/
            </td>
            <td className="text-center text-top">
              더 많은 정보를 위하여 아래 링크를 클릭하세요
              <br />
              https://www.facebook.com/help/164968693837950
              <br />
              쿠키의 거부를 위하여 아래 링크를 클릭하세요
              <br />
              https://www.facebook.com/help/568137493302217
            </td>
            <td className="text-center text-top">
              더 많은 정보를 위하여 아래 링크를 클릭하세요
              <br />
              https://privacy.microsoft.com/privacystatement
              <br />
              쿠키의 거부를 위하여 아래 링크를 클릭하세요
              <br />
              go.microsoft.com/fwlink/?LinkID=286759
            </td>
            <td className="text-center text-top">
              더 많은 정보를 위하여 아래 링크를 클릭하세요
              <br />
              https://twitter.com/en/privacy
              <br />
              쿠키의 거부를 위하여 아래 링크를 클릭하세요
              <br />
              https://optout.aboutads.info
            </td>
            <td className="text-center text-top">
              더 많은 정보를 위하여 아래 링크를 클릭하세요
              <br />
              http://rules-ad.kakao.com/policy/privacy
              <br />
              쿠키의 거부를 위하여 아래 링크를 클릭하세요
              <br />
              http://rules-ad.kakao.com/policy/terms
            </td>
          </tr>

          <tr>
            <th className="label">제목</th>
            <td className="bg">Snapchat</td>
            <td className="bg">Google AdWords</td>
            <td className="bg">Daum</td>
            <td className="bg">Naver</td>
            <td className="bg">TikTok</td>
            <td className="bg"></td>
          </tr>

          <tr>
            <th className="label">기간</th>
            <td>지속</td>
            <td>지속</td>
            <td>지속</td>
            <td>지속</td>
            <td>지속</td>
            <td></td>
          </tr>

          <tr>
            <th className="label">타사 개인정보 보호 정책 및 옵션 아웃 링크</th>
            <td className="text-top">
              더 많은 정보를 위하여 아래 링크를 클릭하세요
              <br />
              https://businesshelp.snapchat.com/en-US/article/pixel-about
              <br />
              쿠키의 거부를 위하여 아래 링크를 클릭하세요
              <br />
              https://businesshelp.snapchat.com/en-US/article/pixel-website-install
            </td>

            <td className="text-top">
              더 많은 정보를 위하여 아래 링크를 클릭하세요
              <br />
              https://business.safety.google/privacy/
              <br />
              쿠키의 거부를 위하여 아래 링크를 클릭하세요
              <br />
              https://www.google.com/settings/ads/onweb/
            </td>

            <td className="text-top">
              더 많은 정보와 쿠키의 거부를 위하여 아래 링크를 클릭하세요
              <br />
              https://www.kakao.com/policy/privacy
            </td>
            <td className="text-top">
              더 많은 정보와 쿠키의 거부를 위하여 아래 링크를 클릭하세요
              <br />
              https://policy.naver.com/privacy/privacy_en.html
            </td>
            <td className="text-top">
              더 많은 정보와 쿠키의 거부를 위하여 아래 링크를 클릭하세요
              <br />
              https://www.tiktok.com/legal/privacy-policy-row
            </td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <ul>
        <li className="title">쿠키 기본 설정 동의 및 관리</li>
        <li>사이트의 페이지에 최초로 접근하는 경우, 요약된 정책이 표시된 배너가 게시됩니다.</li>
        <li>사용자에게 표시된 배너의 "동의함" 버튼을 클릭하면 모든 쿠키 사용에 동의하게 됩니다.</li>
        <li>
          동의를 하고 싶지 않거나 동의를 철회하고자 하는 경우,여기를 클릭하거나 배너에 표시된 링크를
          클릭하여 쿠키 설정 서비스를 사용하여 기본 설정을 변경하고 관리할 수 있습니다.
        </li>
        <li>
          귀하의 동의 철회는 철회 이전에 귀하의 동의를 바탕으로 적법성에 영향을 미치지 않습니다.
        </li>
        <li>
          또한 브라우저에서 전체 또는 일부 쿠키 설정을 거부할 수 있는 설정을 활성화하여 웹 사이트
          또는 다른 웹 사이트에서 쿠키를 차단하거나 삭제할 수 있습니다.
        </li>

        <li>귀하는 다음 브라우저들에 대한 거부 방법을 다음 링크에서 찾으실 수 있습니다</li>
        <li>
          -인터넷 익스플로러
          -https://support.microsoft.com/en-us/help/17442/windows-internet-explorer-delete-manage-cookies
        </li>
        <li> -크롬 - https://support.google.com/chrome/answer/95647 </li>
        <li>
          -파이어폭스
          -https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences
        </li>
        <li> -오페라 - http://www.opera.com/help/tutorials/security/privacy/ </li>
        <li> -사파리 - http://support.apple.com/kb/PH17191</li>

        <li>
          쿠키 삭제 또는 차단에 대한 자세한 내용은 http://www.aboutcookies.org 를 참조하십시오.
        </li>
        <li>
          만약 귀하가 필수 쿠키를 포함한 모든 쿠키를 비활성화한다면, 웹사이트 기능의 일부를 사할 수
          없음을 염두에 두시기 바랍니다.예를 들어, 웹사이트의 일부 영역 접속이나 상품 구매가
          불가능해질 수도 있습니다.
        </li>
      </ul>
      <ul>
        <li className="title">제3자 플러그인(Plugins)</li>
        <li>
          또한, 프라다 사이트는 귀하가 프라다 컨텐츠를 귀하가 선호하는 소셜 미디어에서 손쉽게
          공유하는 기능을 제공하는 소셜 미디어 플러그인 및/또는 버튼을 포함하고 있습니다. 이러한
          플러그인은 귀하의 컴퓨터에 어떠한 쿠키도 저장하지 않습니다. 그렇지만 이미 어떤 쿠키가
          귀하의 컴퓨터에 저장되어 있는 경우, 해당 플러그인은 그 쿠키를 인식하고 이용할 수 있습니다.
          이러한 제3자에 의한 개인정보의 수집 및 이용은 그 제3자의 개인정보 처리방침에 따라 이루어
          집니다. 프라다는 그러한 제3자의 개인정보 처리방침을 주의 깊게 읽어볼 것을 권해 드립니다.
        </li>
      </ul>
      <ul>
        <li className="title">기타 웹사이트의 이용</li>
        <li>
          프라다는 귀하에게 사이트에 표시된 링크를 통하여 접속하는 웹사이트들의 개인정보 처리방침 및
          쿠키정책을 읽어보실 것을 추천 드립니다.
        </li>
        <li>
          본 사이트에서의 쿠키 선호 설정은 다른 회사들의 웹사이트에서 저장되지 않는다는 점을
          알려드립니다.
        </li>
      </ul>
      <ul>
        <li className="title">정보의 공개 및 전파 범위</li>
        <li>
          쿠키를 통하여 수집한 정보는 각자의 업무에 따라 그 처리에 대해 정당하게 승인된 프라다 내부
          직원에 의해 처리될 것입니다.
        </li>
        <li>
          또한, 해당 데이터는 기타 프라다의 그룹 기업 또는 프라다를 대신해 기술적 및 운영적 작업을
          수행하는 제삼자 기업 (예: 웹 서비스 제공자)에 의해 접근될 수 있습니다. 이러한 기업의 경우
          데이터 처리자로 지정되며 개인 정보 기밀 유지에 대한 계약상의 의무가 있습니다.
        </li>
        <li>
          쿠키를 통해 수집된 데이터는 해당 법에 따라 필요한 조치와 예방 조처를 취하여 해외로 전송될
          수 있으므로 저희는 데이터 보안과 보호의 적합한 수준을 부여할 수 있습니다. 어떠한 경우에도
          귀하의 데이터가 불확실한 사람에게 공개되거나 전달되지 않습니다.
        </li>
      </ul>
      <ul>
        <li className="title">연락처</li>
        <li>
          프라다 코리아 유한회사(주소: 서울 강남구 압구정로 439 대산빌딩)
          <br />
          이메일:client.service.kr@miumiu.com
        </li>

        <li>
          <strong>Prada S.p.A.</strong>
          <ul className="sub-list">
            <li>주소: Via Antonio Fogazzaro 28 - 20135 Milan, (Italy)</li>
            <li>참조: Data Protection Officer</li>
            <li>e-mail: privacy@prada.com</li>
          </ul>
        </li>

        <li>
          본 쿠키 정책과 관련하여 문의 사항이 있거나 개인정보 보호에 관한 현행 법률(정보통신망
          이용촉진 및 정보보호 등에 관한 법률("정보통신망법") 등), 개인정보 보호법 ("PIPA") 등 관계
          법령 및 유럽연합의 “General Data Protection Regulation EU 2016/679(GDPR)” - 위에 나열된
          주소로 서면 또는 이메일로 문의해 주십시오.
        </li>
      </ul>
      <p className="upDate">마지막 업데이트: 2025. 06. 13</p>
    </div>
  );
};

export default CookiePolicy;
