import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs, addDoc, deleteDoc, doc, writeBatch, Timestamp } from "firebase/firestore";
import { db } from "../../firebase";

export interface Todo {
    id: string
    text: string
    completed: boolean
    date: string
    time: string
}

interface TodoState {
    todos: Todo[]
    status: 'idle' | 'loading' | 'succeeded' |'failed'
}

const initialState: TodoState = {
    todos: [],
    status: 'idle'
}

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
    const querySnapshot = await getDocs(collection(db, 'todos'))
    return querySnapshot.docs.map((doc) => ({
        id: doc.id, 
        ...doc.data(),
    })) as Todo[]
})

export const addTodo = createAsyncThunk('todo/add', async ({text, date, time}: {text: string, date: string, time: string})=> {
    const newTodo = {text, completed: false, date, time}
    const docRef = await addDoc(collection(db, 'todos'), newTodo)
    return {id: docRef.id, ...newTodo} as Todo
}) 

export const deleteTodo = createAsyncThunk('todos/delete', async (id: string) => {
    await deleteDoc(doc(db, 'todos', id))
    return id
})

export const clearTodos = createAsyncThunk('todos/clearTodos', async () => {
    const todosRef = collection(db, 'todos')
    const batch = writeBatch(db)

    const querySnapshot = await getDocs(todosRef)
    querySnapshot.forEach((doc) => {
        batch.delete(doc.ref)
    })

    await batch.commit()
    return[]
})

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        toggleCompleted: (state, action) => {
            const todo = state.todos.find((todo) => todo.id === action.payload)
            if(todo) {
                todo.completed = !todo.completed
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTodos.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchTodos.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.todos = action.payload
            })
            .addCase(addTodo.fulfilled, (state, action) => {
                state.todos.push(action.payload)
            })
            .addCase(deleteTodo.fulfilled, (state, action) => {
                state.todos = state.todos.filter((todo) => todo.id !== action.payload)
            })
            .addCase(clearTodos.fulfilled, (state) => {
                state.todos = []
            })
    }
})

export const {toggleCompleted} = todoSlice.actions
export default todoSlice.reducer