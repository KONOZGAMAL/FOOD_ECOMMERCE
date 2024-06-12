import Card from "../Card/Card";
import HeadLines from "../HeadLines/HeadLines";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { Navigation, Scrollbar } from "swiper/modules";
import { useContext } from "react";
import Loading from "../../components/Loading/Loading";
import { MobileHandlerContext } from "../../utils/mobileHandler";
import PropTypes from "prop-types"; 
export default function MostSilling({ productData, isLoading }) {
  const { isMobile } = useContext(MobileHandlerContext);
  if (isLoading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }
  return (
    <section className="mostSilling">
      <HeadLines title={"Most Selling"} suptitle={"Most Selling"} />
      <Swiper
        slidesPerView={1}
        spaceBetween={15}
        modules={[Navigation, Scrollbar]}
        navigation={{ nextEl: ".right-arrow", prevEl: ".left-arrow" }}
        scrollbar={{ el: ".swiper-progress" }}
        breakpoints={{
          500: {
            slidesPerView: 2,
          },
          800: {
            slidesPerView: 3,
          },
          1340: {
            slidesPerView: 4.3,
          },
        }}
      >
        {productData?.map(
          (item, _id) =>
            item?.attributes?.most_selling && (
              <SwiperSlide key={_id}>
                <Card
                  productsData={item}
                  id={item?.id}
                  slug={`shop/${item?.attributes?.slug}`}
                />
              </SwiperSlide>
            )
        )}
      </Swiper>
      <div className="swiper-option">
        <div className="swiper-progress"></div>
        {!isMobile && (
          <div className="swiper-arrows">
            <div className="left-arrow arrow">
              <FaArrowLeft />
            </div>
            <div className="right-arrow arrow">
              <FaArrowRight />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

MostSilling.propTypes = {
  productData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      attributes: PropTypes.shape({
        most_selling: PropTypes.bool,
        image: PropTypes.shape({
          data: PropTypes.shape({
            attributes: PropTypes.shape({
              url: PropTypes.string,
            }),
          }),
        }),
        price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        price_formatting: PropTypes.string,
        rate: PropTypes.number,
        name: PropTypes.string,
        pieces: PropTypes.number,
        type: PropTypes.string,
        slug: PropTypes.string.isRequired,
      }),
    })
  ).isRequired,
  isLoading: PropTypes.Boolean,
};
