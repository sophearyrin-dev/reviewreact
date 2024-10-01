import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Todo from "./components/Todo"; // Assuming Todo is in the same folder

function Home() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/todo"); // Navigate to the Todo page
  };

  return (
    <div>
      <h1>Welcome to the Todo App</h1>
      {/* <button className="button"onClick={handleNavigate}>Go to Todo List</button> */}
      <button type="button" className="btn btn-primary" onClick={handleNavigate}>Go to Todo List</button>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </Router>
  );
}

export default App;
