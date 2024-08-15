import React from "react";
import { Todo } from "./todosSlice";

interface TodoItemProps {
    todo: Todo
    onDelete: () => void
    onToggle: () => void
}

const TodoItem: React.FC<TodoItemProps> = ({todo, onDelete, onToggle}) => {
    return (
        <div className="flex items-center justify-between bg-white p-2 rounded shadow mb-2">
            <div className="flex items-center">
                <input type="checkbox" 
                checked={todo.completed} 
                onChange={onToggle}
                className="mr-2"/>
                <span className={todo.completed ? 'line-through' : ''}>{todo.text}</span>
            </div>
            <button onClick={onDelete}
            className="text-red-500 hover:text-red-700">
                Delete
            </button>
        </div>
    )
}

export default TodoItem