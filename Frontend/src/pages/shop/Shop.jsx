import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import FilterCategoryItem from "../../components/FilterCategoryItem/FilterCategoryItem";
import HeadLines from "../../components/HeadLines/HeadLines";
import Card from "../../components/Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import {
  FilterCategory,
  GetAllCategories,
} from "../../rtk/slices/ProductSlice";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import GetDelivery from "./GetDelivery";
export default function Shop() {
  const { allCategories, filterCategory} = useSelector(
    (state) => state.AllProducts
  );
  const dispatch = useDispatch();
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeTitle, setActiveTitle] = useState("Burger");
  useEffect(() => {
    dispatch(GetAllCategories());
  }, [dispatch]);

  useEffect(() => {
    dispatch(FilterCategory(activeTitle));
  }, [dispatch, activeTitle]);
  return (
    <HelmetProvider>
      <Helmet>
        <title>Food | Shop</title>
      </Helmet>
      <div className="shop">
        <BreadCrumbs />
        <HeadLines title={"Shop By Category"} suptitle={"Shop By Category"} />
        <div className="filter-category">
          <Swiper
            onClick={(e) => {
              setActiveIndex(e.clickedIndex);
              setActiveTitle(
                allCategories?.data[e.clickedIndex]?.attributes?.title
              );
            }}
            slidesPerView={1.5}
            spaceBetween={10}
            breakpoints={{
              620: {
                slidesPerView: 3,
              },
              1340: {
                slidesPerView: 4,
              },
            }}
          >
            {allCategories?.data?.map((item, _id) => (
              <SwiperSlide key={_id}>
                <FilterCategoryItem
                  categoriesData={item?.attributes}
                  activeIndex={activeIndex}
                  _id={_id}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="shop-items">
          {filterCategory?.data?.map((items) =>
            items?.attributes?.products?.data?.map((item, _id) => (
                <Card
                  productsData={item}
                  slug={`shop/${item?.attributes?.slug}`}
                  id={item.id}
                  key={_id}
                />
            ))
          )}
        </div>
      </div>
      <GetDelivery />
    </HelmetProvider>
  );
}
