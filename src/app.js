import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import AppRouters from "./routes/AppRouters";
import configureStore from './store/configure.store';
import { addExpense } from './actions/expenses';
import getAvailableExpenses from './selectors/expenses';
import "normalize.css/normalize.css";
import "./styles/style.scss";
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

store.dispatch(addExpense({description: 'Water bill', amount: 5000, createdAt: 5}));
store.dispatch(addExpense({description: 'Gas bill', amount: 5000, createdAt: 1}));
store.dispatch(addExpense({description: 'Rent', amount: 10005, createdAt: 1}));

const state = store.getState();
const visibleExpenses = getAvailableExpenses(state.expenses, state.filters);

console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouters />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));