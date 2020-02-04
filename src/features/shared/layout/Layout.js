import React from 'react';
import Header from '../../header';

const Layout = ({ children }) => (
    <div id="app-container">
        <Header />
        { children }
    </div>
);

export default Layout;
