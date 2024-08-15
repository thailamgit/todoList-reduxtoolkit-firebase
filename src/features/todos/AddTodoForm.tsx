import React from "react";
import { useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { addTodo } from "./todosSlice";

const AddTodoForm = () => {
    const [text, setText] =useState('')
    const dispatch = useAppDispatch()

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (text.trim()) {
            dispatch(addTodo(text))
            setText('')
        }
    }

    return (
        <form onSubmit={onSubmit}>
            <input type="text" 
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Add new todo"
            className="flex-1 p-2 border border-gray-300 rounded"/>
            <button type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded">
                Add</button>
        </form>
    )
}

export default AddTodoForm