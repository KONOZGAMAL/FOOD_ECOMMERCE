import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { LuUser2 } from "react-icons/lu";
import { MdLogout } from "react-icons/md";
import { NavLink, Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { MobileHandlerContext } from "../../utils/mobileHandler";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../rtk/slices/authSlice";
import PropTypes from "prop-types"; // Import PropTypes
import { GetAllCartFromServer } from "../../rtk/slices/cartsSlice";
import { GetAllWishlistFromServer } from "../../rtk/slices/wishListSlice";
export default function Navbar({ cart, wishlist }) {
  const { isMobile, openMenu, setOpenMenu } = useContext(MobileHandlerContext);
  const { token } = useSelector((state) => state.auth);
  const [isLoginIn, setIsLoginIn] = useState(false);
  const dispatch = useDispatch();
  
useEffect(() => {
    dispatch(GetAllCartFromServer());
    dispatch(GetAllWishlistFromServer());
  },[dispatch]);


  useEffect(() => {
    if (token) {
      setIsLoginIn(true);
    } else {
      setIsLoginIn(false);
    }
  }, [token]);

  const handleLogout = () => {
    dispatch(logout());
    setIsLoginIn(false);
  };

  return (
    <nav className="nav">
      <div className="container">
        <Link to={"/"} className="logo">
          <img src="../../../public/assets/images/logo-light.png" alt="logo" />
        </Link>
        <ul>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/shop">Shop</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </ul>
        <div className="nav_icons">
          <Link to={"/wishlist"} className="nav_icon">
            <span>{wishlist}</span>
            <FaHeart />
          </Link>
          <Link to={"/cart"} className="nav_icon">
            <span>{cart}</span>
            <FaShoppingCart />
          </Link>
          {isLoginIn ? (
            <Link to="" onClick={handleLogout} className="nav_icon">
              <MdLogout />
            </Link>
          ) : (
            <Link to="/login" className="nav_icon">
              <LuUser2 />
            </Link>
          )}
        </div>
        {isMobile && (
          <div
            className={`${
              openMenu ? "nav_bar_icon menu_open" : "nav_bar_icon"
            }`}
            onClick={() => setOpenMenu(!openMenu)}
          >
            <div></div>
            <div></div>
          </div>
        )}
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  cart: PropTypes.number.isRequired, // Ensure `cart` is a number and is required
  wishlist: PropTypes.number.isRequired, // Ensure `wishlist` is a number and is required
};