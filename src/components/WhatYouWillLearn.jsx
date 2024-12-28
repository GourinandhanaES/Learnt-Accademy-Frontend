import React from 'react';

const WhatYouWillLearn = () => {
  const points = [
    "Master core concepts and practical skills.",
    "Build hands-on experience through projects.",
    "Solve real-world challenges effectively.",
    "Learn industry-relevant tools and techniques.",
    "Create a portfolio to showcase your expertise.",
    "Prepare for career opportunities or entrepreneurship.",
    "Understand professional best practices.",
    "Gain skills for continuous learning and growth."
  ];

  return (
    <div className=" container what-you-will-learn my-5 text-center">
      <h2>What You Will Learn</h2>
      <ul className="list-unstyled">
        {points.map((point, index) => (
          <li key={index} className="mb-2 d-flex align-items-start">
            <i className="bi bi-check-circle-fill text-success me-2"></i>
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WhatYouWillLearn;
