import React, { Fragment, useState } from "react";
import EmployeeApi from "../../Service/employeeApi";
import { useNavigate } from "react-router-dom";

const Registration = (props) => {
  let [state, setState] = useState({
    user: {
      name: "",
      email: "",
      password: "",
      role: "",
      address: "",
      phone: "",
      dob: "",
    },
  });

  // Navigate hook
  const navigate = useNavigate();

  // Register user details
  let { user } = state;

  // Handle user fields value
  let updateChange = (event) => {
    setState((state) => ({
      user: {
        ...state.user,
        [event.target.name]: event.target.value,
      },
    }));
  };
  
  // Handle signup 
  let formSubmit = (event) => {
    event.preventDefault();
    EmployeeApi.CreateEmployee(user, (data) => {
      if (data.status === 200) {
        // navigate to login page
        navigate("/");
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
                <p className="h3">Registration </p>
              </div>
              <div className="card-body bg-light">
                <form onSubmit={formSubmit}>
                  <div className="mb-3">
                    <input
                      name="name"
                      type="text"
                      onChange={updateChange}
                      className="form-control"
                      placeholder="Name"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      name="email"
                      type="text"
                      onChange={updateChange}
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      name="password"
                      type="text"
                      className="form-control"
                      placeholder="Password"
                      onChange={updateChange}
                    />
                  </div>
                  <div className="mb-2">
                    <input
                      name="phone"
                      type="text"
                      className="form-control"
                      placeholder="Phone"
                      onChange={updateChange}
                    />
                  </div>
                  <div className="mb-3">
                    <span className="p-1">DOB</span>
                    <input
                      name="dob"
                      type="date"
                      className="form-control"
                      placeholder="DOB"
                      onChange={updateChange}
                    />
                  </div>
                  <div className="mb-3">
                    <select
                      name="role"
                      onChange={updateChange}
                      className="form-select"
                    >
                      <option value="">Select Designation</option>
                      <option value="MD">MD</option>
                      <option value="CEO">CEO</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <textarea
                      row={2}
                      name="address"
                      className="form-control"
                      placeholder="Address"
                      onChange={updateChange}
                    />
                  </div>
                  <div className="d-flex mb-3 justify-content-center">
                    <button
                      type="submit"
                      className="btn btn-danger btn-sm m-1"
                      value="register"
                    >
                      Signup
                    </button>
                    
                  </div>
                  <div className="d-flex mb-3 justify-content-center">
                      <p>
                        have an account?
                        <a href="/"> Login</a>
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

export default Registration;
