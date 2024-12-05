import React from "react";
import Footer from "./reuseables/Footer";
import Header from "./reuseables/Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
