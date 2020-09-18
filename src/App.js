import React, {useState} from 'react';
import Todo from './Todo';

function App() {
  const [value, setValue] = useState('');
  const [todos, setTodos] = useState([]);

  const handleInput = (e) => {
    setValue(e.target.value)
  }

  const handleAdding = (e) => {
    e.preventDefault();
    if (value === '') return;
    setTodos(prevTodos => {
      return [...prevTodos, {id: Math.random(), value: value}]
    })
    setValue('')
  }

  const handleDelete = (id) => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  return (
    <div className="App">
      <div className="form-center">
        <form className="form">
          <input type="text" placeholder="add todo" value={value} onChange={handleInput}/>
          <button className="button" onClick={handleAdding}>+</button>
        </form>
      </div>
      <ul className="list">
        {todos.map(todo => {
          return (
            <Todo todo={todo} key={todo.id} handleDelete={handleDelete}/>
          )
        })}
      </ul>
    </div>
  );
}

export default App;
