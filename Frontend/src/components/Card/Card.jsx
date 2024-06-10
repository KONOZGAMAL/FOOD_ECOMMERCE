import "../../styles/components/Card.scss";
import { FaStar } from "react-icons/fa6";
import { FaRegCheckCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
import PropTypes from "prop-types"; // Import PropTypes
export default function Card({ productsData, slug }) {
  const navigate = useNavigate();
  const returnDetailsPage = (el) => {
    el.preventDefault();
    if (localStorage.getItem("idUser") === null) {
      // toast.error("You are not logged in. Please log in to show more Details", {
      //   hideProgressBar: true,
      //   position: "bottom-right",
      // });
      navigate("/login");
    } else {
      window.location.href = slug;
    }
  };
  return (
    <section className="card">
      {productsData?.attributes?.feature && (
        <div className="newBadge">
          <span>New</span>
        </div>
      )}
      <div className="image">
        <img
          src={productsData?.attributes?.image?.data?.attributes?.url}
          alt="product-image"
        />
      </div>
      <div className="cartPrice">
        <span>
          {productsData?.attributes?.price}{" "}
          {productsData?.attributes?.price_formatting}
        </span>
        {productsData?.attributes.rate && (
          <div className="rate">
            <FaStar />
            <span>{productsData?.attributes?.rate}</span>
          </div>
        )}
      </div>
      <div className="cartTitle">
        <Link to={slug}>{productsData?.attributes?.name}</Link>
      </div>
      <div className="cartOption">
        <div className="option">
          <FaRegCheckCircle />
          <span>{productsData?.attributes?.pieces} Pieces</span>
        </div>
        <div className="option">
          <FaRegCheckCircle />
          <span>{productsData?.attributes?.type}</span>
        </div>
      </div>
      <div className="card-btn">
        <Link to={slug} onClick={returnDetailsPage}>
          View All Details
        </Link>
      </div>
    </section>
  );
}

Card.propTypes = {
  productsData: PropTypes.shape({
    attributes: PropTypes.shape({
      feature: PropTypes.bool,
      image: PropTypes.shape({
        data: PropTypes.shape({
          attributes: PropTypes.shape({
            url: PropTypes.string.isRequired,
          }).isRequired,
        }).isRequired,
      }),
      price: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
      price_formatting: PropTypes.string,
      rate: PropTypes.number,
      name: PropTypes.string.isRequired,
      pieces: PropTypes.number,
      type: PropTypes.string,
      slug: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  slug: PropTypes.string.isRequired,
};
