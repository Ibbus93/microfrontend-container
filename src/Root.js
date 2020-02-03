import React from 'react';

import App from './App';
import './index.css';
import { BrowserRouter } from "react-router-dom";

const Root = () => (
    <BrowserRouter>
        <App />
    </BrowserRouter>
);

export default Root;
