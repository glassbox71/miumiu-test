// import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import Button from "../../../component/layout/Button";
import "../scss/ProductNav.scss";
import { useAuthStore } from "../../../api/authStore";

const ProductDetailNav = ({ onScroll, onCart, onShipping }) => {
  const { user } = useAuthStore();
  const navigate = useNavigate();
  const [activeId, setActiveId] = useState("detail-info");

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setActiveId(targetId);
    if (onScroll) {
      onScroll(targetId);
    }
  };
  return (
    <div className="ProductNav">
      <div className="nav-inner">
        <ul>
          <li>
            <Link
               className={`link ${activeId === 'detail-info' ? 'active' : ''}`}
              to="#detail-info"
              onClick={(e) => handleNavClick(e, "detail-info")}
            >
              제품 상세 정보
            </Link>
          </li>
          <li>
            <Link
             className={`link ${activeId === 'info-text' ? 'active' : ''}`}
              to="#info-text"
              onClick={(e) => handleNavClick(e, "info-text")}
            >
              제품 설명
            </Link>
          </li>
          <li>
            <Link
              className={`link ${activeId === 'product-size' ? 'active' : ''}`}
              to="#product-size"
              onClick={(e) => handleNavClick(e, "product-size")}
            >
              제품 세부 정보
            </Link>
          </li>
        </ul>
        <div className="nav-button-wrap">
          <Button onClick={onCart} title="장바구니 담기" />
          {user ? (
            <Button onClick={onShipping} title="구매하기" />
          ) : (
            <Button onClick={() => navigate(`/login`)} title="구매하기" />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailNav;
