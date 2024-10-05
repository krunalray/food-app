import { Route, Routes } from "react-router-dom";
import Home from "../container/layouts/home";
import Login from "../container/account/login";
import CustomerRegister from "../container/account/register";
import ForgotPassword from "../container/account/forgot_password";
import RouteAccount from "./route_customer";
import CustomerAccountProfile from "../container/customer/profile";
import CustomerAccountOrder from "../container/customer/order";
const commonRoute = (
  <Routes>
    {/* customer */}
    <Route exact path="/" element={<Home />} />
    <Route exact path="/login" element={<Login />} />
    <Route exact path="/register" element={<CustomerRegister />} />
    <Route exact path="/forgot_password" element={<ForgotPassword />} />
    <Route path="/customer/profile" element={<RouteAccount><CustomerAccountProfile /></RouteAccount>}/>
    <Route path="/customer/order" element={<RouteAccount><CustomerAccountOrder /></RouteAccount>}/>
  </Routes>
);
export default commonRoute;
