import { Link } from "react-router-dom";

export default function EmptyWishList() {
  return (
    <div className="empty-cart">
      <img src="./assets/images/category/emptyCart.png" alt="" />
      <p>
        Your Wishlist is currently empty <br />{" "}
        <Link to={"/shop"}>show content here</Link>
      </p>
    </div>
  );
}
