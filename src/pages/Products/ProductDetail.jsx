import React, { useEffect, useState } from "react";
import Button from "../../component/layout/Button";
import "./scss/ProductDetail.scss";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useProductsStore } from "../../store/useProductsStore";
import ProductDetailSkeleton from "./layout/ProductDetailSkeleton";
import ProductDetailNav from "./layout/ProductDetailNav";
import ProductShoesSize from "./layout/ProductShoesSize";
import "./scss/ProductDetail.scss";
import CartList from "./CartList";
import { useAuthStore } from "../../api/authStore";

const ProductDetail = () => {
  const { id } = useParams();

  // wishList 같이 가져오기 (하트 초기 상태용)
  const {
    items,
    onFetchItems,
    onAddToCart,
    onToggleWish,
    setShowWish,
    wishList,
  } = useProductsStore();

  // 상품을 저장하는 변수
  const [product, setProduct] = useState(null);
  // 이미지를 저장하는 변수 (초기값 null로!)
  const [mainImage, setMainImage] = useState(null);
  // 연관 아이템
  const [relatedProducts, setRelatedProducts] = useState([]);
  // const [count, setCount] = useState(1);
  // 수량은 변경 기능 없으므로 상수
  const count = 1;
  // 장바구니 리스트 팝업
  const [showCartPopup, setShowCartPopup] = useState(false);
  // 로그인 유무
  const { user } = useAuthStore();
  // 하트아이콘 상태변환
  const [isWished, setIsWished] = useState(false);

  const navigate = useNavigate();

  // 데이터 존재 여부 확인하여 데이터 가지고 오기
  useEffect(() => {
    if (items.length === 0) {
      onFetchItems();
    }
  }, [items.length, onFetchItems]);

  // 불러와질 상품 찾기
  useEffect(() => {
    const findItem = items.find((item) => item.id === id);
    setProduct(findItem || null);
  }, [id, items]);

  // 메인 이미지 찾기
  useEffect(() => {
    const firstUrl = product?.detail_images?.[0]?.url;
    if (firstUrl) {
      setMainImage(firstUrl); // string
    } else {
      setMainImage(null); // 없으면 null
    }
  }, [product]);

  // 현재 상품이 위시리스트에 있으면 isWished true로
  useEffect(() => {
    if (!product?.id) return;
    if (!wishList) return;

    const exist = wishList.some((item) => item.id === product.id);
    setIsWished(exist);
  }, [wishList, product]);

  // 연관 상품 4개 추출
  useEffect(() => {
    if (product) {
      const related = items.filter(
        (item) => item.id !== product.id && item.category2 === product.category2
      );
      const shuffled = [...related].sort(() => 0.5 - Math.random());
      setRelatedProducts(shuffled.slice(0, 4));
    }
  }, [product, items]);

  console.log(product, "상세페이지 상품");

  // Shipping 페이지로 연결
  const handleShipping = () => {
    if (!product) return;

    const productCart = {
      ...product,
      cartImg:
        product?.detail_images?.[0]?.url ||
        "/assets/images/default-product-image.png",
      count: 1,
      price: parseInt(product?.price?.replace(/[^0-9]/g, ""), 10),
    };

    onAddToCart(productCart);
    navigate("/shipping");
  };

  // 장바구니 팝업 연결
  const handleCart = () => {
    if (!product) return;

    const productCart = {
      ...product,
      cartImg:
        product?.detail_images?.[0]?.url ||
        "/assets/images/default-product-image.png",
      count: 1,
      price: parseInt(product?.price?.replace(/[^0-9]/g, ""), 10),
    };

    onAddToCart(productCart);
    setShowCartPopup(true);
  };

  const popUpClose = () => {
    setShowCartPopup(false);
  };

  const handleScroll = (targetID) => {
    const target = document.getElementById(targetID);

    if (target) {
      const navHeight = 300;
      const elementPosition = target.getBoundingClientRect().top;
      const offset = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });
    } else {
      console.warn(`Target element with id #${targetID} not found.`);
    }
  };

  if (!product) {
    return <ProductDetailSkeleton />;
  }

  // 위시 버튼 클릭 시
  const handleAddToWish = () => {
    const productWish = {
      ...product,
      count: count,
    };

    onToggleWish(productWish);
    setShowWish(true);
    setIsWished((prev) => !prev);
  };

  return (
    <>
      <section className="ProductDetail-wrap">
        <div className="inner">
          <div className="ProductDetail-top">
            <div className="top-left">
              <div className="main-image">
                {/* mainImage가 있을 때만 렌더링 */}
                {mainImage && (
                  <img src={mainImage} alt={product.name || "상품 이미지"} />
                )}
              </div>
              <ul className="sub-image">
                {product?.detail_images?.map((el, index) => {
                  const url = el?.url;
                  if (!url) return null; // url 없으면 렌더링 안 함

                  return (
                    <li
                      key={index}
                      className={mainImage === url ? "active" : ""}
                    >
                      <img
                        src={url}
                        onClick={() => setMainImage(url)}
                        alt={product.name}
                      />
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="top-right">
              <p className="title">
                <span className="tag">{product.tags ? product.tags : ""}</span>

                <button
                  className={`wish-icon ${isWished ? "active" : ""}`}
                  onClick={handleAddToWish}
                ></button>
              </p>
              <h3>{product.name}</h3>
              <p className="price">{product.price}</p>

              <div className="price-button-wrap">
                <Button onClick={handleCart} title="장바구니 담기" />
                {user ? (
                  <Button onClick={handleShipping} title="구매하기" />
                ) : (
                  <Button onClick={() => navigate(`/login`)} title="구매하기" />
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="ProductDetail-bottom">
          <ProductDetailNav
            onScroll={handleScroll}
            onCart={handleCart}
            onShipping={handleShipping}
          />
          <div className="inner">
            <div className="product-info" id="detail-info">
              <ul className="info-list ">
                {product?.detail_images?.map((el, index) => {
                  const url = el?.url;
                  if (!url) return null; // 여기서도 url 없으면 스킵

                  return (
                    <React.Fragment key={index}>
                      <li>
                        <img src={url} alt={product.name} />
                      </li>

                      {index === 1 && (
                        <div className="product-acc-info " id="info-text">
                          <div className="info">
                            <h4>{product.name}</h4>
                            <p>{product.subtitle}</p>
                          </div>
                        </div>
                      )}

                      {index === 3 && (
                        <div
                          className="product-acc-info flex "
                          id="product-size"
                        >
                          <div className="info">
                            <h4>사이즈</h4>
                            <ul>
                              {product.size_info.map((el, i) => {
                                return <li key={i}>· {el}</li>;
                              })}
                            </ul>
                          </div>

                          <div className="info">
                            <h4>소재</h4>
                            <ul>
                              <li>· {product.material}</li>
                            </ul>
                          </div>

                          <div className="info">
                            <h4>추가 정보 </h4>
                            <ul>
                              {product.bullet_points.map((el, i) => {
                                return <li key={i}>· {el}</li>;
                              })}
                            </ul>
                          </div>
                        </div>
                      )}
                    </React.Fragment>
                  );
                })}
              </ul>
              {product.category1 === "shoes" && <ProductShoesSize />}
            </div>
          </div>
        </div>
      </section>

      <section className="RelatedProducts">
        <h3>관련 제품</h3>
        <ul className="products-wrap">
          {relatedProducts.map((item) => (
            <li key={item.id}>
              <Link to={`/product/${item.id}`}>
                <img
                  src={
                    item.detail_images?.[0]?.url
                      ? item.detail_images[0].url
                      : "/assets/images/default-product-image.png"
                  }
                  alt={item.name}
                />
                <div className="product-text-box">
                  <h3>{item.name}</h3>
                  <p>{item.price}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {showCartPopup && (
        <CartList
          onClose={() => setShowCartPopup(false)}
          onClick={popUpClose}
        />
      )}
    </>
  );
};

export default ProductDetail;
