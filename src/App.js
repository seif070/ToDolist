import React, { useState } from 'react';
import Todolist from './components/Todolist';
import './App.css';


function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo= () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, { text: newTodo, completed: false}]);
      setNewTodo('');
    }
  };



  const deleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  const toggleComplete = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  return (
    <div className="App">
      <h1>ToDo List</h1>
      <input
        type="text"
        placeholder="Porsche carrera 911..."
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={handleAddTodo}>Ajouter</button>

      <Todolist  />
   
   
   
   
   
      
   
   
   
     
   
   
     
    </div>
   

    




  
  );
}

export default App;
