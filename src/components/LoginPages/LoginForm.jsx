import React, { Fragment, useState } from "react";
import EmployeeApi from "../../Service/employeeApi";
import { useNavigate } from "react-router-dom";
import WebCookies from "../../Cookies/cookies";

const LoginForm = () => {
  let [state, setState] = useState({
    user: {
      email: "",
      password: "",
    },
  });

  // Navigation hook
  const navigate = useNavigate();

  // Login user details
  let { user } = state;

  // Handle input fields
  let changeInput = (event) => {
    setState((state) => ({
      user: {
        ...state.user,
        [event.target.name]: event.target.value,
      },
    }));
  };

  // loggin uers the cookies
  const handleCookies = (data, callBack) => {
    let userData = data.data;
    WebCookies.RemoveCookie('userin')
    WebCookies.SetCookie("userin", JSON.stringify(userData))
    callBack("");
  };

  // Handle loggin
  let onSubmit = (event) => {
    event.preventDefault();
    EmployeeApi.LoginApi(user, (data) => {
      if (data.status === 200) {
        handleCookies(data.data, () => {
          // navigate to dashboard
          navigate("/employees");
        });
      } else if (data.response.status !== 200) {
        // error page
        navigate("/page-not-found");
      }
    });
  };

  return (
    <Fragment>
      <div className="container mt-3">
        <div className="row justify-content-md-center">
          <div className="col-md-8 col-sm-8 col-lg-5">
            <div className="card">
              <div className="card-header bg-danger text-white">
                <p className="h3">Login </p>
              </div>
              <div className="card-body bg-light">
                <form onSubmit={onSubmit}>
                  <div className="mb-3">
                    <input
                      name="email"
                      type="text"
                      className="form-control"
                      placeholder="Email"
                      onChange={changeInput}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      name="password"
                      type="text"
                      className="form-control"
                      placeholder="Password"
                      onChange={changeInput}
                    />
                  </div>
                  <div className="d-flex mb-3 justify-content-center">
                    <button type="submit" className="btn btn-danger">
                      Login
                    </button>
                  </div>
                  <div className="d-flex mb-3 justify-content-center">
                    <p>
                      Don't have an account?
                      <a href="/signup"> Register here</a>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default LoginForm;
