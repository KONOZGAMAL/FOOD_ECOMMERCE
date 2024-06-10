// import React from 'react'
import Navbar from "../../components/navbar/Navbar";
import MobileMenu from "../MobileMenu/MobileMenu";
import TopHeader from "../TopHeader/TopHeader";
import Footer from "../footer/Footer";
import { Outlet } from "react-router-dom";
import {useSelector } from "react-redux";
export default function Layout() {
  const { cart } = useSelector((state) => state.carts);
  const { wishlist } = useSelector((state) => state.wish_List);
  return (
    <div>
      <div className="layout">
        <MobileMenu />
        <TopHeader />
        <Navbar cart={cart.length} wishlist={wishlist.length} />
        <div className="content">
          <Outlet />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
