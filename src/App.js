import React, { useState } from 'react';
import Todolist from './components/Todolist';
import './App.css';


function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo= () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, { text: newTodo, completed: false }]);
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
      <button onClick={handleAddTodo}>Supprimer</button>

      <Todolist todos={todos} deleteTodo={deleteTodo} toggleComplete={toggleComplete} />
   
   
   
   
   
      <input
        type="text"
        placeholder="BMW e92 m3..."
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={handleAddTodo}>Ajouter</button>
      <button onClick={handleAddTodo}>Supprimer</button>

      <Todolist todos={todos} deleteTodo={deleteTodo} toggleComplete={toggleComplete} />
   
   
   
      <input
        type="text"
        placeholder="Porsche Macan gts..."
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={handleAddTodo}>Ajouter</button>
      <button onClick={handleAddTodo}>Supprimer</button>

      <Todolist todos={todos} deleteTodo={deleteTodo} toggleComplete={toggleComplete} />
   
   
      <input
        type="text"
        placeholder="Bmw e60 m5..."
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={handleAddTodo}>Ajouter</button>
      <button onClick={handleAddTodo}>Supprimer</button>

      <Todolist todos={todos} deleteTodo={deleteTodo} toggleComplete={toggleComplete} />
   
   
      <input
        type="text"
        placeholder="Ferrari Enzo..."
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={handleAddTodo}>Ajouter</button>
      <button onClick={handleAddTodo}>Supprimer</button>

      <Todolist todos={todos} deleteTodo={deleteTodo} toggleComplete={toggleComplete} />
    </div>
   

    




  
  );
}

export default App;
