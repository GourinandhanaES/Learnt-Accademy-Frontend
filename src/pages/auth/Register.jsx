import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserData } from "../../context/UserContext";
import registerImage from "../../assets/lrImg.png"; 

const Register = () => {
  const navigate = useNavigate();
  const { btnLoading, registerUser } = UserData();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    await registerUser(name, email, password, navigate);
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center align-items-center">
        <div className="col-12 col-md-6 col-lg-5 order-lg-1 text-center">
          <form onSubmit={submitHandler} className="p-4 bg-light rounded shadow">
            <h2 className="mb-3">Register Here</h2>
            <p className="text-muted">Welcome !!!</p>
            <div className="mb-3">
              <label htmlFor="name" className="form-label visually-hidden">
                Name
              </label>
              <input
                type="text"
                value={name}
                placeholder="Name"
                className="form-control"
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label visually-hidden">
                Email
              </label>
              <input
                type="email"
                value={email}
                placeholder="E-mail"
                className="form-control"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label visually-hidden">
                Password
              </label>
              <input
                type="password"
                value={password}
                placeholder="Password"
                className="form-control"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              disabled={btnLoading}
              type="submit"
              className="common-btn w-100"
            >
              {btnLoading ? "Please Wait..." : "Register"}
            </button>
            <p className="mt-3">
              Already have an account?{" "}
              <Link to="/login" className="text-decoration-none">
                Login
              </Link>
            </p>
          </form>
          <div className="mt-3">
            <button
              className="btn btn-outline-secondary"
              onClick={() => navigate(-1)}
            >
              Go Back
            </button>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-5 order-lg-2 text-center">
          <img
            src={registerImage}
            alt="Register Illustration"
            className="img-fluid mt-4 mt-lg-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;