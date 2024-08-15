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
            placeholder="Add new todo"/>
            <button type="submit">Add</button>
        </form>
    )
}

export default AddTodoForm