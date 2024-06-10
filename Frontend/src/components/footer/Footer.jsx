import "./footer.scss";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { FaInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";
import ScrollToTop from "./Scroll/ScrollToTop";
export default function Footer() {
  return (
    <>
    <ScrollToTop/>
    <div className="footer">
      <div className="container">
        <div className="logo-first">
          <div className="logo">
            <img src="../../../public/assets/images/logo-dark.png" alt="logo" />
            <p>Terrific burgers since 2015</p>
          </div>
          <div className="form">
            <input type="text" placeholder="Your email address" />
            <button className="normal">Sign Up</button>
          </div>
        </div>
        <div className="foot-fin">
          <div className="progress"></div>
          <div className="icon-social">
            <Link to={"https://www.facebook.com/"} target="_blank">
              <FaFacebookF />
            </Link>
            <Link to={"https://x.com/"} target="_blank">
              <FaTwitter />
            </Link>
            <Link to={"https://www.youtube.com/"} target="_blank">
              <TfiYoutube />
            </Link>
            <Link to={"https://www.instagram.com/"} target="_blank">
              <FaInstagram />
            </Link>
          </div>
        </div>
        <div className="fin">
          <p className="copyright">© 2024 Made by Konuz</p>
          <img
            src="../../../public/assets/images/payment.png"
            className="img-payment"
            alt=""
          />
        </div>
      </div>
    </div>
     </>
  );
}
