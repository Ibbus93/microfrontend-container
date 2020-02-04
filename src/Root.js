import React from 'react';
import { Provider } from 'react-redux';

import { BrowserRouter } from 'react-router-dom';

import App from './App';
import './index.css';

import store from './store';

const basename = process.env.REACT_APP_ENV ==='dev' ? '' : '/microfrontend-container';

const Root = () => (
    <Provider store={store}>
        <BrowserRouter basename={basename}>
            <App />
        </BrowserRouter>
    </Provider>
);

export default Root;
