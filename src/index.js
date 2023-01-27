import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import userReducer from "./redux/userReducer";

const container = document.getElementById("root");
const root = createRoot(container);
const store = createStore(userReducer);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
