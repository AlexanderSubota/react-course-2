import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import AppRouters from "./routes/AppRouters";
import configureStore from './store/configure.store';
import "normalize.css/normalize.css";
import "./styles/style.scss";
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouters />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));