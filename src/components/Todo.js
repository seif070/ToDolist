import React from 'react';


function Todo({ Todo, index, deleteTodo, toggleComplete }) {
    return (
      <li className={Todo.completed ? 'completed' : ''}>
        {Todo.text}
        <button onClick={() => deleteTodo(index)}>Supprimer</button>
        <input
          type="checkbox"
          checked={Todo.completed}
          onChange={() => toggleComplete(index)}


        />
      </li>
      );
    }

    export default Todo;