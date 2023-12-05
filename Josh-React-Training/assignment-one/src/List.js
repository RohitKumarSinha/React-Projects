// src/List.js
import React, { useState } from 'react';
import './List.css'; // Import the CSS file

const List = () => {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);
  const [newItem, setNewItem] = useState('');

  const addItem = () => {
    if (newItem.trim() !== '') {
      setItems([...items, newItem]);
      setNewItem('');
    }
  };

  const removeItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  return (
    <div className="list-container">
      <h2 className="list-title">List</h2>
      <ul className="list-ul">
        {items.map((item, index) => (
          <li key={index} className="list-item">
            {item}
            <button className="list-remove-button" onClick={() => removeItem(index)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
      <div className="list-input-container">
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          className="list-input"
          placeholder="Enter a new item"
        />
        <button onClick={addItem} className="list-add-button">
          Add Item
        </button>
      </div>
    </div>
  );
};

export default List;
