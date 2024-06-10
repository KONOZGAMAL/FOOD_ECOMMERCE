import { Link, useLocation } from "react-router-dom";
import "./BreadCrumbs.scss";
export default function BreadCrumbs() {
  const {pathname} =useLocation();
  return (
    <section className="breadCrumbs">
      <div className="crumbText">
        <Link to={"/"}>Home</Link>
        <span> - {pathname.slice(1).replace("/"," - ")}</span>
      </div>

    </section>
  );
}
