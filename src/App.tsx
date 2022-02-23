import React from 'react';
import { useState } from 'react';
import { CgCloseO } from 'react-icons/cg'
import { MdDoneOutline, MdOutlineRemoveDone } from 'react-icons/md'
import { useEffect } from 'react';
import TodoList from './components/TodoList';
import Form from 'components/Form';
import { useDispatch } from 'react-redux';
import { handleTodos } from 'store/todoSlice';
function App() {
  const dispatch = useDispatch()
  // const [isDone, setIsDone] = useState(false)
  const [text, setText] = useState('')

  // useEffect(() => {
  //   if(isDone === true) {
  //     const donedTodos = todos.filter(i => i.completed === true)
  //     setModTodos(donedTodos)
  //   }else {
  //     setModTodos(todos)
  //   }

  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [isDone])

  // useEffect(() => {
  //   if(isDone === true) {
  //     const donedTodos = todos.filter(i => i.completed === true)
  //     setModTodos(donedTodos)
  //   }else {
  //     setModTodos(todos)
  //   }
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [todos])

  return (
    <div className="App">
      <Form
        value={text}
        placeholder={'Enter new todo'}
        handleInputChange={setText}
        handleButtonClick={() => dispatch(handleTodos(text))}
      >
      </Form>
      <ul className='ul-todo' >
        <TodoList></TodoList>
      </ul>
    </div>
  );
}
export default App;
