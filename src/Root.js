import React from 'react';
import { Provider } from 'react-redux';

import { BrowserRouter } from 'react-router-dom';

import App from './App';
import './index.css';

import store from './store';

const Root = () => (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);

export default Root;
