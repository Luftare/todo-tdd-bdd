import React from 'react';
import Item from './Item';

export default ({
  items,
  addItem,
  newTodoName,
  setNewItemName,
  deleteItem,
}) => (
  <div>
    <input
      value={newTodoName}
      onChange={e => setNewItemName(e.target.value)}
      data-new-item-name-unit-test
    />
    <button onClick={addItem} data-add-item-unit-test>
      Add
    </button>
    <ul>
      {items.map(item => (
        <li key={item}>
          <span>{item}</span>
          <button
            data-delete-item-unit-test={item}
            onClick={() => deleteItem(item)}
          >
            x
          </button>
        </li>
      ))}
    </ul>
  </div>
);
