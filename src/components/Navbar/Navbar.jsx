import React from "react";
import "./Navbar.css";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid ">
          <Link className="navbar-brand" href="/">
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse navbar-edit" id="navbarNav">
            <ul className="navbar-nav navbar-custom">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" href="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/">
                  Features
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/">
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/">
                  Contact
                </Link>
              </li>
            </ul>
            <button
              // type="button"
              // className="d-flex btn cta_button-nav"
              // data-bs-toggle="modal"
              // data-bs-target="#exampleModal"
              href=""
              className="btn btn-default cta_button-nav my-3"
              data-toggle="modal"
              data-target="#modalLRForm"
            >
              Book an appointment
            </button>

            {/* <<!--Modal: Login / Register Form--> */}
            <div
              className="modal fade overflow-hidden"
              id="modalLRForm"
              tabindex="-1"
              role="dialog"
              aria-labelledby="myModalLabel"
              aria-hidden="true"
            >
              <div
                className="modal-dialog cascading-modal overflow-hidden"
                role="document"
              >
                {/* <!--Content--> */}
                <div className="modal-content">
                  {/* <!--Modal cascading tabs--> */}
                  <div className="modal-c-tabs">
                    {/* <!-- Nav tabs --> */}
                    <ul
                      className="nav nav-tabs md-tabs tabs-2 light-blue darken-3"
                      role="tablist"
                    >
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          data-toggle="tab"
                          href="#panel7"
                          role="tab"
                        >
                          <i className="fas fa-user mr-1"></i>
                          Login
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          data-toggle="tab"
                          href="#panel8"
                          role="tab"
                        >
                          <i className="fas fa-user-plus mr-1"></i>
                          Register
                        </a>
                      </li>
                    </ul>

                    {/* <!-- Tab panels --> */}
                    <div className="tab-content">
                      {/* <!--Panel 7--> */}
                      <div
                        className="tab-pane fade in show active"
                        id="panel7"
                        role="tabpanel"
                      >
                        {/* <!--Body--> */}
                        <div className="modal-body mb-1">
                          <div className="md-form form-sm mb-5">
                            <i className="fas fa-envelope prefix"></i>
                            <input
                              type="email"
                              id="modalLRInput10"
                              className="form-control form-control-sm validate"
                            />
                            <label
                              data-error="wrong"
                              data-success="right"
                              for="modalLRInput10"
                            >
                              Your email
                            </label>
                          </div>

                          <div className="md-form form-sm mb-4">
                            <i className="fas fa-lock prefix"></i>
                            <input
                              type="password"
                              id="modalLRInput11"
                              className="form-control form-control-sm validate"
                            />
                            <label
                              data-error="wrong"
                              data-success="right"
                              for="modalLRInput11"
                            >
                              Your password
                            </label>
                          </div>
                          <div className="text-center mt-2">
                            <button className="btn btn-info">
                              Log in <i className="fas fa-sign-in ml-1"></i>
                            </button>
                          </div>
                        </div>
                        {/* <!--Footer--> */}
                        <div className="modal-footer">
                          <div className="options text-center text-md-right mt-1">
                            <p>
                              Not a member?{" "}
                              <a href="#" className="blue-text">
                                Sign Up
                              </a>
                            </p>
                            <p>
                              Forgot{" "}
                              <a href="#" className="blue-text">
                                Password?
                              </a>
                            </p>
                          </div>
                          <button
                            type="button"
                            className="btn btn-outline-info waves-effect ml-auto"
                            data-dismiss="modal"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                      {/* <!--/.Panel 7--> */}

                      {/* <!--Panel 8--> */}
                      <div
                        className="tab-pane fade"
                        id="panel8"
                        role="tabpanel"
                      >
                        {/* <!--Body--> */}
                        <div className="modal-body">
                          <div className="md-form form-sm mb-5">
                            <i className="fas fa-envelope prefix"></i>
                            <input
                              type="email"
                              id="modalLRInput12"
                              className="form-control form-control-sm validate"
                            />
                            <label
                              data-error="wrong"
                              data-success="right"
                              for="modalLRInput12"
                            >
                              Your email
                            </label>
                          </div>

                          <div className="md-form form-sm mb-5">
                            <i className="fas fa-lock prefix"></i>
                            <input
                              type="password"
                              id="modalLRInput13"
                              className="form-control form-control-sm validate"
                            />
                            <label
                              data-error="wrong"
                              data-success="right"
                              for="modalLRInput13"
                            >
                              Your password
                            </label>
                          </div>

                          <div className="md-form form-sm mb-4">
                            <i className="fas fa-lock prefix"></i>
                            <input
                              type="password"
                              id="modalLRInput14"
                              className="form-control form-control-sm validate"
                            />
                            <label
                              data-error="wrong"
                              data-success="right"
                              for="modalLRInput14"
                            >
                              Repeat password
                            </label>
                          </div>

                          <div className="text-center form-sm mt-2">
                            <button className="btn btn-info">
                              Sign up <i className="fas fa-sign-in ml-1"></i>
                            </button>
                          </div>
                        </div>
                        {/* <!--Footer--> */}
                        <div className="modal-footer">
                          <div className="options text-right">
                            <p className="pt-1">
                              Already have an account?{" "}
                              <a href="#" className="blue-text">
                                Log In
                              </a>
                            </p>
                          </div>
                          <button
                            type="button"
                            className="btn btn-outline-info waves-effect ml-auto"
                            data-dismiss="modal"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                      {/* <!--/.Panel 8--> */}
                    </div>
                  </div>
                </div>
                {/* <!--/.Content--> */}
              </div>
            </div>
            {/* <!--Modal: Login / Register Form--> */}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
