import { useDispatch, useSelector } from "react-redux";
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import { FaStar } from "react-icons/fa6";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import HeadLines from "../../components/HeadLines/HeadLines";
import "./wishlist.scss";
import EmptyWishList from "./EmptyWishList";
import {
  GetAllWishlistFromServer,
  RemoveFromWishlist,
} from "../../rtk/slices/wishListSlice";
import { useEffect } from "react";
export default function WishList() {
  const { wishlist} = useSelector((state) => state.wish_List);
 
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(GetAllWishlistFromServer())
  },[dispatch])
  return (
    <div className="wishlist">
      <BreadCrumbs />
      <HeadLines title={"Your wishlist"} />
      {wishlist.length !== 0 ? (
        <div className="wrapper">
          {wishlist.map((item, _id) => (
            <div key={_id}>
              <section className="card">
                <div className="wishlist-new">
                  <FaHeart
                    onClick={() => dispatch(RemoveFromWishlist(item?.id))}
                  />
                </div>
                <div className="image">
                  <img src={item?.attributes?.imgUrl} alt="product-image" />
                </div>
                <div className="cartPrice">
                  <span></span>
                  <div className="rate">
                    <FaStar />
                    <span>{item?.attributes?.rate}</span>
                  </div>
                </div>
                <div className="cartTitle">
                  <Link to={"/"}>{item?.attributes?.name}</Link>
                </div>
                <div className="cartOption">
                  <div className="option">
                    <FaRegCheckCircle />
                    <span>{item?.attributes?.pieces} Pieces</span>
                  </div>
                  <div className="option">
                    <FaRegCheckCircle />
                    <span>{item?.attributes?.type}</span>
                  </div>
                </div>
                <div className="card-btn">
                  <Link to={`/shop/${item?.attributes?.slug}`}>
                    View All Details
                  </Link>
                </div>
              </section>
            </div>
          ))}
        </div>
      ) : (
        <EmptyWishList />
      )}
    </div>
  );
}
