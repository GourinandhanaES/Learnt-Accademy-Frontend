import React from "react";

const Testimonials = () => {
  const testimonialsData = [
    {
      id: 1,
      name: "Evin Joju",
      position: "Student",
      message:
        "This platform helped me learn so effectively. The courses are amazing and the instructors are top-notch.",
      image:
        "https://static.vecteezy.com/system/resources/previews/024/354/252/non_2x/businessman-isolated-illustration-ai-generative-free-photo.jpg",
    },
    {
      id: 2,
      name: "Ayisha A A",
      position: "Student",
      message:
        "I've learned more here than in any other place. The interactive lessons and quizzes make learning enjoyable.",
      image:
        "https://i.pinimg.com/736x/c3/e9/7a/c3e97aa255c604a1123e554cc12eefdc.jpg",
    },
    {
      id: 3,
      name: "Shivani",
      position: "Educator",
      message:
        "As an educator, I've found this platform to be a game-changer. The tools provided are easy to use and effective.",
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/038/974/578/small_2x/ai-generated-professional-portrait-of-a-competent-woman-free-photo.jpg",
    },
    {
      id: 4,
      name: "Alan Yuye",
      position: "Professional",
      message:
        "Learning new skills has never been this seamless. This platform offers exactly what I needed to grow in my career.",
      image:
        "https://r2.erweima.ai/imgcompressed/compressed_3bd8a54079628cbf3098ca951c74a939.webp",
    },
  ];

  return (
    <section className="testimonials">
      <h1 className="head text-center mb-4">What our Users say</h1>
      <div className="testmonials-cards">
        {testimonialsData.map((e) => (
          <div className="testimonial-card" key={e.id}>
            <div className="student-image">
              <img src={e.image} alt="" />
            </div>
            <p className="message">{e.message}</p>
            <div className="info">
              <p className="name">{e.name}</p>
              <p className="position">{e.position}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;