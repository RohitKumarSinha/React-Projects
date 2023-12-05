// TodoItem.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { todoItemStyles } from './styles/TodoItemStyles';

const TodoItem = ({ todos }) => {
  const { id } = useParams();
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    // Redirect or display a message for unauthorized access
    return <p>Please login to view this page.</p>;
  }

  // Find the todo with the given id
  const todo = todos.find((todo) => todo.id === parseInt(id, 10));

  if (!todo) {
    return <p>Todo not found.</p>;
  }

  return (
    <div style={todoItemStyles.container}>
      <h2 style={todoItemStyles.title}>Todo Details</h2>
      <p style={todoItemStyles.info}>ID: {todo.id}</p>
      <p style={todoItemStyles.info}>Text: {todo.text}</p>
    </div>
  );
};

export default TodoItem;
