import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Autoplay, Pagination } from 'swiper/modules';
import '../scss/ColumnSlide.scss';
import { Link } from 'react-router-dom';
import { slideItems } from '../../../store/data';

const ColumnSlide = () => {
  return (
    <div className="column-slide">
      <>
        <Swiper
          slidesPerView={2.8}
          spaceBetween={24}
          direction="vertical"
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Mousewheel, Autoplay, Pagination]}
          className="mySwiper">
          {slideItems.map((el) => {
            return (
              <SwiperSlide>
                <Link data-alt={el.alt} to={`/product/${el.title}`}>
                  <img src={el.imgUrl} alt={el.alt} />
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </>
    </div>
  );
};

export default ColumnSlide;
