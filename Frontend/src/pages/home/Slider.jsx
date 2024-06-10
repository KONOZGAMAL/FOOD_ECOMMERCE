
import Banner from "../../components/Banner/Banner";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination } from 'swiper/modules';
export default function Slider() {
  return (
    <div className="swiper-wrapper">
      <Swiper
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="hero_banner slid1">
            <Banner text={"Delicious Burger"} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero_banner slid2">
            <Banner text={"Special Dessert"} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero_banner slid3">
            <Banner text={"Special Appetizers"} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="hero_banner slid4">
          <Banner text={"Special Drinks"} />
        </div>
      </SwiperSlide>
      </Swiper>
    </div>
  );
}
