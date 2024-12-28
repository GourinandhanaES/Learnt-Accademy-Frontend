import React from "react";
import { server } from "../../main";
import { UserData } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { CourseData } from "../../context/CourseContext";

const CourseCard = ({ course }) => {
  const navigate = useNavigate();
  const { user, isAuth } = UserData();

  const { fetchCourses } = CourseData();

  const deleteHandler = async (id) => {
    if (confirm("Are you sure you want to delete this course")) {
      try {
        const { data } = await axios.delete(`${server}/api/course/${id}`, {
          headers: {
            token: localStorage.getItem("token"),
          },
        });

        toast.success(data.message);
        fetchCourses();
      } catch (error) {
        toast.error(error.response.data.message);
      }
    }
  };
  return (
    <div>
      <div className="course-card-container card course-card">
        <img
          src={`${server}/${course.image}`}
          alt={course.title}
          className="card-img-top"
        />
        <div className="card-body">
          <h5 className="card-title">{course.title}</h5>
          <p className="text-muted">{course.createdBy}</p>
          <div className="d-flex align-items-center mb-2">
            <span className="text-warning me-2">★ {course.rating}</span>
            <span className="text-muted">({course.reviews} ratings)</span>
          </div>
          <div>
            <span className="text-danger fw-bold">₹{course.price}</span>
            <span className="text-muted text-decoration-line-through ms-2">
              ₹{course.originalPrice}
            </span>
          </div>
        </div>
        {isAuth ? (
          user && user.role !== "admin" ? (
            user.subscription.includes(course._id) ? (
              <button
                onClick={() => navigate(`/course/study/${course._id}`)}
                className="common-btn"
              >
                Study
              </button>
            ) : (
              <button
                onClick={() => navigate(`/course/${course._id}`)}
                className="common-btn"
              >
                Get Started
              </button>
            )
          ) : (
            <button
              onClick={() => navigate(`/course/study/${course._id}`)}
              className="common-btn"
            >
              Study
            </button>
          )
        ) : (
          <button onClick={() => navigate("/login")} className="common-btn">
            Get Started
          </button>
        )}
        {user && user.role === "admin" && (
          <button
            onClick={() => deleteHandler(course._id)}
            className="common-btn delete-btn"
          >
            Delete
          </button>
        )}
      </div>
    </div>
  );
};

export default CourseCard