import React from 'react';

function TodoList(props) {
  return (
    <div>
      {props.items.map((item) => (
        <div key={item.id}>
          <input type="checkbox" checked={item.completed} onChange={() => props.handleCheck(item.id)} />
          <span style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>{item.text}</span>
          <button onClick={() => props.handleDelete(item.id)}>x</button>
        </div>
      ))}
    </div>
  );
}

export default TodoList;