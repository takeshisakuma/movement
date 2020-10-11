import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Style from "./Layout.module.scss";

const Layout = ({ children }) => {
  return (
    <div className={Style.wrapper}>
      <Header />

      <main className={Style.main}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
