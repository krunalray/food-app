import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import { AUTHENTICATE_CUSTOMER,AUTHENTICATE_COOK,AUTHENTICATE_ADMIN } from '../src/container/account/account_action';
const root = ReactDOM.createRoot(document.getElementById("root"));


const customer = localStorage.getItem('customer');
const cook = localStorage.getItem('cook');
const admin = localStorage.getItem('admin');
if(customer) {
  store.dispatch( { type: AUTHENTICATE_CUSTOMER });
}
if(cook) {
  store.dispatch( { type: AUTHENTICATE_COOK });
}
if(admin) {
  store.dispatch( { type: AUTHENTICATE_ADMIN });
}
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
          <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
