import React from 'react';

function App() {
  return (
    <div>
      <h1 data-title-e2e-test>Todo app</h1>
      <input data-new-item-text-field-e2e-test />
      <button data-create-new-item-button-e2e-test>Add</button>
      <ul data-todo-list-e2e-test></ul>
    </div>
  );
}

export default App;
