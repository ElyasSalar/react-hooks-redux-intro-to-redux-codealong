import React from "react";
import ReactDOM from "react-dom";
import counterReducer from "./features/counter/counterSlice.js";
import App from "./App";
import "./index.css";
import { createStore } from "redux";
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
, document.getElementById("root"));

const store = createStore(counterReducer);