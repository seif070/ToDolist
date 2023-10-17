import React from 'react';
import Todo from '../components/Todo';
import { useSelector } from 'react-redux';

function Todolist() {
  const Todos = useSelector((state) => state.Todo);

  return (
    <div>
      {Todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

export default Todolist;
