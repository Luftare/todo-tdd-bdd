import React, { useState } from 'react';

function App() {
  const [items, setItems] = useState([]);

  const handleClick = () => {
    setItems([...items, 'something']);
  };

  return (
    <div>
      <h1 data-title-e2e-test>Todo app</h1>
      <input data-new-item-text-field-e2e-test />
      <button
        data-create-new-item-button-e2e-test
        data-create-new-item-button-unit-test
        onClick={handleClick}
      >
        Add
      </button>
      <ul data-todo-list-e2e-test data-todo-list-unit-test>
        {items.map(item => (
          <li key={item} data-todo-item-unit-test></li>
        ))}
      </ul>
    </div>
  );
}

export default App;
