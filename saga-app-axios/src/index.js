import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import reducer from './reducer/reducer';

import createSagaMiddleware from "redux-saga";
import { createStore,applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { getData } from './sagas/saga';
const sagaMiddleware = createSagaMiddleware();


const store = createStore(reducer,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(getData);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
