import React, { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import commonRoute from "./system/route";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Header from "./container/layouts/header";
import Footer from "./container/layouts/footer";
import { getCustomerProfile } from "../src/container/account/account_action";
import ReduxModal from '../src/container/common/components/modal';
function App() {

  const dispatch = useDispatch();
  const accountState = useSelector((state) => state.account);
  useEffect(() => {
    if (accountState.authenticated_customer && accountState.customer_profile == undefined) {
      dispatch(getCustomerProfile());
    }
  }, []);

  return (
    <div className="App">
      <Header />
      {commonRoute}
      <Footer />
      <ReduxModal/>
    </div>
  );
}

export default App;
