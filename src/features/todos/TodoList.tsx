import { useEffect } from "react";
import React from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { fetchTodos, deleteTodo, toggleCompleted } from "./todosSlice";
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

    return (
        <div>
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} onDelete={() => dispatch(deleteTodo(todo.id))} onToggle={() => dispatch(toggleCompleted(todo.id))} />
            ))}
        </div>
    )
}

export default Todolist