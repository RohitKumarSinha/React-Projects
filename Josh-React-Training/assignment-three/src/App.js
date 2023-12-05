// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes, Navigate } from 'react-router-dom';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import TodoItem from './TodoItem';
import Login from './Login';
import Home from './Home'; // Import the new Home component
import { AuthProvider, useAuth } from './AuthContext';
import { headerStyles } from './styles/HeaderStyles';

const ProtectedRoute = ({ element }) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? element : <Navigate to="/login" />;
};

const App = () => {
  const [todos, setTodos] = useState([]);

  return (
    <AuthProvider>
      <Router>
        <div>
          <header style={headerStyles.header}>
            <nav style={headerStyles.nav}>
              <Link to="/" style={headerStyles.navLink}>Home</Link>
              <Link to="/todos" style={headerStyles.navLink}>Todos</Link>
            </nav>
          </header>

          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/todos"
              element={
                <ProtectedRoute
                  element={
                    <div style={headerStyles.contentContainer}>
                      <h2 style={{ textAlign: 'center' }}>Todos</h2>
                      <TodoForm todos={todos} setTodos={setTodos} />
                      <TodoList todos={todos} setTodos={setTodos} />
                    </div>
                  }
                />
              }
            />
            <Route
              path="/todos/:id"
              element={
                <ProtectedRoute element={<TodoItem todos={todos} />} />
              }
            />
            <Route path="/" element={<Home />} /> {/* Add the Home component route */}
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
