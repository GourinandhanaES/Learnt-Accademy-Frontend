import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CourseData } from "../../context/CourseContext";
import { server } from "../../main";
import axios from "axios";
import toast from "react-hot-toast";
import { UserData } from "../../context/UserContext";
import Loading from "../../components/loading/Loading";
import WhatYouWillLearn from "../../components/WhatYouWillLearn";
import CourseIncludes from "../../components/CourseIncludes";

const CourseDescription = ({ user }) => {
  const params = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const { fetchUser } = UserData();

  const { fetchCourse, course, fetchCourses, fetchMyCourse } = CourseData();

  useEffect(() => {
    fetchCourse(params.id);
  }, []);

  const checkoutHandler = async () => {
    const token = localStorage.getItem("token");
    setLoading(true);

    const {
      data: { order },
    } = await axios.post(
      `${server}/api/course/checkout/${params.id}`,
      {},
      {
        headers: {
          token,
        },
      }
    );

    const options = {
      key: "rzp_test_2bQuqLdJxDqpRm", 
      amount: order.id, 
      currency: "INR",
      name: "Learnt Accademy", 
      description: "Learn with us",
      order_id: order.id, 

      handler: async function (response) {
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
          response;

        try {
          const { data } = await axios.post(
            `${server}/api/verification/${params.id}`,
            {
              razorpay_order_id,
              razorpay_payment_id,
              razorpay_signature,
            },
            {
              headers: {
                token,
              },
            }
          );

          await fetchUser();
          await fetchCourses();
          await fetchMyCourse();
          toast.success(data.message);
          setLoading(false);
          navigate(`/payment-success/${razorpay_payment_id}`);
        } catch (error) {
          toast.error(error.response.data.message);
          setLoading(false);
        }
      },
      theme: {
        color: "#3399cc",
      },
    };
    const razorpay = new window.Razorpay(options);

    razorpay.open();
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          {course && (
            <div className="course-description">
              <div className="container my-5">
              <button className="btn btn-secondary mb-4" onClick={() => navigate(-1)}>
                Go Back
              </button>
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
                  </div>
                </div>
              </div>
              {user && user.subscription.includes(course._id) ? (
                <button
                  onClick={() => navigate(`/course/study/${course._id}`)}
                  className="button"
                >
                  Study
                </button>
              ) : (
                <button onClick={checkoutHandler} className="button d-block mx-auto my-3">
                  Buy Now
                </button>
              )}
            </div>
          )}
        </>
      )}
      <WhatYouWillLearn />
      <CourseIncludes />
    </>
  );
};

export default CourseDescription;