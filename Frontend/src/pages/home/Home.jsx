import { useEffect } from "react";
import MostSilling from "../../components/MostSilling/MostSilling";
import { useDispatch, useSelector } from "react-redux";
import { GetAllProducts } from "../../rtk/slices/ProductSlice";
import Slider from "./Slider";
import Category from "./Category";
import BrandShape from "./BrandShape";
export default function Home() {
  // const {  productData , isLoading , error} = useSelector((state)=> state.AllProducts);
  const { productData , isLoading } = useSelector((state) => state.AllProducts);
 console.log(isLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetAllProducts());
  }, [dispatch]);
  return (
    <div className="home">
      <Slider />
      <MostSilling productData={productData} isLoading={isLoading} />
      <div className="home-content">
        <Category />
        <BrandShape />
      </div>
    </div>
  );
}
