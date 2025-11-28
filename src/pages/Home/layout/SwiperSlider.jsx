import React from 'react';
import { Link } from 'react-router-dom';
import { Autoplay, Mousewheel } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const SwiperSlider = ({ item, direction, perView, speed, delay, center }) => {
  console.log(item);
  return (
    <>
      <Swiper
        className="mySwiper"
        direction={direction}
        slidesPerView={4}
        spaceBetween={24}
        loop={true}
        mousewheel={true}
        autoplay={{
          delay: delay, // 지연 없이 계속 흐름
          disableOnInteraction: false,
          // ----- reverseDirection: true,
        }}
        speed={speed} // 천천히 부드럽게
        centeredSlides={center}
        modules={[Autoplay, Mousewheel]}>
        {item.map((el) => {
          return (
            <SwiperSlide>
              <Link>
                <img src={`${el.imgUrl}`} alt="" />
                <div className={el.title ? 'title' : 'hidden'}></div>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default SwiperSlider;
