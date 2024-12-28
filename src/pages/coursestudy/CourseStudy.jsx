import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { CourseData } from "../../context/CourseContext";
import { server } from "../../main";

const CourseStudy = ({ user }) => {
  const params = useParams();

  const { fetchCourse, course } = CourseData();
  const navigate = useNavigate();

  if (user && user.role !== "admin" && !user.subscription.includes(params.id))
    return navigate("/");

  useEffect(() => {
    fetchCourse(params.id);
  }, []);

  const categories = [
    "ChatGPT", "Data Science", "Python", "Machine Learning", "Deep Learning", "Artificial Intelligence"
  ];

  const handleTakeAssessment = (category) => {
    navigate('/exam', { state: { category } });
  };


  return (
    <>
      {course && (
        <div className="course-study-page container my-5">
         <button className="btn btn-secondary mb-4" onClick={() => navigate(-1)}>Go Back</button>
         <div className="row">
         <div className="col-md-6">
            <img
              src={`${server}/${course.image}`}
              alt={course.title}
              className="img-fluid rounded"
            />
          </div>
          <div className="col-md-6">
          <h2>{course.title}</h2>
          <p className="text-muted fs-5">Instructor: {course.createdBy}</p>
          <div className="d-flex align-items-center mb-3">
            <span className="text-warning me-2">★ {course.rating}</span>
            <span className="text-muted fs-6">({course.reviews} ratings)</span>
          </div>
          <p className="text-danger fw-bold">₹{course.price}</p>
          <p className="text-muted text-decoration-line-through fs-6">
            ₹{course.originalPrice}
          </p>
          <p>{course.description}</p>
          <Link to={`/lectures/${course._id}`} style={{textDecoration:'none'}}>
            <button className="button">Lectures</button>
          </Link>
          <button onClick={() => handleTakeAssessment(course.category)} className="button ms-3"> Take Assessment</button>
          </div>
        </div>
      </div>                              
      )}
    </>
  );
};

export default CourseStudy;