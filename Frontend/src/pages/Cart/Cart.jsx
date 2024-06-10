import { useDispatch, useSelector } from "react-redux";
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import "./Cart.scss";
import HeadLines from "../../components/HeadLines/HeadLines";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import EmptyCart from "./EmptyCart";
import {
  GetAllCartFromServer,
  // EditItemInCart,
  RemoveFromCart,
} from "../../rtk/slices/cartsSlice";
import { useCallback, useEffect, useState } from "react";
export default function Cart() {
  const { cart } = useSelector((state) => state.carts);
  const RemoveAllCart = () => {
    cart.map((el) => {
      dispatch(RemoveFromCart(el.id));
    });
  };

  const [totalprice, setTotlePrice] = useState();
  useEffect(() => {
    setTotlePrice(() =>
      cart.reduce((acc, item) => {
        return acc + item?.attributes?.price * item?.attributes?.quantity;
      }, 0)
    );
  }, [cart]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetAllCartFromServer());
  }, [dispatch]);
  const deleteThisItem = useCallback(
    (id) => {
      dispatch(RemoveFromCart(id));
    },
    [dispatch]
  );
  // const EditCart = (item) => {
  //   console.log(item);
  //   dispatch(
  //     EditItemInCart({
  //       productID: item?.id,
  //       categoryID: item?.id,
  //       imgUrl: item?.attributes?.imgUrl,
  //       name: item?.attributes?.name,
  //       price: item?.attributes?.price,
  //       slug: item?.attributes?.slug,
  //       description: item?.attributes?.description,
  //       quantity: item?.attributes?.quantity,
  //     })
  //   )
  //     .unwrap()
  //     .then(() => {
  //       navigate(`/shop/${item?.attributes?.slug}`);
  //     });
  // };

  return (
    <div className="cart">
      <BreadCrumbs />
      <HeadLines title={"Your shopping cart"} />
      <div className="cart-container">
        {cart.length !== 0 ? (
          <div>
            <section className="table-data">
              <table>
                <tr>
                  <th>Action</th>
                  <th>Product</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Qty</th>
                </tr>
                {cart?.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <button className="prdct-delete">
                        <MdDelete onClick={() => deleteThisItem(item?.id)} />
                      </button>
                    </td>
                    <td>
                      <div className="product-img">
                        <img src={item?.attributes?.imgUrl} alt="" />
                      </div>
                    </td>
                    <td>
                      <div className="name-item">{item?.attributes?.name}</div>
                    </td>
                    <td>{item?.attributes?.price}</td>
                    <td>{item?.attributes?.quantity}</td>
                  </tr>
                ))}
                <tr className="continue-shopping-tr">
                  <td colSpan="3" className="continue-shopping">
                    <Link to={"/shop"}>Continue Shopping</Link>
                  </td>
                  <td colSpan="2" className="btnClear">
                    <button onClick={() => RemoveAllCart()}>Clear Cart</button>
                  </td>
                </tr>
              </table>
            </section>
            <div className="clear">
              <div className="subtotal">
                <h3>
                  Subtotal <span> EG {totalprice}</span>
                </h3>
                <p>Taxes and shopping calclated at checkout</p>
                <div className="check">
                  <button className="checkOut">Check out</button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <EmptyCart />
        )}
      </div>
    </div>
  );
}
