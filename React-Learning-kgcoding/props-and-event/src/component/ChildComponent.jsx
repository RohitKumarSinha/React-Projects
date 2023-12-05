import React from 'react';

const ChildComponent = ({ message, onButtonClick }) => {
  return (
    <div>
      <p>{message}</p>
      <button onClick={onButtonClick}>Click me!</button>
    </div>
  );
};

export default ChildComponent;
