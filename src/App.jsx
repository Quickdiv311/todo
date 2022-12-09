import React from 'react';

import './App.css';
import TodoForm from './components/todo-form/todo-form';
import TodoList from './components/todo-list/todo-list';

function App() {
  return (
    <div className="container">
      <TodoForm/>
      <TodoList/>
    </div>
  );
}

export default App;
