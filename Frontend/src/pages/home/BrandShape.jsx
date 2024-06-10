// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import { useMemo } from "react";
export default function BrandShape() {
  const imageData = useMemo(
    () => [
      "./assets/images/brand-shape/01.svg",
      "./assets/images/brand-shape/02.svg",
      "./assets/images/brand-shape/03.svg",
      "./assets/images/brand-shape/04.svg",
      "./assets/images/brand-shape/05.svg",
      "./assets/images/brand-shape/06.svg",
      "./assets/images/brand-shape/03.svg",
    ],
    []
  );
  return (
    <>
      <div className="swiper-wrapper-brand-shape">
        <Swiper
          data-swiper-autoplay="2000"
          className="testimonial__container"
          loop={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          slidesPerView={3}
          breakpoints={{
            1040: {
              slidesPerView: 6,
            },
          }}
          modules={[Autoplay]}
        >
          {imageData.map((image, _id) => {
            return (
              <SwiperSlide className="testimonial__card" key={_id}>
                <img src={image} alt="logo" className="testimonial__img" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
}
/*
 <Swiper
        loop={true}
        centeredSlides={true}
        slidesPerView={3}
        autoplay={{
          delay: 1000,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="brand-shape">
            <img src="./assets/images/brand-shape/01.svg" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="brand-shape">
            <img src="./assets/images/brand-shape/02.svg" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="brand-shape">
            <img src="./assets/images/brand-shape/03.svg" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="brand-shape">
            <img src="./assets/images/brand-shape/04.svg" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="brand-shape">
            <img src="./assets/images/brand-shape/05.svg" alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
*/
//f39dfae.e-con-full.e-flex.e-con.e-parent
// .swiper.brand-slider.swiper-initialized
// .swiper-horizontal.swiper-pointer-events
