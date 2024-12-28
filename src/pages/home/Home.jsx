import React from "react";
import { useNavigate } from "react-router-dom";
import Testimonials from "../../components/testimonials/Testimonials";

const Home = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/register'); 
  };

  return (
    <div>
    <div className="container text-center mt-5">
      <h1 className='heading'>Discover Why Learners <span className='head'>Choose Learnt</span> for Unmatched Success</h1>
      <p>Join a thriving community of over 10,000 learners who trust Learnt Accademy to elevate their skills and achieve their goals. Take a personalized tour of our cutting-edge learning platform and see how our expert-crafted solutions can empower your journey to excellence.</p>
      <button 
        style={{backgroundColor:'#0a7d81', color:'white'}}
        className="btn mt-3" 
        onClick={handleGetStarted}
      >Get Started</button>
      <button style={{backgroundColor:'white', color:'black', border:'1px solid black'}} className="btn mt-3 ms-3" onClick={()=>navigate("/courses")}>View Courses</button>
      </div>

      {/* cards section */}
      <section className="py-5 mt-5" style={{ backgroundColor: "#e3ebfc" }}>
        <div className="container">
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card text-center shadow-sm p-3" style={{ borderRadius: "10px" }}>
                <div className="card-body">
                  <div className="mb-3">
                    <i className="bi bi-book text-primary" style={{ fontSize: "2rem" }}></i>
                  </div>
                  <h5 className="card-title fw-bold">Exam preparation batches</h5>
                  <p className="card-text">Get ahead with expert-designed preparation plans tailored for exams, ensuring success every time.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card text-center shadow-sm p-3" style={{ borderRadius: "10px" }}>
                <div className="card-body">
                  <div className="mb-3">
                    <i className="bi bi-question text-primary" style={{ fontSize: "2rem" }}></i>
                  </div>
                  <h5 className="card-title fw-bold">Assessments</h5>
                  <p className="card-text">Evaluate your progress with regular assessments to ensure you're on track to meet your goals.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card text-center shadow-sm p-3" style={{ borderRadius: "10px" }}>
                <div className="card-body">
                  <div className="mb-3">
                    <i className="bi bi-mortarboard text-primary" style={{ fontSize: "2rem" }}></i>
                  </div>
                  <h5 className="card-title fw-bold">Skilled Instructors</h5>
                  <p className="card-text">Learn from the best! Our instructors are experts in their fields, dedicated to helping you succeed.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card text-center shadow-sm p-3" style={{ borderRadius: "10px" }}>
                <div className="card-body">
                  <div className="mb-3">
                    <i className="bi bi-laptop text-primary" style={{ fontSize: "2rem" }}></i>
                  </div>
                  <h5 className="card-title fw-bold">Online Classes</h5>
                  <p className="card-text">Access interactive and engaging classes anytime, anywhere, tailored for your convenience.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card text-center shadow-sm p-3" style={{ borderRadius: "10px" }}>
                <div className="card-body">
                  <div className="mb-3">
                    <i className="bi bi-cash text-primary" style={{ fontSize: "2rem" }}></i>
                  </div>
                  <h5 className="card-title fw-bold">Affordable Prices</h5>
                  <p className="card-text">Gain access to high-quality courses at prices that fit your budget. Learn more for less.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card text-center shadow-sm p-3" style={{ borderRadius: "10px" }}>
                <div className="card-body">
                  <div className="mb-3">
                    <i className="bi bi-award text-primary" style={{ fontSize: "2rem" }}></i>
                  </div>
                  <h5 className="card-title fw-bold">Track Your Progress</h5>
                  <p className="card-text">Stay motivated by keeping track of your learning journey and achievements in real time.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* black div */}
      <div className='text-light d-flex justify-content-center align-items-center text-center w-100' style={{height:'auto', backgroundColor:'black'}}>
        <div>
        <h1 className='mt-5'>Start Your <span className='head'>Teaching Journey Today</span></h1>
        <p>Transform your knowledge into a thriving online academy with Learnyst.</p>
        <button style={{backgroundColor:'#0a7d81', color:'white'}} className="btn mt-3" onClick={handleGetStarted}>Start Free Trial</button>
      <Testimonials />
      </div>
      </div>
    </div>
  );
};

export default Home;