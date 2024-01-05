import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from "react-redux";
import './scss/index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import {store} from "./store/store";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);
