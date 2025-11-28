<script
  type="text/javascript"
  src="//dapi.kakao.com/v2/maps/sdk.js?appkey=8484dc80b747823a0fb84c1e74ae6123"></script>;

//TODO 카카오 지도 API
const kakaoMap_API = () => {
  return new Promise((resolve, reject) => {
    if (window.kakao && window.kakao.maps) {
      resolve(window.kakao);
      return;
    }

    const script = document.createElement('script');
    script.scr = script.async = true;

    script.onerror = () => {
      reject(new Error('kakao map API 로드 실패'));
    };
    document.head.appendChild(script);
  });
};
