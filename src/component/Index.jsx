import React, { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault(); //It prevents the default form submission behavior to avoid page refresh.
    if (newTodo.trim() === "") return;

    setTodos([...todos,]);
    setNewTodo("");
  };

  return (
    <div>
      <h2>Todo List</h2>

      <form onSubmit={handleFormSubmit}>
        <div class="input-group mb-3">
          <input
            type="text"
            value={newTodo}
            onChange={handleInputChange}
            placeholder="Enter a new todo"
            class="form-control"
            aria-describedby="basic-addon2"
          />
          <div class="input-group-append">
            <button class="btn btn-outline-secondary" type="submit">
              Button
            </button>
          </div>
        </div>
      </form>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
