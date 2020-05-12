import React from 'react';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';
import { initialState, reducer } from './reducers/reducer';
import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>React-Redux Todo App</h1>
        <TodoForm/>
        <TodoList/>
      </header>
    </div>
  );
}

export default App;
