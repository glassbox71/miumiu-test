// src/pages/Products/AllProducts.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import ProductBanner from './layout/ProductBanner';
import ProductFilterNav from './layout/ProductFilterNav';
import ProductList from './layout/ProductList';
import ProductFilterWrap from './layout/ProductFilterWrap';
import { useProductsStore } from '../../store/useProductsStore';

const AllProducts = () => {
  const { category1, category2, tags } = useParams();

  const { filtered, onFetchItems, onCateOnly, onCateTag, onCate1 } = useProductsStore();

  // 검색/필터(nav에서 온 결과)로 추가 필터링된 리스트
  const [extraFilteredList, setExtraFilteredList] = useState(null);
  // 필터 모달 ON/OFF
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // 🔥 부모가 가지고 있는 필터 상태 (정렬/컬렉션/소재)
  const [filterState, setFilterState] = useState({
    collection: '',
    fabric: '',
    sort: '',
  });

  // 전체 상품 또는 카테고리 기준 상품 가져오기
  useEffect(() => {
    onFetchItems();
  }, [onFetchItems]);

  // URL 기준으로 카테고리 필터
  useEffect(() => {
    if (category1 && category2 && tags) {
      onCateOnly(category1, category2);
    } else if (category1 && tags && !category2) {
      onCateTag(category1, tags);
    } else if (category1 && category2 && !tags) {
      onCateOnly(category1, category2);
    } else if (category1 && !category2 && !tags) {
      onCate1(category1);
    }
  }, [category1, category2, tags, onCateOnly, onCateTag, onCate1]);

  // 기본 리스트(스토어에서 필터된 리스트)
  const baseList = filtered || [];

  // 상단 ProductFilterNav(검색/슬라이더 등)의 결과 반영
  const handleFilterChange = (result) => {
    if (!result || result.length === 0) {
      setExtraFilteredList(null);
    } else {
      setExtraFilteredList(result);
    }
  };

  // 필터 모달 열기/닫기
  const handleOpenFilter = () => setIsFilterOpen(true);
  const handleCloseFilter = () => setIsFilterOpen(false);

  // 🔥 필터 모달에서 "필터 적용하기" 눌렀을 때
  const handleApplyFilter = (filters) => {
    // 선택된 필터 상태를 부모에 저장 → 다음에 모달 열 때 그대로 넘겨줌
    setFilterState(filters);

    let result = baseList;

    // 컬렉션 필터
    if (filters.collection) {
      result = result.filter((item) => item.collection === filters.collection);
    }

    // 소재 필터
    if (filters.fabric) {
      result = result.filter((item) => item.fabric === filters.fabric);
    }

    // 정렬 필터
    if (filters.sort) {
      const sorted = [...result];

      switch (filters.sort) {
        case 'name-asc':
          sorted.sort((a, b) => (a.name || '').localeCompare(b.name || ''));
          break;
        case 'name-desc':
          sorted.sort((a, b) => (b.name || '').localeCompare(a.name || ''));
          break;
        case 'price-asc':
          sorted.sort((a, b) => {
            const pa =
              typeof a.price === 'number'
                ? a.price
                : parseInt(String(a.price).replace(/[^0-9]/g, ''), 10) || 0;
            const pb =
              typeof b.price === 'number'
                ? b.price
                : parseInt(String(b.price).replace(/[^0-9]/g, ''), 10) || 0;
            return pa - pb;
          });
          break;
        case 'price-desc':
          sorted.sort((a, b) => {
            const pa =
              typeof a.price === 'number'
                ? a.price
                : parseInt(String(a.price).replace(/[^0-9]/g, ''), 10) || 0;
            const pb =
              typeof b.price === 'number'
                ? b.price
                : parseInt(String(b.price).replace(/[^0-9]/g, ''), 10) || 0;
            return pb - pa;
          });
          break;
        default:
          break;
      }

      result = sorted;
    }

    setExtraFilteredList(result);
    setIsFilterOpen(false);
  };

  // 최종 화면에 보여줄 리스트
  const displayList = extraFilteredList || baseList;

  // 필터용 옵션 배열 추출
  const collectionArray = Array.from(
    new Set(baseList.map((item) => item.collection).filter(Boolean))
  );
  const fabricArray = Array.from(new Set(baseList.map((item) => item.fabric).filter(Boolean)));

  return (
    <>
      <ProductBanner />
      <ProductFilterNav
        list={baseList}
        query={true}
        onFilter={handleFilterChange}
        onOpenFilter={handleOpenFilter}
      />
      <ProductList filteredList={displayList} />

      <ProductFilterWrap
        collection={collectionArray}
        fabric={fabricArray}
        isOpen={isFilterOpen}
        onClose={handleCloseFilter}
        onApplyFilter={handleApplyFilter}
        selectedFilter={filterState} // 🔥 이걸로 모달 다시 열 때 이전 선택값 유지
      />
    </>
  );
};

export default AllProducts;
