import React from "react";
import "./mainMenuButtonStyles.css"; // We'll define styles here

function CreateQuizButton({ onClick }) {
  return (
    <button className="create-quiz-btn" onClick={onClick}>
      {}
      <span className="pen-icon"></span>
      <span className="button-text">CREATE A QUIZ</span>
    </button>
  );
}

export default CreateQuizButton;
