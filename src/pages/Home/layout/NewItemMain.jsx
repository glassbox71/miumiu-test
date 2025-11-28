import React from 'react';
import '../scss/NewItemMain.scss';
import 'swiper/css';

import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import ColumnSlide from './ColumnSlide';
import { newItemTitle } from '../../../store/data';

const NewItemMain = () => {
  return (
    <section className="newItem">
      <div className="fw-collection">
        <Swiper
          slidesPerView={1}
          centeredSlides={true}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper">
          {newItemTitle.map((product, index) => (
            <SwiperSlide key={index}>
              <div className="new-container">
                <div className="img-box" style={{ backgroundImage: `url(${product.imgUrl})` }}>
                  {/* <img src= alt={product.item} /> */}
                </div>
                <div className="gradient-wrap">
                  <span>WHAT'S NEW</span>
                  <h2>{product.item}</h2>
                  <Link to={`/product/${product.id}`} className="link">
                    구매하기
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <ColumnSlide />
    </section>
  );
};

export default NewItemMain;
