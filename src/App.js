import React from 'react';
import TodoModel from './TodoModel';
import TodoList from './TodoList';

function App() {
  return <TodoModel render={TodoList}></TodoModel>;
}

export default App;
