import { Header } from "../Header";
import { Footer } from "../Footer";
import { Children } from "react";
import PropTypes from "prop-types";

export function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
