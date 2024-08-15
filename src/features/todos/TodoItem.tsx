import React from "react";
import { Todo } from "./todosSlice";

interface TodoItemProps {
    todo: Todo
    onDelete: () => void
    onToggle: () => void
}

const TodoItem: React.FC<TodoItemProps> = ({todo, onDelete, onToggle}) => {
    return (
        <div>
            <input type="checkbox" checked={todo.completed} onChange={onToggle}/>
            <span>{todo.text}</span>
            <button onClick={onDelete}>Delete</button>
        </div>
    )
}

export default TodoItem