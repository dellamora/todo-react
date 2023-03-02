import React, { useState } from 'react';
import TodoList from './components/todoList';
import TodoForm from './components/form';

function App() {
  const [items, setItems] = useState([]);

  const handleAdd = (text) => {
    const newItems = [...items, { id: Date.now(), text: text, completed: false }];
    setItems(newItems);
  };

  const handleCheck = (id) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, completed: !item.completed };
      } else {
        return item;
      }
    });
    setItems(newItems);
  };

  const handleDelete = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };

  return (
    <div>
      <h1>Todo <span>List</span></h1>
      <TodoForm handleAdd={handleAdd} />
      <TodoList items={items} handleCheck={handleCheck} handleDelete={handleDelete} />
    </div>
  );
}

export default App;