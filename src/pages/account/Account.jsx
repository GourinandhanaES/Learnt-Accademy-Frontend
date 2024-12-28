import React from "react";
import { MdDashboard } from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";
import { UserData } from "../../context/UserContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Account = ({ user }) => {
  const { setIsAuth, setUser } = UserData();
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.clear();
    setUser([]);
    setIsAuth(false);
    toast.success("Logged Out");
    navigate("/login");
  };

  return (
    <div className="container my-5">
      {user && (
        <div className="card shadow p-4">
          <h2 className="text-center mb-4 text-bold">My Profile</h2>
          <div className="profile-info text-center">
            <p className="mb-3">
              <strong>Name:</strong> {user.name}
            </p>
            <p className="mb-4">
              <strong>Email:</strong> {user.email}
            </p>
            <div className="d-flex justify-content-center flex-wrap gap-3">
              <button
                onClick={() => navigate(`/${user._id}/dashboard`)}
                className=" d-flex align-items-center gap-2"
                style={{backgroundColor:"0a7d81", color:"white"}}
              >
                <MdDashboard />
                Dashboard
              </button>
              {user.role === "admin" && (
                <button
                  onClick={() => navigate(`/admin/dashboard`)}
                  className=" d-flex align-items-center gap-2"
                  style={{backgroundColor:"0a7d81", color:"white"}}
                >
                  <MdDashboard />
                  Admin Dashboard
                </button>
              )}
              <button
                onClick={logoutHandler}
                className="btn btn-danger d-flex align-items-center gap-2"
              >
                <IoMdLogOut />
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Account;