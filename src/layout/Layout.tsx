import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Layout = () => {
  return (
    <React.Fragment>
      <Header />
      <Outlet />
      <Footer/>
    </React.Fragment>
  );
};

export default Layout;
