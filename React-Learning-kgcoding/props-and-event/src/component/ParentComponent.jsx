import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const [parentMessage, setParentMessage] = useState('Hello from Parent!');

  const handleButtonClick = () => {
    setParentMessage('Button clicked in Child!');
  };

  return (
    <div>
      <h1>{parentMessage}</h1>
      <ChildComponent message="Message from Parent" onButtonClick={handleButtonClick} />
    </div>
  );
};

export default ParentComponent;
