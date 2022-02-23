import TodoItem from './TodoItem';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from 'store';
// interface ITodoProps {
//   todos:number[]
//   children: any
// }
const TodoList = () => {
  const todos = useSelector((state: RootState) => state.todos.todos)
  return (
    <ul>
      {
        todos.map((todo: any) => {
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