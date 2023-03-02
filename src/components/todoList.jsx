import React from 'react';

function TodoList(props) {
  return (
    <div>
      {props.items.map((item) => (
        <div key={`task-${item.id}`}>
          <div class="TaskBox">
          <input type="checkbox" checked={item.completed} onChange={() => props.handleCheck(item.id)} />
          <span style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>{item.text}</span>
          <button class="Btn" onClick={() => props.handleDelete(item.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TodoList;