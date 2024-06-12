// import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import HeadLines from "../../components/HeadLines/HeadLines";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import "./about.scss";
import Video from "./Video";
export default function about() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Food | About</title>
      </Helmet>
      <div className="about">
        <BreadCrumbs />
        <div className="about-container">
          <div className="about-content">
            <img
              src="./assets/images/beef-burger.jpg"
              className="img-main"
              alt=""
            />
            <div className="about-txt">
              <h2>GOOD FOOD FOR YOUR ALL DAY GOOD MOOD</h2>
              <p className="p-txt">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim.
              </p>
              <img src="./assets/images/signature.png" alt="" />
              <p className="shaw">George Shaw, CEO</p>
            </div>
          </div>
        </div>
        <HeadLines title={"OUR BEST CHEF"} />
        <div className="our-chef-container">
          <div className="profile-card">
          <div className="image">
          <img src="./assets/images/sh-1.jpeg" alt="" />
          <div className="image-hover-bg"></div>
            </div>
            <div className="profile-body">
               <h3 className="profile-title">George Shaw</h3>
              <div className="name-wrapper">
               <div className="title-wrapper">
                <p className="profile-designation ">Food Chef</p>
              </div>
                <ul className="social-list">
                  <li className="social-icon">
                    <a href="https://facebook.com">
                      <FaFacebookF />
                    </a>
                  </li>
                  <li className="social-icon">
                    <a href="https://twitter.com">
                      <FaTwitter />
                    </a>
                  </li>
                  <li className="social-icon">
                    <a href="https://pinterest.com">
                      <FaInstagram />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="profile-card">
          <div className="image">
          <img src="./assets/images/sh-2.jpeg" alt="" />
          <div className="image-hover-bg"></div>
          </div>
            <div className="profile-body">
            <h3 className="profile-title">Callum Rose</h3>
           <div className="name-wrapper">
            <div className="title-wrapper">
             <p className="profile-designation ">Food Chef</p>
           </div>
             <ul className="social-list">
               <li className="social-icon">
                 <a href="https://facebook.com">
                   <FaFacebookF />
                 </a>
               </li>
               <li className="social-icon">
                 <a href="https://twitter.com">
                   <FaTwitter />
                 </a>
               </li>
               <li className="social-icon">
                 <a href="https://pinterest.com">
                   <FaInstagram />
                 </a>
               </li>
             </ul>
           </div>
         </div>
          </div>
          <div className="profile-card">
          <div className="image">
          <img src="./assets/images/sh-3.jpg" alt="" />
          <div className="image-hover-bg"></div>
          </div>
            <div className="profile-body">
            <h3 className="profile-title">Tine Bauer</h3>
           <div className="name-wrapper">
            <div className="title-wrapper">
             <p className="profile-designation ">Food Chef</p>
           </div>
             <ul className="social-list">
               <li className="social-icon">
                 <a href="https://facebook.com">
                   <FaFacebookF />
                 </a>
               </li>
               <li className="social-icon">
                 <a href="https://twitter.com">
                   <FaTwitter />
                 </a>
               </li>
               <li className="social-icon">
                 <a href="https://pinterest.com">
                   <FaInstagram />
                 </a>
               </li>
             </ul>
           </div>
         </div>
          </div>
        </div>
        <Video/>
      </div>
    </HelmetProvider>
  );
}
