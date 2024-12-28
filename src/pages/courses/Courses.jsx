import React, { useState } from "react";
import { CourseData } from "../../context/CourseContext";
import CourseCard from "../../components/coursecard/CourseCard";

const Courses = () => {
  const { courses } = CourseData();
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["ChatGPT", "Data Science", "Python", "Machine Learning", "Deep Learning", "Artificial Intelligence", "All"];

  const filteredCourses = selectedCategory === "All" 
    ? courses 
    : courses.filter((course) => course.category === selectedCategory);

  return (
    <div className="courses">
      <h2 className="text-dark mt-4">Explore Our Popular Courses</h2>

      {/* Category Buttons */}
      <div className="category-buttons">
        {categories.map((category, index) => (
          <button
            key={index}
            style={{backgroundColor:"#0a7d81", color:"white"}}
            className={`btn btn-outline-secondary category-btn ${selectedCategory === category ? "active" : ""}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Courses */}
      <div className="course-container">
        {filteredCourses && filteredCourses.length > 0 ? (
          filteredCourses.map((course) => <CourseCard key={course._id} course={course} />)
        ) : (
          <p className="text-center">No courses available in this category.</p>
        )}
      </div>
    </div>
  );
};

export default Courses;