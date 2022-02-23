import { createSlice } from "@reduxjs/toolkit";

interface ITodoSingle {
  id: string,
  text: string,
  completed: boolean,
}

interface IState {
  todos: ITodoSingle[] | [],
  'test': string,
}
const initialState: IState = {
  todos: [],
  'test': 'sex',
}

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    removeHandle(state, action) {
      console.log(action.payload)
      state.todos = state.todos.filter(todo =>  todo.id !== action.payload)
    },
    handleTodos(state: any, action) {
      state.todos.push({
        id: new Date().toISOString(),
        text: action.payload,
        completed: false,
      })
    },
    completeHandle(state, action) {
      const neededTodo = state.todos.find(todo => todo.id === action.payload)
      if(neededTodo){
        neededTodo.completed = !neededTodo.completed
      }
    },
  }
})
export const { removeHandle, handleTodos, completeHandle } = todoSlice.actions
export default todoSlice.reducer