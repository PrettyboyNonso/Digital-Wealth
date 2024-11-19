import React from "react";
import Footer from "./reuseables/Footer";
import Header from "./reuseables/Header";

const Layout = ({
  children,
  setNavIsOpen,
  navIsOpen,
}: {
  children: React.ReactNode;
  setNavIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  navIsOpen: boolean;
}) => {
  return (
    <>
      <Header setNavIsOpen={setNavIsOpen} navIsOpen={navIsOpen} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
