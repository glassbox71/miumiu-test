// ScrollToTop.js

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  // 1. pathname (경로)과 search (쿼리)를 둘 다 가져옵니다.
  const { pathname, search } = useLocation();

  useEffect(() => {
    // 2. 스크롤을 맨 위로 올립니다.
    window.scrollTo(0, 0);

    // 3. 'pathname' 또는 'search' 둘 중 하나라도 바뀌면
    //    이 useEffect가 실행됩니다.
  }, [pathname, search]);

  return null;
}

export default ScrollToTop;
