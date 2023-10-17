import React from 'react';
import { handleDelet, handleAdd } from './redux/Action'; 
import { useDispatch } from 'react-redux';

function Todo({ todo }) {
  const dispatch = useDispatch();



  return (
    <li>
      {todo.description}
      <button onClick={() => dispatch(handleDelet(todo.id))}>Supprimer</button>
    </li>
  );
}

export default Todo;
