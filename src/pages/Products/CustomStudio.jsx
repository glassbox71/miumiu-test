import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { special } from '../../store/data'; // SpecialCo.jsx와 동일한 경로
import ProductBanner from './layout/ProductBanner';
import { useProductsStore } from '../../store/useProductsStore';

const CustomStudio = () => {
  const { items, onFetchItems } = useProductsStore();
  // TODO: URL 파라미터에서 id 가져오기
  const { id } = useParams();
  // TODO: special 배열에서 imgUrl과 일치하는 데이터 찾기
  const data = special.find((item) => item.imgUrl === id);

  useEffect(() => {
    onFetchItems(); // 상품 불러오기
  }, []);

  // TODO: 찾은 데이터에서 필요한 값 추출
  const bannerTitle = data?.title;
  const korTitle = data?.subTitle;
  const customImgKey = data?.imgUrl;

  console.log('id:', id);
  console.log('data:', data);
  console.log('customImgKey:', customImgKey);

  return (
    <div className="CustomStudio">
      <ProductBanner customImgKey={customImgKey} bannerTitle={bannerTitle} korTitle={korTitle} />
      {/* <ProductFilterNav /> */}

      <div className="productList">
        <p>zzzzzzzzzzzzzzzz</p>
      </div>
    </div>
  );
};

export default CustomStudio;
