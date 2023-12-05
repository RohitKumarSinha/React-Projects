// TodoListStyles.js
export const todoListStyles = {
  todoListContainer: {
    maxWidth: '400px',
    margin: 'auto',
    marginTop: '50px', // Add margin-top to center vertically
    padding: '20px',
  },
  todoList: {
    listStyle: 'none',
    padding: 0,
  },
  todoItem: {
    marginBottom: '8px',
    padding: '8px',
    backgroundColor: '#f0f0f0',
    borderRadius: '4px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  link: {
    textDecoration: 'none',
    color: '#333',
  },
  removeButton: {
    padding: '4px',
    cursor: 'pointer',
    backgroundColor: '#ff5555',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
  },
};
