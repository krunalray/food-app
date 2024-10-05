import React from "react";
import { Navigate } from "react-router-dom";
const RouteAccount = ({ children}) => {
  let token = localStorage.getItem('customer');

  return token ? (
    <div id="account-home">
      {children }
    </div>
  ) : (
    <Navigate to={`/login`} />
  )


};
export default RouteAccount;
