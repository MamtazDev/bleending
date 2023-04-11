import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeaderTwo from "@/components/HeaderTwo";
import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      {/* <Header /> */}
      <HeaderTwo />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
