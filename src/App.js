// src/App.jsx
import "./App.scss";

import "animate.css/animate.min.css";
import Header from "./pages/header/Header";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/auth/login/Login";
import Footer from "./pages/footer/Footer";
import Join from "./pages/auth/join/Join";
import JoinComplete from "./pages/auth/join/JoinComplete";
import Mypage from "./pages/auth/MyPage/Mypage";
import Cart from "./pages/Checkout/Cart/Cart";
import OrderComplete from "./pages/Checkout/OrderComplete/OrderComplete";
import OrderSummary from "./pages/Checkout/OrderSummary/OrderSummary";
import Payment from "./pages/Checkout/Payment/Payment";
import { Shipping } from "./pages/Checkout/Shipping/Shipping";
import ProductDetail from "./pages/Products/ProductDetail";
import { useProductsStore } from "./store/useProductsStore";
import { useEffect, useState } from "react";
import Local from "./pages/customer/Local";
import ProductBanner from "./pages/Products/layout/ProductBanner";
import ProductDetailNav from "./pages/Products/layout/ProductDetailNav";
import AllProducts from "./pages/Products/AllProducts";
import ProductFilterWrap from "./pages/Products/layout/ProductFilterWrap";
import SearchResult from "./pages/Products/SearchResult";
import Category1 from "./pages/Products/Category1";
import ScrollToTop from "./ScrollToTop";

import { Chatbot } from "./component/feedback/Chatbot";
import Modal from "./component/feedback/Modal";
import CartList from "./pages/Products/CartList";

// 🔹 추가: 로그인된 유저 정보 가져오기
import { useAuthStore } from "./api/authStore";
import { useChatStore } from "./store/useChat";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContentKey, setModalContentKey] = useState(null); // 렌더링할 컴포넌트의 이름 (className)

  const openModal = (title, contentKey) => {
    setModalTitle(title);
    setModalContentKey(contentKey);
    setIsModalOpen(!isModalOpen);
    console.log("open", isModalOpen);
  };

  const closeModal = (e) => {
    setIsModalOpen(false);
    setModalTitle("");
    setModalContentKey(null);
  };
  console.log(isModalOpen);
  // 🔹 상품/메뉴 관련
  const {
    onFetchItems,
    onMakeMenu,
    loadUserCartAndWish,
    clearUserCartAndWish,
  } = useProductsStore();

  // 🔹 로그인 유저
  const user = useAuthStore((state) => state.user);

  // 1) 상품 데이터 + 메뉴 생성
  useEffect(() => {
    onFetchItems();
    onMakeMenu();
  }, [onFetchItems, onMakeMenu]);

  // 2) 유저가 바뀔 때마다 위시/카트 로드 or 초기화
  useEffect(() => {
    if (user) {
      // 로그인 / 계정 변경 → 해당 유저의 위시/카트 불러오기
      loadUserCartAndWish();
    } else {
      // 로그아웃 → 메모리 상태 초기화
      clearUserCartAndWish();
    }
  }, [user, loadUserCartAndWish, clearUserCartAndWish]);
  // App 내부
  const chatbotIsOpen = useChatStore((s) => s.isOpen);

  useEffect(() => {
    if (chatbotIsOpen || isModalOpen) {
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      if (scrollbarWidth > 0)
        document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0px";
    }
    return () => {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0px";
    };
  }, [chatbotIsOpen, isModalOpen]);
  return (
    <>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/joinComplete" element={<JoinComplete />} />

        <Route path="/mypage/:tab?" element={<Mypage />} />
        <Route
          path="/wishlist"
          element={<Navigate to="/mypage/wishlist" replace />}
        />
        <Route
          path="/myOrder"
          element={<Navigate to="/mypage/order" replace />}
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orderComplete/:id" element={<OrderComplete />} />
        <Route path="/orderSummary" element={<OrderSummary />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/shipping" element={<Shipping openModal={openModal} />} />
        <Route path="/searchResult" element={<SearchResult />} />

        <Route path="/local" element={<Local />} />
        <Route path="/ProductBanner" element={<ProductBanner />} />
        <Route path="/ProductDetailNav" element={<ProductDetailNav />} />
        <Route path="/AllProducts" element={<AllProducts />} />
        <Route path="/ProductFilterWrap" element={<ProductFilterWrap />} />
        <Route path="/CartList" element={<CartList />} />

        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/:category1" element={<Category1 />} />
        <Route path="/:category1/:category2" element={<Category1 />} />
       
      </Routes>
      <Footer openModal={openModal} />
      <Chatbot />

      {isModalOpen && (
        <Modal
          title={modalTitle}
          contentKey={modalContentKey}
          onClose={closeModal}
        />
      )}
    </>
  );
}

export default App;
