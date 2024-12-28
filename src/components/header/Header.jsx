import React from "react";
import { Link } from "react-router-dom";
import logoImg from "../../assets/logoImg.png";

const Header = ({ isAuth }) => {


  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ borderBottom: 'solid 0.5px rgba(0, 0, 0, 0.2)' }}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/"><img style={{ width: '200px' }} src={logoImg} alt="" /></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/courses">Courses</Link></li>
            {isAuth ? (
              <li className="nav-item"><Link className="nav-link" to={"/account"}>Account</Link></li>
            ) : (
              <li className="nav-item"><Link className="nav-link" to={"/login"}>Login</Link></li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;