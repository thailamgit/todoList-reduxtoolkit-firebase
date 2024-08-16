import { useEffect } from "react";
import React from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { fetchTodos, deleteTodo, toggleCompleted, clearTodos, Todo } from "./todosSlice";
import TodoItem from "./TodoItem";

const Todolist = () => {
    const dispatch = useAppDispatch()
    const todos = useAppSelector((state) => state.todos.todos)
    const todoStatus = useAppSelector((state) => state.todos.status)

    useEffect(() => {
        if (todoStatus === 'idle') {
            dispatch(fetchTodos())
        }
    }, [todoStatus, dispatch])
    
    const handleClearAll = () => {
        const confirmed = window.confirm('Are you sure want to clear all? This action can not be undone')

        if(confirmed) {
            dispatch(clearTodos())
        }
    }

    return (
        <div className="w-full max-w-md">
            {todos.map((todo) => (
                <TodoItem 
                key={todo.id} 
                todo={todo} 
                onDelete={() => dispatch(deleteTodo(todo.id))} 
                onToggle={() => dispatch(toggleCompleted(todo.id))} 
                />
            ))}

            {todos.length > 0 && (
                <button 
                onClick={handleClearAll}
                className="w-full bg-blue-500 hover:bg-blue-700 text-white p-2 rounded mt-4">
                    Clear All
                </button>
            )}
        </div>
    )
}

export default Todolist