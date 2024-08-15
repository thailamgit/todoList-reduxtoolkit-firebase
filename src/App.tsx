import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import Todolist from './features/todos/TodoList';
import AddTodoForm from './features/todos/AddTodoForm';

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>Todo List</h1>
        <AddTodoForm />
        <Todolist />
      </div>
    </Provider>
  );
}

export default App;
