import React from 'react';

export default ({ name, deleteItem }) => (
  <li>
    {name}
    <button onClick={deleteItem} data-delete-item-unit-test>
      x
    </button>
  </li>
);
