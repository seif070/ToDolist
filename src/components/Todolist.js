import React from 'react';
import Todo from '../components/Todo'
import {useSelector} from 'react-redux'

function Todolist() {
  const Todos=useSelector(state=>state.Todo)
  console.log('fghj',Todos)
  return (
    <div>
      {Todos.map((todo) => <Todo  todo={todo}  /> 
      )}
    </div>
  );
}

export default Todolist;
