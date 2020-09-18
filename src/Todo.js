import React from 'react';

function Todo(props) {
  return (
    <div className="todo">
      <li>{props.todo.value}</li>
      <button className="button" onClick={() => props.handleDelete(props.todo.id)}>X</button>
    </div>
  );
}

export default Todo;
