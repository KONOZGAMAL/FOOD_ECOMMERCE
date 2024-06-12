import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import HeadLines from "../../components/HeadLines/HeadLines";
import { GetProductdetails } from "../../rtk/slices/ProductSlice";
import {
  AddItemToServer,
  GetAllCartFromServer,
} from "../../rtk/slices/cartsSlice";
import { AddItemToWishlist, GetAllWishlistFromServer } from "../../rtk/slices/wishListSlice";
import { toast } from "react-toastify";
import {
  MdAddShoppingCart,
  MdFavoriteBorder,
  MdOutlineBalance,
} from "react-icons/md";
import "./ProductDetails.scss";
import Loading from "../../components/Loading/Loading";

export default function ProductDetails() {
  const [quantity, setQuantity] = useState(1);
  const { slug } = useParams();
  const productDetails = useSelector(
    (state) => state.AllProducts.productDetails
  );
  const { cart, isLoading } = useSelector((state) => state.carts);
  const { wishlist , loading} = useSelector((state) => state.wish_List);

  const dispatch = useDispatch();

  useEffect(() => {
    if (slug) {
      dispatch(GetProductdetails(slug));
    }
  }, [dispatch, slug]);

  const userId = localStorage.getItem("idUser");

  useEffect(() => {
    dispatch(GetAllCartFromServer());
  }, [dispatch]);
  const handleCart = (productsData) => {
    let isSameProductExistInCart = cart.some(
      (product) => Number(product.attributes.productID) === productsData.id
    );
    if (!isSameProductExistInCart) {
      dispatch(
        AddItemToServer({
          data: {
            name: productsData.attributes.name,
            quantity: Number(quantity),
            imgUrl: `${productsData.attributes.image.data.attributes.url}`,
            categoryID: productsData.id,
            price: productsData.attributes.price,
            productID: productsData.id,
            description: productsData.attributes.description,
            slug: productsData.attributes.slug,
            IdUser: userId,
          },
        })
      );
        dispatch(GetAllCartFromServer());
    } else {
      toast.error("Same product added to the Cart already!", {
        hideProgressBar: true,
        position: "bottom-right",
      });
    }
  };
  const handleWishList = (productsData) => {
    let isSameProductExistInCart = wishlist.some(
      (product) => Number(product.attributes.productID) === productsData.id
    );
    if (!isSameProductExistInCart) {
      dispatch(
        AddItemToWishlist({
          data: {
            name: productsData.attributes.name,
            productID: productsData.id,
            price: productsData.attributes.price,
            description: productsData.attributes.description,
            categoryID: productsData.id,
            imgUrl: `${productsData.attributes.image.data.attributes.url}`,
            slug: productsData.attributes.slug,
            type: productsData.attributes.type,
            pieces: productsData.attributes.pieces,
            rate: productsData.attributes.rate,
            IdUser: userId,
          },
        })
      );
      dispatch(GetAllWishlistFromServer());
    } else {
      toast.error("Same product added to the wishlist already!", {
        hideProgressBar: true,
        position: "bottom-right",
      });
    }
  };

  if (!productDetails || !productDetails.attributes) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  return (
    <div className="details-container">
      <BreadCrumbs />
      <HeadLines title={productDetails.attributes.name} />
      <div className="wrapper">
        <div className="image-details">
          <img
            src={productDetails.attributes.image.data.attributes.url}
            alt={productDetails.attributes.name}
          />
        </div>
        <div className="content-details">
          <h4>{productDetails.attributes.name}</h4>
          <span className="price">{productDetails.attributes.price} EG</span>
          <p>{productDetails.attributes.description}</p>
          <div className="quantity">
            <button
              onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
            >
              -
            </button>
            {quantity}
            <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
          </div>
          <div className="items">
            <button className="add" onClick={() => handleCart(productDetails)} 
            disabled={isLoading}
            >
              <MdAddShoppingCart />
              Add to cart
            </button>
            <button
              className="add"
              onClick={() => handleWishList(productDetails)}
              disabled={loading}
            >
              <MdFavoriteBorder />
              Add to wishlist
            </button>
          </div>
          <div className="item">
            <MdOutlineBalance />
            Add to compare
          </div>
          <div className="info">
            <span>Vendor: Polo</span>
            <span>Product Type: {productDetails.attributes.type}</span>
          </div>
          <hr />
          <div className="info">
            <span>Description</span>
            <hr />
            <span>Additional Information</span>
            <hr />
            <span>FAQ</span>
          </div>
        </div>
      </div>
    </div>
  );
}
