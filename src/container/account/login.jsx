import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import useForm from "../common/form/commonForm";
import validate from "../common/validation/loginValidation";
import { useDispatch } from "react-redux";
import {
  setCustomerLoginStatus,
  setCookLoginStatus,
  setAdminLoginStatus,
  getCustomerProfile
} from "./account_action";
function Login() {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const dispatch = useDispatch();
  let history = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("customer")) {

      history("/customer/profile");
    }else{
      history("/login");
    }
  }, []);
  const handleLogin = async ({ username, password }) => {
    try {
      if (!(typeof window !== "undefined")) return false;
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          password,
        }),
      };

      let response = await fetch(
        process.env.REACT_APP_API_URL + "/account/login",
        requestOptions
      );
      const contentType = response.headers.get("content-type");
      if (
        response.status !== 200 &&
        contentType &&
        contentType.indexOf("application/json") === -1
      ) {
        return setError(await response.text());
      }
      let data = await response.json();
      if (data && !data.error) {
        if (data.role === "customer") {
          localStorage.setItem("customer", data.token);
          dispatch(setCustomerLoginStatus(data.token));
          history("/customer/profile");
          dispatch(getCustomerProfile());
        } else if (data.role === "cook") {
          localStorage.setItem("cook", data.token);
          dispatch(setCookLoginStatus(data.token));
        } else if (data.role === "admin") {
          localStorage.setItem("admin", data.token);
          dispatch(setAdminLoginStatus(data.token));
        }
      } else {
        setError(data.error);
      }
    } catch (e) {
      setError(e.message);
    }
  };

  const { values, errors, handleChange, handleSubmit } = useForm(
    handleLogin,
    validate,
    setError,
    setSuccess
  );
  return (
    <div className="container mt-5 mb-5 ">
      <div className="row">
        <div className="col-lg-3"></div>
        <div className="col-lg-6">
          <div className="card">
            <div className="card-body">
              <div className="text-center">
                <h1 className="h4  mb-4">Login</h1>
              </div>
              {error ? (
                <div className="col-sm-12 pt-3">
                  <div className="alert alert-danger shadow-none">
                    <strong>Oops! </strong> {error}
                  </div>
                </div>
              ) : (
                ""
              )}
              <div className="p-2">
                <form onSubmit={handleSubmit} className="user">
                  <div className="form-group row mb-4">
                    <label className="col-sm-4 col-form-label text-end">
                      E-mail/Username
                    </label>
                    <div className="col-sm-8">
                      <input
                        type="text"
                        className="form-control"
                        name="username"
                        placeholder="Enter Email/Username"
                        onChange={handleChange}
                        value={values["username"] || ""}
                      />
                    </div>
                    <div className={"invalid-feedback"}>
                      {errors.username ? errors.username : ""}
                    </div>
                  </div>
                  <div className="form-group row mb-4">
                    <label className="col-sm-4 col-form-label text-end">
                      Password
                    </label>
                    <div className="col-sm-8">
                      <input
                        type="password"
                        className="form-control"
                        name="password"
                        placeholder="Password"
                        onChange={handleChange}
                        value={values["password"] || ""}
                      />
                    </div>
                    <div className={"invalid-feedback"}>
                      {errors.password ? errors.password : ""}
                    </div>
                  </div>
                  <hr />
                  <Link to="/register" className="btn btn-warning mb-1 mx-3">
                    <span>Sign Up</span>
                  </Link>
                  <button type="submit" className="btn btn-primary mb-1">
                    <span>Login</span>
                  </button>

                  <div className="row text-center mt-3 mb-2">
                    <div className="col-sm-12">
                      <Link
                        className="forgot-link text-primary"
                        to="/forgot_password"
                      >
                        Forgot Password ?
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3"></div>
    </div>
  );
}

export default Login;
