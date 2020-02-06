import React from 'react';
import PropTypes from 'prop-types';

import Header from './header';

const Layout = ({ children }) => (
    <div id="app-container">
        <Header />
        { children }
    </div>
);

Layout.propTypes = {
    children: PropTypes.element.isRequired
};

export default Layout;
