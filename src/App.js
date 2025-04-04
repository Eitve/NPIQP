import React from "react";
import CreateQuizButton from "./components/mainMenuButton/mainMenuButton.jsx";

function App() {
  // Example click handler
  const handleCreateQuiz = () => {
    alert("Create Quiz button clicked!");
  };

  return (
    <div style={{ padding: "50px" }}>
      <CreateQuizButton onClick={handleCreateQuiz} />
    </div>
  );
}

export default App;
