import { useState } from 'react';

function TodoModel({ render }) {
  const [items, setItems] = useState([]);
  const [newItemName, setNewItemName] = useState('');

  const addItem = () => {
    setItems([...items, newItemName]);
    setNewItemName('');
  };
  const deleteItem = name => setItems(items.filter(item => item !== name));

  return render({
    items,
    addItem,
    deleteItem,
    newItemName,
    setNewItemName,
  });
}

export default TodoModel;
