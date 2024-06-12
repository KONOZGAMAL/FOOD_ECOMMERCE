
import PropTypes from "prop-types"; 
import { Link } from "react-router-dom";
import "./Banner.scss";
export default function Banner({text}) {
  return (
    <section>
      <div className="main-banner-bg">
        <div className="banner-content-wrapper">
          <h4>Amazing Food</h4>
          <h2>{text}</h2>
          <p>
            RESERVATION IS A STEP INTO A WORLD OF GASTRONOMIC WONDER. RESERVE
            YOUR TABLE TODAY AND LET US PAINT YOUR CULINARY DREAMS INTO REALITY.
          </p>
        </div>
        <div className="btn">
        <Link to={"/shop"}>
        Explore Products</Link>
        </div>
      </div>
    </section>
  );
}
Banner.propTypes = {
  text: PropTypes.node, // Validate title prop
};