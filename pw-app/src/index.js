import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reducers from "./reducers";
import sagas from "./sagas";
import reportWebVitals from './reportWebVitals';
import createSagaMiddleware from "redux-saga";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});
sagaMiddleware.run(sagas);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
