import React from 'react';
import ReactDOm from 'react-dom';
import { Provider } from 'react-redux';

import store from './store/store.js';

import App from './App';

import './styles/main.scss';


ReactDOm.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));