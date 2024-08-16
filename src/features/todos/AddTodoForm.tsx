import React from "react";
import { useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { addTodo } from "./todosSlice";

const AddTodoForm = () => {
    const [text, setText] = useState('')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const dispatch = useAppDispatch()

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (text.trim() && date.trim()) {
            dispatch(addTodo({text, date, time}))
            setText('')
            setDate('')
            setTime('')
        }
    }

    return (
        <form onSubmit={onSubmit} className="flex flex-col space-y-2 mb-4">
            <input 
            type="text" 
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Add new todo"
            className="flex-1 mb-2 p-2 border border-gray-300 rounded"
            />

            <input 
            type="date" 
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="p-2 border border-gray-300 rounded"
            />

            <input 
            type="time" 
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="p-2 border border-gray-300 rounded"
            />

            <button type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded">
                Add
            </button>
        </form>
    )
}

export default AddTodoForm