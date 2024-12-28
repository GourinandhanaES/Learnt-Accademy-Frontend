import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserData } from "../../context/UserContext";
import { CourseData } from "../../context/CourseContext";
import loginImage from "../../assets/lrImg.png";

const Login = () => {
  const navigate = useNavigate();
  const { btnLoading, loginUser } = UserData();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { fetchMyCourse } = CourseData();

  const submitHandler = async (e) => {
    e.preventDefault();
    await loginUser(email, password, navigate, fetchMyCourse);
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center align-items-center">
        <div className="col-12 col-md-6 col-lg-5 order-lg-1 text-center">
          <form onSubmit={submitHandler} className="p-4 bg-light rounded shadow">
            <h2 className="mb-3">Login Here</h2>
            <p className="text-muted">Welcome !!!</p>
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
              {btnLoading ? "Please Wait..." : "Login"}
            </button>
            <p className="mt-3">
              Don't have an account?{" "}
              <Link to="/register" className="text-decoration-none">
                Sign up for free
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
            src={loginImage}
            alt="Login Illustration"
            className="img-fluid mt-4 mt-lg-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
