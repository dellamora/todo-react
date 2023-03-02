import React, { useState } from 'react';

function Form(props) {
  const [text, setText] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (text.length === 0) {
      return;
    }
    props.handleAdd(text);
    setText('');
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Add a new task" value={text} onChange={handleChange} />
      <button type="submit" class='Btn'>Adicionar</button>
    </form>
  );
}

export default Form;