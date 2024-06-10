import { NavLink } from "react-router-dom";
import "./TopHeader.scss";
export default function TopHeader() {
  return (
    <div className="TopHeader">
        <p><span>Free shipping </span> orders from all item</p>
      <div className="links">
        <NavLink to={"/"} className="border-element">MY order</NavLink>
        <NavLink to={"/"} className="border-element">Track order</NavLink>
        <NavLink to={"/contact"}>Contact us</NavLink>
      </div>
    </div>
  );
}
