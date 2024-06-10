import { Link } from "react-router-dom";

export default function EmptyCart() {
  return (
    <div className="empty-cart">
      <img src="./assets/images/category/emptyCart.png" alt="" />
      <p>
        Cart is Empty <Link to={"/shop"}>Go Shopping</Link>
      </p>
    </div>
  );
}
