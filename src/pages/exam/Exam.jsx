import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Exam = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { category } = location.state; 

  const questions = {
    ChatGPT: [
      {
        question: "What is the purpose of ChatGPT?",
        options: ["Chatbot", "Game", "Calculator"],
        answer: "Chatbot",
      },
      {
        question: "Who owns ChatGPT?",
        options: ["OpenAI", "Tesla", "Amazon"],
        answer: "OpenAI",
      },
      {
        question: "What does GPT stand for?",
        options: [
          "Generative Pre-trained Transformer",
          "Global Processing Tool",
          "Google's Programming Tool",
        ],
        answer: "Generative Pre-trained Transformer",
      },
      {
        question: "Which version of ChatGPT is used for coding?",
        options: ["GPT-3", "GPT-4", "Both"],
        answer: "Both",
      },
      {
        question: "What is the model architecture used in ChatGPT?",
        options: ["CNN (Convolutional Neural Network)", "RNN (Recurrent Neural Network)", "Transformer", "GAN (Generative Adversarial Network)"],
        answer: "Transformer",
      },
    ],
    DataScience: [
      {
        question: "What is Data Science?",
        options: ["A branch of AI", "A type of machine learning", "Analyzing data for insights"],
        answer: "Analyzing data for insights",
      },
      {
        question: "What is the first step in a typical data science project?",
        options: ["Model evaluation", "Data cleaning", "Data visualization", "Algorithm selection"],
        answer: "Data cleaning",
      },
      {
        question: "Which programming language is widely used in data science?",
        options: ["JavaScript", "Python", "Java", "PHP"],
        answer: "Python",
      },
      {
        question: "What is a key characteristic of supervised learning in machine learning?",
        options: ["No labeled data", "Uses labeled data", "Focuses on clustering", "Unsupervised feature extraction"],
        answer: "Uses labeled data",
      },
      {
        question: "What is the primary purpose of data visualization?",
        options: ["To build machine learning models", "To clean data", "To present data in an understandable format", "To write algorithms"],
        answer: "To present data in an understandable format",
      },
    ],
    Python: [
      {
        question: "What is Python?",
        options: ["A programming language", "A snake", "A tool for web scraping"],
        answer: "A programming language",
      },
      {
        question: "Which of the following is a valid variable declaration in Python?",
        options: ["int x = 10", "x = 10", "var x = 10", "let x = 10"],
        answer: "x = 10",
      },
      {
        question: "What is the output of the following code? `print(type([]))`",
        options: ["<class 'list'>", "<class 'tuple'>", "<class 'dict'>", "<class 'set'>"],
        answer: "<class 'list'>",
      },
      {
        question: "Which of these is a Python data structure?",
        options: ["Array", "List", "LinkedList", "Stack"],
        answer: "List",
      },
      {
        question: "Which Python library is used for data manipulation and analysis?",
        options: ["NumPy", "Pandas", "Matplotlib", "Scikit-learn"],
        answer: "Pandas",
      },
    ],
    MachineLearning: [
      {
        question: "Which algorithm is used for classification problems in machine learning?",
        options: ["Linear Regression", "K-Means", "Support Vector Machine", "K-Nearest Neighbors"],
        answer: "Support Vector Machine",
      },
      {
        question: "Which method is used to evaluate the performance of a machine learning model?",
        options: ["Training time", "Accuracy", "Learning rate", "Cost function"],
        answer: "Accuracy",
      },
      {
        question: "What is overfitting in machine learning?",
        options: ["The model is too simple", "The model fits the training data too well", "The model does not learn from the training data", "The model performs well on test data but poorly on training data"],
        answer: "The model fits the training data too well",
      },
      {
        question: "Which technique is used to prevent overfitting in machine learning?",
        options: ["Early stopping", "Regularization", "Data augmentation", "All of the above"],
        answer: "All of the above",
      },
      {
        question: "Which of the following is a supervised learning algorithm?",
        options: ["K-Means", "Decision Trees", "Principal Component Analysis", "DBSCAN"],
        answer: "Decision Trees",
      },
    ],
    DeepLearning: [
      {
        question: "What is the basic unit of a neural network?",
        options: ["Neuron", "Node", "Layer", "Neuron Layer"],
        answer: "Neuron",
      },
      {
        question: "What is the function of the activation function in a neural network?",
        options: ["To transform input data", "To initialize weights", "To determine the output of neurons", "To prevent overfitting"],
        answer: "To determine the output of neurons",
      },
      {
        question: "Which of these is a popular deep learning framework?",
        options: ["TensorFlow", "OpenCV", "Scikit-learn", "Matplotlib"],
        answer: "TensorFlow",
      },
      {
        question: "What is the purpose of backpropagation in neural networks?",
        options: ["To calculate the output", "To adjust weights based on error", "To initialize weights", "To prevent overfitting"],
        answer: "To adjust weights based on error",
      },
      {
        question: "What is the primary purpose of convolutional layers in a Convolutional Neural Network (CNN)?",
        options: ["To process sequential data", "To process image data", "To reduce model complexity", "To increase computational efficiency"],
        answer: "To process image data",
      },
    ],
    ArtificialIntelligence: [
      {
        question: "Which of the following is a branch of Artificial Intelligence?",
        options: ["Machine Learning", "Blockchain", "Cloud Computing", "Cybersecurity"],
        answer: "Machine Learning",
      },
      {
        question: "Which algorithm is used in AI to mimic human learning?",
        options: ["Deep Learning", "Reinforcement Learning", "Genetic Algorithms", "All of the above"],
        answer: "All of the above",
      },
      {
        question: "Which programming language is commonly used in AI development?",
        options: ["Python", "JavaScript", "PHP", "Swift"],
        answer: "Python",
      },
      {
        question: "What is Natural Language Processing (NLP) used for?",
        options: ["Image Recognition", "Text Analysis", "Speech Recognition", "Time Series Forecasting"],
        answer: "Text Analysis",
      },
      {
        question: "Which of these is an AI-powered application?",
        options: ["Self-driving cars", "Image editing software", "Web browsers", "Video games"],
        answer: "Self-driving cars",
      },
    ],
  };

  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [examSubmitted, setExamSubmitted] = useState(false);

  useEffect(() => {
    setScore(0); 
    setAnswers({}); 
    setExamSubmitted(false); 
  }, [category]);

  const handleAnswerChange = (questionIndex, selectedOption) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionIndex]: selectedOption,
    }));
  };

  const handleSubmit = () => {
    let totalScore = 0;
    questions[category].forEach((question, index) => {
      if (answers[index] === question.answer) {
        totalScore += 1;
      }
    });
    setScore(totalScore);
    setExamSubmitted(true);
  };

  const currentCategoryQuestions = questions[category] || [];

  return (
    <div className="container my-5">
      <button className="btn btn-secondary mb-4" onClick={() => navigate(-1)}>
        Go Back
      </button>

      <h2 className="text-center mb-4">{category} Exam</h2>

      {!examSubmitted ? (
        <>
          <div>
            {currentCategoryQuestions.map((question, index) => (
              <div className="card mb-4 shadow-sm" key={index}>
                <div className="card-body">
                  <h5 className="card-title">{`Q${index + 1}: ${question.question}`}</h5>
                  {question.options.map((option, i) => (
                    <div className="form-check" key={i}>
                      <input
                        className="form-check-input"
                        type="radio"
                        name={`question-${index}`}
                        id={`question-${index}-option-${i}`}
                        value={option}
                        onChange={() => handleAnswerChange(index, option)}
                        checked={answers[index] === option}
                      />
                      <label
                        className="form-check-label"
                        htmlFor={`question-${index}-option-${i}`}
                      >
                        {option}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              className="btn btn-primary"
              style={{ backgroundColor: "#0a7d81" }}
              onClick={handleSubmit}
              disabled={Object.keys(answers).length < currentCategoryQuestions.length}
            >
              Submit Exam
            </button>
          </div>
        </>
      ) : (
        <div className="text-center mt-4">
          <h3>
            Your Score: {score}/{currentCategoryQuestions.length}
          </h3>
          {score === currentCategoryQuestions.length ? (
            <p className="text-success fw-bold">🎉 Congratulations! Full marks! 🎉</p>
          ) : (
            <p className="text-danger">Good effort! Try again to improve your score.</p>
          )}
          <button className="btn btn-secondary me-3" onClick={() => setExamSubmitted(false)}>
            Retry Exam
          </button>
          <button className="btn btn-primary" onClick={() => navigate(-1)} style={{ backgroundColor: "#0a7d81" }}>
            Go Back to Course
          </button>
        </div>
      )}
    </div>
  );
};

export default Exam;