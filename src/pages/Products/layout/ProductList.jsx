// src/pages/Products/layout/ProductList.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useProductsStore } from '../../../store/useProductsStore';
import '../scss/ProductList.scss';

const ProductList = ({ filteredList }) => {
  const { filtered } = useProductsStore();

  // 부모에서 내려준 filteredList가 있으면 그걸 우선 사용
  // 없으면 전역 filtered 사용
  const displayList = filteredList || filtered || [];

  return (
    <ul className="product-list">
      {displayList.map((p, index) => (
        <React.Fragment key={p.id ?? index}>
          <li className="item">
            <Link to={`/product/${p.id}`}>
              <img
                src={
                  p.detail_images[0]?.url
                    ? `${p.detail_images[0].url}`
                    : '/assets/images/default-product-image.png'
                }
                alt={p.name}
              />
              <div className="product-text-box">
                <h3>{p.name}</h3>
                <p>{p.price}</p>
              </div>
            </Link>
          </li>
        </React.Fragment>
      ))}
    </ul>
  );
};

export default ProductList;
