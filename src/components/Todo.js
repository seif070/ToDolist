import React from 'react';
import { handleDelet, handleAdd } from './redux/Action'; 
import { useDispatch } from 'react-redux';

function Todo({ todo }) {
  const dispatch = useDispatch();

  const handleAddTodo = (todoId) => {
    dispatch(handleAdd(todoId));
  };

  return (
    <li>
      {todo.discription}
      <button onClick={() => dispatch(handleDelet(todo.id))}>Supprimer</button>
      <button onClick={() => handleAddTodo(todo.id)}>Ajouter</button>
    </li>
  );
}

export default Todo;
