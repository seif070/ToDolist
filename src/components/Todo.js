import React from 'react';


function Todo({ todo, index, deleteTodo, toggleComplete }) {
    return (
      <li className={todo.completed ? 'completed' : ''}>
        {todo.text}
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleComplete(index)}


        />
      </li>
      );
    }

    export default Todo;