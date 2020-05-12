import React, { useReducer } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { initialState, reducer } from './reducers/reducer';
import './App.css';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addTodo = (input) => {
    const newTodo = {
      todo: input,
      completed: false,
      id: Date.now()
    }
    dispatch({type: "ADD_TODO", payload: newTodo});
  };

  const handleComplete = (id) => {
    dispatch({type:"TODO_TOGGLED", payload: id});
  };

  const clearCompleted = () => {
    dispatch({type: "CLEAR_TODOS"});
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>React-Redux Todo App</h1>
        <TodoForm addTodo={addTodo} />
        <button
        onClick= {(e) => {
          e.preventDefault()
          clearCompleted()
        }}
        >Clear Selected</button>
        <TodoList state={state} handleComplete={handleComplete}/>
      </header>
    </div>
  );
}

export default App;