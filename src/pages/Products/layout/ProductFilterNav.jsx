import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductFilterNav = ({
  category1,
  category2,
  sendClick,
  list,
  onOpenFilter,
  category2List,
  custom,
}) => {
  const navigate = useNavigate();
  const cateObj = Array.from(
    new Map(
      list
        .filter((item) => item.category1 === category1)
        .map((el) => [
          el.category2,
          {
            kor2: el.categoryKor2,
            cate: el.category1, //
            cate2: el.category2,
          },
        ])
    ).values()
  );

  console.log(cateObj, '한글???????');

  return (
    <div className="ProductNav">
      <div className="nav-inner">
        <ul className="cate2-list">
          <li className={!category2 ? 'active' : ''} onClick={() => navigate(`/${category1}`)}>
            전체
          </li>

          {/* 여기서 props로 받은 category2List만 사용!! */}
          {custom
            ? category2List.map((sub, idx) => (
                <li key={idx}>
                  <button
                    className={category2 === sub ? 'active' : ''}
                    onClick={() => sendClick(sub)}>
                    {sub}
                  </button>
                </li>
              ))
            : cateObj.map((sub, idx) => (
                <li key={idx}>
                  <button
                    className={category2 === sub.cate2 ? 'active' : ''}
                    onClick={() => sendClick(sub.cate2)}>
                    {sub.kor2}
                  </button>
                </li>
              ))}
        </ul>

        <div className="button-wrap">
          {/* ✅ 여기서 필터 랩 열기 */}
          <button
            type="button"
            onClick={() => {
              if (onOpenFilter) onOpenFilter();
            }}>
            필터 및 정렬
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductFilterNav;
