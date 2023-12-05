// TodoList.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { todoListStyles } from './styles/TodoListStyles';

const TodoList = ({ todos, setTodos }) => {
  const { isLoggedIn } = useAuth();

  const handleRemove = (id) => {
    // Remove the todo with the given id
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return isLoggedIn ? (
    <div style={todoListStyles.todoListContainer}>
      <ul style={todoListStyles.todoList}>
        {Array.isArray(todos) &&
          todos.map((todo) => (
            <li key={todo.id} style={todoListStyles.todoItem}>
              <Link to={`/todos/${todo.id}`} style={todoListStyles.link}>{todo.text}</Link>
              <button onClick={() => handleRemove(todo.id)} style={todoListStyles.removeButton}>Remove</button>
            </li>
          ))}
      </ul>
    </div>
  ) : null;
};

export default TodoList;
