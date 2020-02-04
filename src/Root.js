import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store';

import App from './App';
import './index.css';

const basename = process.env.REACT_APP_ENV === 'dev' ? '' : '/microfrontend-container';

const Root = () => (
    <Provider store={store}>
        <BrowserRouter basename={basename}>
            <App />
        </BrowserRouter>
    </Provider>
);

export default Root;
