import { useProductsStore } from '../../store/useProductsStore';
import { categoryKorMap } from '../../store/data';
import ProductBanner from './layout/ProductBanner';
import ProductFilterNav from './layout/ProductFilterNav';
import ProductFilterWrap from './layout/ProductFilterWrap';
import './scss/Category1.scss';
import ProductList from './layout/ProductList';
import { CustomItem } from '../../store/data';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import ProductListSkeleton from './layout/ProductListSkeleton';
const Category1 = () => {
  const { category1, category2, tags } = useParams();
  const { items, filterCategory1, onCustomStyle } = useProductsStore();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [extraFilteredList, setExtraFilteredList] = useState(null);
  const [custom, setCustom] = useState(false);
  const navigate = useNavigate();

  // TODO Category1/Category2 기준 필터링 전체 로직
  let filtered = [];

  if (category1 && category2) {
    if (category1 === 'CustomStudio') {
      filtered = onCustomStyle(category2); // 계산만! store 변경 없음
    } else {
      filtered = items.filter(
        (item) => item.category1 === category1 && item.category2 === category2
      );
    }
  } else if (category1) {
    filtered = items.filter((item) => item.category1 === category1);
  } else {
    filtered = items;
  }

  console.log('filtered??:,', category1, category2, filtered);

  useEffect(() => {
    if (category1 === 'CustomStudio') {
      setCustom(true);
    } else {
      setCustom(false);
    }
  }, [category1]);

  let category2List = [];

  if (category1 === 'CustomStudio') {
    // CustomStudio 전용 탭 (Closet / Custom)
    category2List = Array.from(new Set(CustomItem.map((i) => i.style)));
  } else {
    // 일반 카테고리일 때 → 실제 제품의 category2 기준
    category2List = Array.from(
      new Set(items.filter((item) => item.category1 === category1).map((item) => item.category2))
    );
  }

  //  TODO Category 클릭 시 이동
  // -----------------------------------------
  const handleCategoryClick = (sub) => {
    navigate(`/${category1}/${sub}`);
    setTimeout(() => {
      window.scrollTo({
        top: 700,
        // behavior: "smooth",
      });
    }, 100);
  };

  //  필터 적용
  // -----------------------------------------
  const handleApplyFilter = (filters) => {
    let result = [...filtered];

    if (filters.collection) {
      result = result.filter((item) => item.tags === filters.collection);
    }

    if (filters.fabric) {
      result = result.filter((item) => {
        if (!item.material) return false;
        const cleanMaterial = item.material.replace(/^주\s*소재:\s*/g, '').trim();
        return cleanMaterial === filters.fabric;
      });
    }

    if (filters.sort) {
      switch (filters.sort) {
        case 'name-asc':
          result.sort((a, b) => a.name.localeCompare(b.name));
          break;
        case 'name-desc':
          result.sort((a, b) => b.name.localeCompare(a.name));
          break;
        case 'price-asc':
          result.sort((a, b) => {
            const priceA = parseInt(a.price.replace(/[^\d]/g, '')) || 0;
            const priceB = parseInt(b.price.replace(/[^\d]/g, '')) || 0;
            return priceA - priceB;
          });
          break;
        case 'price-desc':
          result.sort((a, b) => {
            const priceA = parseInt(a.price.replace(/[^\d]/g, '')) || 0;
            const priceB = parseInt(b.price.replace(/[^\d]/g, '')) || 0;
            return priceB - priceA;
          });
          break;
        default:
          break;
      }
    }

    if (!filters.collection && !filters.fabric && !filters.sort) {
      setExtraFilteredList(null);
    } else {
      setExtraFilteredList(result);
    }

    setIsFilterOpen(false);
  };

  const handleFilterChange = (result) => {
    if (!result || result.length === 0) {
      setExtraFilteredList(null);
    } else {
      setExtraFilteredList(result);
    }
  };

  const handleOpenFilter = () => setIsFilterOpen(true);
  const handleCloseFilter = () => setIsFilterOpen(false);

  // -----------------------------------------
  //TODO 필터 리스트 생성
  // -----------------------------------------
  const collectionArray = Array.from(new Set(filtered.map((item) => item.tags).filter(Boolean)));

  const fabricArray = Array.from(
    new Set(
      filtered
        .map((item) => {
          if (!item.material) return null;
          return item.material.replace(/^주\s*소재:\s*/g, '').trim();
        })
        .filter(Boolean)
    )
  );

  const categoryName =
    categoryKorMap.find(
      (c) =>
        (c.eng || '').toLowerCase() === (category1 || '').toLowerCase() ||
        (c.eng || '').toLowerCase() === (tags || '').toLowerCase()
    )?.kor ||
    category1 ||
    tags;

  return (
    <div className="Category1">
      <ProductBanner korTitle={categoryName} bannerTitle={category1} />
      <div className="inner">
        <ProductFilterNav
          category1={category1}
          category2={category2}
          list={items}
          sendClick={handleCategoryClick}
          onOpenFilter={handleOpenFilter}
          category2List={category2List}
          custom={custom}
        />

        {/*TODO 필터 적용된 리스트가 있으면 그걸 표시 */}

        {!items ? (
          <ProductListSkeleton />
        ) : (
          <ProductList filteredList={extraFilteredList ?? filtered} />
        )}

        {isFilterOpen && (
          <ProductFilterWrap
            collection={collectionArray}
            fabric={fabricArray}
            isOpen={isFilterOpen}
            onClose={handleCloseFilter}
            onApplyFilter={handleApplyFilter}
          />
        )}
      </div>
    </div>
  );
};

export default Category1;
