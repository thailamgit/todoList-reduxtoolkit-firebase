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

    const todosByDate = todos.reduce((acc: {[date: string]: Todo[]}, todo) => {
        const date = todo.date
        if(!acc[date]) {
            acc[date] = []
        }
        acc[date].push(todo)
        return acc
    }, {})

    return (
        <div className="w-full max-w-md">
            {Object.keys(todosByDate).map((date) => (
                <div key={date}>
                    <h2 className="text-xl font-bold mb-2">{date}</h2>
                    {todosByDate[date].map((todo) => (
                        <TodoItem
                        key={todo.id}
                        todo={todo}
                        onDelete={() => dispatch(deleteTodo(todo.id))}
                        onToggle={() => dispatch(toggleCompleted(todo.id))}/>
                    ))}
                </div>
            ))}
            {todos.length > 0 && (
                <button
                onClick={handleClearAll}
                className="w-full bg-blue-500 text-white hover:bg-blue-700 rounded p-2 mt-4"
                >
                    Clear all
                </button>
            )}
        </div>
    )
}

export default Todolist