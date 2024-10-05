import React from "react";
import { connect } from "react-redux";
import { Form, Field } from "react-final-form";
import { Input } from "../common/components/index";
import { forgotPassword } from "./account_action";
function ForgotPassword(props) {
    console.log('---props',props);
  const onSubmit = (values) => {
    props.forgotPassword(values, function (err, result) {
        console.log("----result",result);
      if (result) {
      }
    });
  };
  const renderAlert = () => {
    if(props.errorMessage) {
      return (
        <div className="alert alert-danger">
        <strong>Oops! </strong> {props.errorMessage}
        </div>
      )
    }
  }
  return (
    <div id="content-container">
      <div className="container mb-5 mt-3">
        <div className="row">
          <div className="col-sm-2"></div>
          <div className="col-sm-8">
            <div className="card border-0">
              <div className="card-body">
                <Form
                  onSubmit={onSubmit}
                  initialValues={{}}
                  validate={(values) => {
                    const errors = {};
                    if (!values.email) {
                      errors.email = "Required Email";
                    } else if (
                      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
                        values.email
                      )
                    ) {
                      errors.email = "Invalid Email Address";
                    }
                    if (!values.username) {
                      errors.username = "Required Username";
                    }
                    return errors;
                  }}
                  render={({ handleSubmit, form, pristine, values }) => (
                    <form onSubmit={handleSubmit}>
                           {renderAlert()}
                      <div className="form-group row mb-4">
                        <label className="col-sm-4 col-form-label text-end">
                          E-mail
                        </label>
                        <div className="col-sm-8">
                          <Field
                            name="email"
                            type="text"
                            component={Input}
                            label="Email"
                          />
                        </div>
                      </div>

                      <div className="form-group row mb-4">
                        <label className="col-sm-4 col-form-label text-end">
                          Username
                        </label>
                        <div className="col-sm-8">
                          <Field
                            name="username"
                            type="text"
                            component={Input}
                            label="Username"
                          />
                        </div>
                      </div>
                      <button type="submit" className="btn btn-primary mb-1">
                        <span>Send Email</span>
                      </button>
                    </form>
                  )}
                />
              </div>
            </div>
          </div>
          <div className="col-sm-2"></div>
        </div>
      </div>
    </div>
  );
}
function mapStateToProps(state) {
  return {
    errorMessage: state.account.error,
  };
}
export default connect(mapStateToProps, { forgotPassword })(
ForgotPassword
);
