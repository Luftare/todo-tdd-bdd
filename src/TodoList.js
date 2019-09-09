import React from 'react';

export default ({
  items,
  addItem,
  newItemName,
  setNewItemName,
  deleteItem,
}) => (
  <div>
    <h1 data-title-e2e-test>Todo App</h1>

    <input
      value={newItemName}
      onChange={e => setNewItemName(e.target.value)}
      data-new-item-name-unit-test
      data-new-item-text-field-e2e-test
    />
    <button
      onClick={addItem}
      data-add-item-unit-test
      data-create-new-item-button-e2e-test
    >
      Add
    </button>
    <ul data-todo-list-e2e-test>
      {items.map(item => (
        <li key={item} data-todo-item-e2e-test={item}>
          <span>{item}</span>
          <button
            onClick={() => deleteItem(item)}
            data-delete-item-unit-test={item}
            data-delete-button-e2e-test={item}
          >
            x
          </button>
        </li>
      ))}
    </ul>
  </div>
);
