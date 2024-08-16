import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import Todolist from './features/todos/TodoList';
import AddTodoForm from './features/todos/AddTodoForm';

function App() {
  return (
    <Provider store={store}>
      <div className='min-h-green bg-gray-100 flex-col items-center p-4'>
        <h1 className='text-3xl font-bold mb-4 text-center'>Todo List</h1>
        <AddTodoForm />
        <Todolist />
      </div>
    </Provider>
  );
}

export default App;
