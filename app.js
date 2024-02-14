import React, { useState } from "react";

const App = () => {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = () => {
    setTodos([...todos, { text: "", completed: false }]);
  };

  const handleChange = (e, index) => {
    const newTodos = [...todos];
    newTodos[index].text = e.target.value;
    setTodos(newTodos);
  };

  const handleToggleComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <input
        type="text"
        placeholder="Add a new to-do"
        value={todos[todos.length - 1].text}
        onChange={(e) => handleChange(e, todos.length - 1)}
      />
      <button onClick={handleAddTodo}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleComplete(index)}
            />
            {todo.text}
            <button onClick={() => handleDeleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;