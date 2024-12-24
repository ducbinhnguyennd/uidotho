import React from "react";
import Navbar from "./Header/MenuHeader/Navbar";
import { Footer } from "./Footer";
import { Header } from "./Header";
import Contact from "./Header/Contact/Contact";
import Call from "./FloatingChat/Call/Call";
import Zalo from "./FloatingChat/Zalo/Zalo";
import '../DeafaultLayout/DefaultLayout.scss'

function DefaultLayout({ children }) {
  return (
    <div className="container-default">
      <Contact />
      <div className="header-navbar">
  <Header />
  <Navbar />
</div>
      <div className="content">{children}</div>
      <Footer />
      <div className="floatingbuton">
        <Zalo />
        <Call />
      </div>
    </div>
  );
}

export default DefaultLayout;
