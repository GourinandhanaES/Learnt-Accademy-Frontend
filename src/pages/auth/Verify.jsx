import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserData } from "../../context/UserContext";
import ReCAPTCHA from "react-google-recaptcha";

const Verify = () => {
  const [otp, setOtp] = useState("");
  const { btnLoading, verifyOtp } = UserData();
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  function onChange(value) {
    console.log("Captcha value:", value);
    setShow(true);
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    await verifyOtp(Number(otp), navigate);
  };
  return (
    <div className="auth-page d-flex justify-content-center align-items-center">
      <div className="auth-form p-4 shadow-lg rounded bg-white" style={{ maxWidth: "400px", width: "100%" }}>
        <h2 className="head text-center mb-4">Verify Account</h2>
        <form onSubmit={submitHandler}>
          <div className="text-center mb-3">
          <label htmlFor="otp" className="me-2">Otp</label>
          <input
            type="number"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
          />
          </div>
          <div className="d-flex justify-content-center align-items-center text-center mb-3">
          <ReCAPTCHA
            sitekey=" 6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
            onChange={onChange}
          />
          </div>
          {show && (
            <button disabled={btnLoading} type="submit" className="common-btn">
              {btnLoading ? "Please Wait..." : "Verify"}
            </button>
          )}
        </form>
        <p className="text-center mt-3">
          Go to <Link to="/login">Login</Link> page
        </p>
      </div>
    </div>
  );
};

export default Verify;