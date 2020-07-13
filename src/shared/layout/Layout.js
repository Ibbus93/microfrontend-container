import React from "react";
import PropTypes from "prop-types";

import Header from "./header";

const Layout = ({ children }) => (
  <React.Fragment>
    <Header />
    {children}
  </React.Fragment>
);

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
