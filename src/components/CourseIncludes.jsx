import React from 'react';

const CourseIncludes = () => {
  const includes = [
    { icon: "⏱", text: "61 hours on-demand video" },
    { icon: "💻", text: "7 coding exercises" },
    { icon: "📚", text: "65 articles" },
    { icon: "📥", text: "194 downloadable resources" },
    { icon: "📱", text: "Access on mobile and TV" },
    { icon: "📜", text: "Certificate of completion" }
  ];

  return (
    <div className="container course-includes my-5">
      <h2>This Course Includes:</h2>
      <ul className="list-unstyled">
        {includes.map((item, index) => (
          <li key={index} className="mb-3 d-flex align-items-start">
            <span className="me-2">{item.icon}</span>
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseIncludes;
