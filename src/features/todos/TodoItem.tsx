import React from "react";
import { Todo } from "./todosSlice";

interface TodoItemProps {
    todo: Todo
    onDelete: () => void
    onToggle: () => void
}

const TodoItem: React.FC<TodoItemProps> = ({todo, onDelete, onToggle}) => {
    return (
        <div className="flex items-center justify-between bg-white p-2 rounded shadow mb-1">
            <div className="flex items-center">
                <input type="checkbox" 
                checked={todo.completed} 
                onChange={onToggle}
                className="mr-2"
                />
                <div className="flex flex-col">
                    <span className="text-sm semi-bold text-gray-500">{todo.date}</span>
                    <span className={todo.completed ? 'line-through' : ''}>{todo.text}</span>
                </div>
            </div>
            <button onClick={onDelete}
            className="text-red-500 hover:text-red-700 rounded">
                Delete
            </button>
        </div>
    )
}

export default TodoItem