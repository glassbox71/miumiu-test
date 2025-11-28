import React, { useState } from 'react';
import { useAuthStore } from '../../../api/authStore';
import { useProductsStore } from '../../../store/useProductsStore';
import { useNavigate } from 'react-router-dom';
import './WishList.scss';
import './WishListPopup.scss';
import CartList from '../../Products/CartList';

// TODO 찜리스트
const WishList = () => {
  const wishList = useProductsStore((state) => state.wishList);
  const onAddToCart = useProductsStore((state) => state.onAddToCart);
  const onToggleWish = useProductsStore((state) => state.onToggleWish);

  const user = useAuthStore((state) => state.user);
  const fullName = user ? [user.lastName, user.name].filter(Boolean).join('') : '';

  // TODO 삭제 팝업용
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  // TODO 장바구니 추가 확인 팝업용
  const [cartTarget, setCartTarget] = useState(null);
  const [isCartPopupOpen, setIsCartPopupOpen] = useState(false);

  // TODO 장바구니 리스트 팝업
  const [showCartPopup, setShowCartPopup] = useState(false);

  const navigate = useNavigate();

  // TODO 카트 아이콘 클릭 -> 장바구니 추가 팝업 열기
  const handleClickCart = (wish) => {
    setCartTarget(wish);
    setIsCartPopupOpen(true);
  };

  // TODO 장바구니 팝업에서 확인 누르면 장바구니에 추가 + 위시에서 제거
  const handleConfirmCart = () => {
    if (!cartTarget) return;

    const productCart = {
      ...cartTarget,
      cartImg: cartTarget?.detail_images?.[0]?.url,
      count: cartTarget.count || 1,
      price: parseInt(String(cartTarget.price).replace(/[^0-9]/g, ''), 10), // 숫자로 변환
    };

    onAddToCart(productCart); // 장바구니에 추가
    onToggleWish(cartTarget); // 위시리스트에서 제거
    setIsCartPopupOpen(false); // 확인 팝업 닫기
    setShowCartPopup(true); // 장바구니 리스트 팝업 열기
    setCartTarget(null);
  };

  // TODO 장바구니 팝업에서 취소
  const handleCancelCart = () => {
    setCartTarget(null);
    setIsCartPopupOpen(false);
  };

  // TODO 쓰레기통 아이콘 클릭 -> 삭제 팝업 열기
  const handleClickDeleteIcon = (wish) => {
    setDeleteTarget(wish);
    setIsDeleteOpen(true);
  };

  // TODO 삭제 팝업에서 삭제 확인
  const handlePopupDelete = () => {
    if (!deleteTarget) return;
    onToggleWish(deleteTarget);
    setDeleteTarget(null);
    setIsDeleteOpen(false);
  };

  // TODO 삭제 팝업에서 취소 or 바깥 클릭
  const handleCancelDelete = () => {
    setDeleteTarget(null);
    setIsDeleteOpen(false);
  };

  return (
    <div className="container">
      <section className="WishList">
        <div className="WishList-inner">
          <div className="WishList-wrap">
            <h2>{fullName || user?.displayName}님의 위시리스트</h2>
            <div className="WishList-items">
              {wishList.length === 0 ? (
                <div className="wish-empty">
                  <h2>위시리스트가 비어 있습니다.</h2>
                  <p>관심있는 상품을 추가해 보세요</p>
                  <button onClick={() => navigate('/bags')}>쇼핑하러 가기</button>
                </div>
              ) : (
                <ul className="WishList-item">
                  {wishList.map((wish) => (
                    <li key={wish.id || wish.productId}>
                      <div className="img">
                        <img
                          src={
                            wish?.detail_images[0]?.url
                              ? `${wish.detail_images[0]?.url}`
                              : '/assets/images/default-product-image.png'
                          }
                          alt={wish.name}
                        />
                      </div>

                      <div className="wish-info">
                        <div className="wish-info-left">
                          <p className="wishId">{wish.id}</p>
                          <p className="wishName">{wish.name}</p>
                          <p className="wishCount">수량 : {wish.count || 1}</p>
                        </div>
                        <div className="wish-info-right">
                          <div className="wish-icon">
                            {/* 🛒 cart 버튼 → 장바구니 추가 확인 팝업 */}
                            <button onClick={() => handleClickCart(wish)}>
                              <img src="/assets/icon/cart_Black.svg" alt="cart" />
                            </button>

                            {/* 🗑 delete 버튼 → 삭제 팝업 */}
                            <button onClick={() => handleClickDeleteIcon(wish)}>
                              <img src="/assets/icon/delete_black.svg" alt="delete" />
                            </button>
                          </div>
                          <p className="wishPrice">{String(wish.price).replace(/원/g, '')}원</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>

        {/* 🗑 삭제 확인 팝업 */}
        {isDeleteOpen && (
          <div className="wish-delete-backdrop" onClick={handleCancelDelete}>
            <div className="wish-delete-modal" onClick={(e) => e.stopPropagation()}>
              <p>해당 상품을 삭제하시겠습니까?</p>
              <div className="btn-area">
                <button className="btn-cancel" onClick={handleCancelDelete}>
                  취소
                </button>
                <button className="btn-delete" onClick={handlePopupDelete}>
                  확인
                </button>
              </div>
            </div>
          </div>
        )}

        {/* 🛒 장바구니 추가 확인 팝업 (스타일은 동일 클래스 재사용) */}
        {isCartPopupOpen && (
          <div className="wish-delete-backdrop" onClick={handleCancelCart}>
            <div className="wish-delete-modal" onClick={(e) => e.stopPropagation()}>
              <p>장바구니에 추가하시겠습니까?</p>
              <div className="btn-area">
                <button className="btn-cancel" onClick={handleCancelCart}>
                  취소
                </button>
                <button className="btn-delete" onClick={handleConfirmCart}>
                  확인
                </button>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* 장바구니 리스트 팝업 (기존 CartList) */}
      {showCartPopup && <CartList onClose={() => setShowCartPopup(false)} />}
    </div>
  );
};

export default WishList;
