import React, { useEffect, useRef, useState } from 'react';
import './scss/Local.scss';
import { locations } from '../../api/storeInfo';
import Textinput from '../../component/input/Textinput';

const Local = () => {
  const mapContainer = useRef(null);
  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState([]);
  const [what, setWhat] = useState(1);
  const inputRef = useRef(null);
  const [searchKeyword, setSearchKeyword] = useState('');

  //TODO input 검색창 값 가지고와서 소문자로 확인
  useEffect(() => {
    const inputEl = inputRef.current?.querySelector('input');
    if (!inputEl) return;

    const handleInput = (e) => {
      setSearchKeyword(e.target.value.toLowerCase()); //
    };

    inputEl.addEventListener('input', handleInput);
    return () => {
      inputEl.removeEventListener('input', handleInput);
    };
  }, []);

  const filteredLocations = locations.filter(
    (loc) =>
      loc.name.toLowerCase().includes(searchKeyword) ||
      loc.address.toLowerCase().includes(searchKeyword)
  );

  const handleLocation = (el) => {
    setWhat(el.id);
    addMarker(el);
  };
  //TODO kakao map API
  //TODO  Kakao Maps API 스크립트 로드
  useEffect(() => {
    const script = document.createElement('script');
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=8484dc80b747823a0fb84c1e74ae6123&autoload=false`;
    script.async = true;

    script.onload = () => {
      // 스크립트 로드 완료 후 지도 초기화
      window.kakao.maps.load(() => {
        const container = mapContainer.current;
        const options = {
          center: new window.kakao.maps.LatLng(37.5112, 127.0598), // 강남점 기본
          level: 5,
        };
        const kakaoMap = new window.kakao.maps.Map(container, options);
        setMap(kakaoMap);
      });
    };

    document.head.appendChild(script);

    // 클린업: 컴포넌트 언마운트 시 스크립트 제거 (선택사항)
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  //TODO 마커 생성 함수
  const addMarker = (location) => {
    if (!map) return;

    // 기존 마커 제거
    markers.forEach((marker) => marker.setMap(null));
    const markerPosition = new window.kakao.maps.LatLng(location.lat, location.lng);

    // 커스텀 마커 이미지 추가
    const imageSrc = '/assets/images/static/map/mapPin_black.png';
    const imageSize = new window.kakao.maps.Size(40, 50);
    const imageOption = { offset: new window.kakao.maps.Point(20, 50) };

    const markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);

    // 마커 생성
    const marker = new window.kakao.maps.Marker({
      position: markerPosition,
      image: markerImage,
    });

    marker.setMap(map);
    setMarkers([marker]);

    // 지도 중심 이동
    map.setCenter(markerPosition);
    map.setLevel(3);

    // 인포윈도우
    const infowindow = new window.kakao.maps.InfoWindow({
      content: `
      <div style="padding:10px; min-width:150px; height: 60px; display: flex; justify-content: center; align-items: center; text-align:center">
        <h4 style="margin:0 0 5px 0; font-size:14px;">${location.name}</h4>
      </div>
    `,
    });

    infowindow.open(map, marker);
  };

  const StoreOpenNow = (store) => {
    //TODO 오늘 날짜정보를 가지고 와서 요일을 문자열로 변환
    const now = new Date();
    const dayCode = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'][now.getDay()];
    const todayStr = now.toISOString().split('T')[0];

    //TODO 매장 휴무일 여부 체크
    if (store.closedDays?.includes(dayCode)) {
      return false;
    }

    //TODO 매장 휴무일 여부 체크
    const nowTime = now.getHours() * 60 + now.getMinutes();
    if (store.closedDates?.includes(todayStr)) return false;

    //TODO시간 날짜 가지고 와서 분 단위로 환산
    const todayHours = store.openHours?.[dayCode];
    if (!todayHours) return false;

    const [openH, openM] = todayHours.open.split(':').map(Number);
    const [closeH, closeM] = todayHours.close.split(':').map(Number);
    const openTime = openH * 60 + openM;
    const closeTime = closeH * 60 + closeM;

    return nowTime >= openTime && nowTime <= closeTime;
  };

  return (
    <section className="Local-wrap">
      <div className="sidebar">
        <div className="fixed-wrap">
          <h2>구매가능 매장 찾기</h2>
          <div className="input-wrap" ref={inputRef}>
            <Textinput title="korea" />
          </div>
        </div>

        <div className="location-buttons">
          <div className="location-btn-wrap">
            {filteredLocations.map((location) => (
              <button
                key={location.id}
                className={` location-btn ${location.id === what ? 'active' : ''} `}
                onClick={() => handleLocation(location)}>
                <span className="location-name">{location.name}</span>
                <span className="location-address">{location.address}</span>
                <span className="location-tel">+82 {location.tel}</span>
                <span className={`location-status ${StoreOpenNow(location) ? 'open' : 'closed'}`}>
                  {StoreOpenNow(location) ? '영업 중' : '영업 종료'}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="map-wrap">
        <div className="kakaoMap" ref={mapContainer} />
      </div>
    </section>
  );
};
export default Local;
