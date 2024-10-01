import React, { useState, useEffect } from "react";
function Todo() {

  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/")
     .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
     .then((data) => {
        console.log("Fetched data:", data);
        setTodos(data);
        setLoading(false);
      })
     .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error.message);
        setLoading(false);
      });
  }, []);
if (loading) {
  return <p>Loading...</p>;
}

if (error) {
  return <p>Error: {error}</p>;
}

return (
  <div className="todos-container">
    {todos.map((todo) => (
      <div key={todo.id} className="todo-item">
        <h3>{todo.title}</h3>
        <p><strong>User ID:</strong> {todo.userId}</p>
        <p><strong>ID:</strong> {todo.id}</p>
        <p><strong>Completed:</strong> {todo.completed? "True" : "False"}</p>
        <hr />
      </div>
    ))}
  </div>
)
}
export default Todo;
