import { createSlice } from "@reduxjs/toolkit";

interface ITodoSingle {
  id: string,
  text: string,
  completed: boolean,
}

interface IState {
  todos: ITodoSingle[] | []
  isActive: boolean
}
const initialState: IState = {
  todos: [],
  isActive: false
}

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    removeHandle(state, action) {
      state.todos = state.todos.filter(todo => todo.id !== action.payload.id)
    },
    handleTodos(state: any, action) {
      state.todos.push({
        id: new Date().toISOString(),
        text: action.payload.text,
        completed: false,
      })
    },
    completeHandle(state, action) {
      const neededTodo = state.todos.find(todo => todo.id === action.payload.id)
      if (neededTodo) {
        neededTodo.completed = !neededTodo.completed
      }
    },
    changeMode(state) {
      state.isActive = !state.isActive
    }
  }
})
export const { removeHandle, handleTodos, completeHandle, changeMode } = todoSlice.actions // go to needed files
export default todoSlice.reducer // go to index.ts