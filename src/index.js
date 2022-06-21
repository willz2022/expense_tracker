import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import 'bootstrap-icons/font/bootstrap-icons.css'

import {Provider} from 'react-redux'
import {store} from './app/store'

import { extendedTransactionsSlice } from './features/transactions/transactionsSlice';

store.dispatch(extendedTransactionsSlice.endpoints.getTransactions.initiate())


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


    <Provider store = {store}>
        <App />
    </Provider>




)

