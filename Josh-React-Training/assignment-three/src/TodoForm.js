// TodoForm.js
import React, { useState } from 'react';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';
import { todoFormStyles } from './styles/TodoFormStyles';

const TodoForm = ({ todos, setTodos }) => {
  const { isLoggedIn } = useAuth();
  const [text, setText] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLoggedIn) {
      // Check if the todo with the same text already exists
      if (todos.some((todo) => todo.text === text)) {
        alert('Todo with the same name already exists. Please choose a different name.');
        return;
      }

      const newTodo = { id: todos.length + 1, text };
      setTodos((prevTodos) => [...prevTodos, newTodo]);
      setText('');
    } else {
      // Redirect to login page if not logged in
      navigate('/login');
    }
  };

  return isLoggedIn ? (
    <div style={todoFormStyles.container}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a todo"
          style={todoFormStyles.input}
        />
        <button type="submit" style={todoFormStyles.button}>Add Todo</button>
      </form>
      
    </div>
  ) : null;
};

export default TodoForm;
