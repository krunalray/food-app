import React, { useState } from "react";
import validate from "../common/validation/customerRegisterValidation";
import commonForm from "../common/form/commonForm";
import { Breadcrumb } from '../common/components/index';
export default function CustomerRegister() {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const handleRegister = async ({
      name,
      username,
      email,
      password,
      confirm_password},
    resetForm
  ) => {
    try {
      if (!(typeof window !== `undefined`)) return false
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          username,
          email,
          password,
          confirm_password
        }),
      };
      let response = await fetch(
        process.env.REACT_APP_API_URL + "/account/register",
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
        resetForm({});
        setSuccess(true);
      } else {
        setError(data.error);
      }
    } catch (e) {
      setError(e.message);
    }
  };

  const { values, errors, handleChange, handleSubmit } = commonForm(
    handleRegister,
    validate,
    setError,
    setSuccess
  );

  return (
    <div className="customer register">
      <div className="container">
        <Breadcrumb text="Sign Up" />
        <div className="row">
          <div className="col-sm-3"></div>
          <div className="col-sm-6">
            <div className="card card-shadow  mb-5 mt-4">
              <div className="card-body p-5">
                {error ? (
                  <div className="col-sm-12 pt-3">
                    <div className="alert alert-danger shadow-none">
                      <strong>Oops! </strong> {error}
                    </div>
                  </div>
                ) : (
                  ""
                )}
                {success ? (
                  <div className="col-sm-12 pt-3">
                    <div className="alert alert-success shadow-none">
                      You are successfully register
                    </div>
                  </div>
                ) : (
                  ""
                )}
                <form onSubmit={handleSubmit} className="user">
                  <div className="form-group row mb-4 mt-3">
                    <label className="col-sm-4 col-form-label text-end">
                      Name
                    </label>
                    <div className="col-sm-8">
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        placeholder="Name"
                        onChange={handleChange}
                        value={values["name"] || ""}
                      />
                    </div>
                    <div className={"invalid-feedback"}>
                      {errors.name ? errors.name : ""}
                    </div>
                  </div>
                  <div className="form-group row mb-4">
                    <label className="col-sm-4 col-form-label text-end">
                      User Name
                    </label>
                    <div className="col-sm-8">
                      <input
                        type="text"
                        className="form-control"
                        name="username"
                        placeholder="Username"
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
                      Email
                    </label>
                    <div className="col-sm-8">
                      <input
                        type="text"
                        className="form-control"
                        name="email"
                        placeholder="Email"
                        onChange={handleChange}
                        value={values["email"] || ""}
                      />
                    </div>
                    <div className={"invalid-feedback"}>
                      {errors.email ? errors.email : ""}
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
                        onChange={handleChange} value={values['password'] || ""}
                      />
                    </div>
                    <div className={"invalid-feedback"}>
                      {errors.password ? errors.password : ""}
                    </div>
                  </div>

                  <div className="form-group row mb-4">
                    <label className="col-sm-4 col-form-label text-end">
                      Confirm Password
                    </label>
                    <div className="col-sm-8">
                      <input
                        type="password"
                        className="form-control"
                        name="confirm_password"
                        placeholder="Confirm Password"
                        onChange={handleChange} value={values['confirm_password'] || ""}
                      />
                    </div>
                    <div className={"invalid-feedback"}>
                      {errors.confirm_password ? errors.confirm_password : ""}
                    </div>
                  </div>
                  <div className="form-group row border-top pt-3">
                    <div className="col-sm-12 p-0">
                      <button
                        type="submit"
                        className="btn  btn-primary btn-submit btn-shadow"
                      >
                        Register
                      </button>
                    </div>
                  </div>
                </form>
              </div>{" "}
            </div>{" "}
          </div>
          <div className="col-sm-3"></div>
        </div>
      </div>
    </div>
  );
}
