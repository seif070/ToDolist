import React from 'react';
import { handleDelet } from './redux/Action';
import {useDispatch} from 'react-redux'
function Todo({ todo}) {
  const dispatch=useDispatch()
    return (
      <li >
        {todo.discription}
        
      <button onClick={()=>dispatch(handleDelet(todo.id))}>Supprimer</button>

      </li>
      );
    }

    export default Todo;