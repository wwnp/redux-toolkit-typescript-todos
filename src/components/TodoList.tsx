import TodoItem from './TodoItem';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from 'store';
import { useEffect, useState } from 'react';

const TodoList = (props:any) => {
  const {isDone} = props
  const todos = useSelector((state: RootState) => state.todos.todos)
  const isActive = useSelector((state: RootState) => state.todos.isActive)

  const [modTodos, setModTodos] = useState(todos)

  useEffect(() => {
    setModTodos(todos)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [todos])

  useEffect(() => {
    if (isDone) {
      const modedTodos = todos.filter(todo => todo.completed === true)
      setModTodos(modedTodos)
    } else {
      setModTodos(todos)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDone])
  console.log(isDone)
  return (
    <ul>
      {
        modTodos.map((todo: any) => {
          return (
            <TodoItem
              key={todo.id}
              {...todo}
            >
            </TodoItem>
          )
        })
      }

    </ul>
  );
};

export default TodoList;