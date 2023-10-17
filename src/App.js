import React, { useState } from 'react';
import Todolist from './components/Todolist';
import './App.css';
import { handleAdd } from './components/redux/Action';
import { useDispatch } from 'react-redux';

function App() {
  const [newTodo, setNewTodo] = useState('');


const dispatch = useDispatch()



  return (
    <div className="App">
      <h1>App Todo with redux</h1>
      <input
        type="text"
        placeholder="Porsche carrera 911..."
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={() =>dispatch(handleAdd(newTodo))}>Ajouter</button>

      <Todolist  />
   
   
   
   
   
      
   
   
   
     
   
   
     
    </div>
   

    




  
  );
}

export default App;
