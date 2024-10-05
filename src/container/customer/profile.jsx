import React, { useState, useEffect } from "react";
import { useSelector,connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateCustomerProfile } from "../account/account_action";
 function CustomerAccountProfile(props) {
  const [values, setValues] = useState({});
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const stateAccount = useSelector((state) => state.account);
  const { customer_profile } = stateAccount;
  let history = useNavigate();

  useEffect(()=>{
    if(customer_profile){
      setValues(customer_profile)
    }
    if (localStorage.getItem("customer")) {

      history("/customer/profile");
    }
  },[customer_profile])
  const handleSubmit = (event) => {
    if (event) event.preventDefault();
      setSuccess(null);
      setError(null);
     setIsSubmitting(true);
     setLoading(true);

     props.updateCustomerProfile(values, function (err, result) {
       if (result) {
        setLoading(false);
        setIsSubmitting(false);
        setSuccess(true);
        setError(false);
       }
     });
  };

  const handleChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };
  return (
    <div className="customer register">
      <div className="container">
        <div className="row">
          <div className="col-sm-3"></div>
          <div className="col-sm-6">
            <div className="card border-0  mb-5 mt-4">
              <div className="p-3">
                <div className="title-block text-center">
                  <i className="fa h1 fa-user-circle-o fa-2x text-primary"></i>
                  <h4 className="sk-heading mt-2">Profile</h4>
                </div>
              </div>
              <div className="card-body ">
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
                      Profile Update Successfully.....
                    </div>
                  </div>
                ) : (
                  ""
                )}
                <form onSubmit={handleSubmit} className="user">
                  <div className="form-group row mb-4 mt-3">
                    <label className="col-sm-3 col-form-label text-end">
                      Name :-
                    </label>
                    <div className="col-sm-9">
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        placeholder="Name"
                        onChange={handleChange}
                        value={values["name"] || ""}
                      />
                    </div>
                  </div>
                  <div className="form-group row mb-4">
                    <label className="col-sm-3 col-form-label text-end">
                      Email :-
                    </label>
                    <div className="col-sm-9">
                      <input
                        type="text"
                        className="form-control"
                        name="email"
                        placeholder="Email"
                        onChange={handleChange}
                        value={values["email"] || ""}
                      />
                    </div>
                  </div>
                  <div className="form-group row mb-4">
                    <label className="col-sm-3 col-form-label text-end">
                      Number :-
                    </label>
                    <div className="col-sm-9">
                      <input
                        type="text"
                        className="form-control"
                        name="phone"
                        placeholder="Phone"
                        onChange={handleChange}
                        value={values["phone"] || ""}
                      />
                    </div>
                  </div>
                  <div className="form-group row mb-4">
                    <label className="col-sm-3 col-form-label text-end">
                      Address :-
                    </label>
                    <div className="col-sm-9">
                      <input
                        type="text"
                        className="form-control"
                        name="address"
                        placeholder="Address"
                        onChange={handleChange}
                        value={values["address"] || ""}
                      />
                    </div>
                  </div>
                  <div className="form-group row border-top pt-3 ">
                    <div className="col-sm-12 p-0">
                      <button
                        type="submit"
                        className="btn  btn-primary btn-submit btn-shadow"
                      >
                        Update
                      </button>
                    </div>
                  </div>
                </form>
                <div className="form-group row border-top pt-3 mt-3">
                  <div className="col-sm-12 p-0">
                    <button
                      type="submit"
                      className="btn  btn-warning btn-submit"
                    >
                      Past Order History
                    </button>
                  </div>
                </div>
              </div>{" "}
            </div>{" "}
          </div>
          <div className="col-sm-3"></div>
        </div>
      </div>
    </div>
  );
}
function mapStateToProps(state) {
  return {
    errorMessage: state.account.error
  };
}
export default connect(mapStateToProps,{updateCustomerProfile})(CustomerAccountProfile);

