import { Helmet, HelmetProvider } from 'react-helmet-async';
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { FaInstagram } from "react-icons/fa6";
import "./Contact.scss";
import Map from "./Map";
export default function Contact() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Food | Contact</title>
      </Helmet>
      <div>
        <BreadCrumbs />
        <section className="contact">
           <div className="icons-social">
             <div className="part1">
              <h5>Socials</h5>
              <div className="icon-social">
                <span>
                  <FaFacebookF />
                </span>
                <span>
                  <FaTwitter />
                </span>
                <span>
                  <TfiYoutube />
                </span>
                <span>
                  <FaInstagram />
                </span>
              </div>
            </div>
            <div className="part1">
              <h5>Phone</h5>
              <p>(123) 456-7890</p>
            </div>
            <div className="part1">
              <h5>Email</h5>
              <p>
                <a
                  href="mailto:info@burgertruck.com"
                  target="_blank"
                  rel="noopener"
                >
                  info@burgertruck.com
                </a>
              </p>
            </div>
          </div>
          <div className="form">
            <h2>Have Any Questions ?</h2>
            <input type="text" placeholder="Usar Name" />
            <input type="email" placeholder="Email" />
            <select>
            <option value={"question"}>Question</option>
            <option value={"booking"}>Booking</option>
            <option value={"other"}>Other</option>
            </select>
            <br/>
            <textarea rows="7" cols="10"
             placeholder="Close Message Content"></textarea>
             <button className="btn-contact">Contact Us</button>
          </div>
        </section>
        <section className="map-contact">
           <Map/>
        </section>
      </div>
    </HelmetProvider>
  );
}
