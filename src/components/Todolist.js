import React from 'react';
import Todo from './Todo';


function Todolist({ todos, deleteTodo, toggleComplete }) {
  return (
    <ul>
      {todos.map((todo, index) => ( 
        <Todo key={index} todo={todo} index={index} deleteTodo={deleteTodo} toggleComplete={toggleComplete} /> 
      ))}
    </ul>
  );
}

export default Todolist;
