import React from 'react';
import { useState } from 'react';
import { CgCloseO } from 'react-icons/cg'
import { MdDoneOutline, MdOutlineRemoveDone } from 'react-icons/md'
import { useEffect } from 'react';
import TodoList from './components/TodoList';
import Form from 'components/Form';
import { useDispatch } from 'react-redux';
import { handleTodos, changeMode } from 'store/todoSlice';
function App() {
  const dispatch = useDispatch()

  const [text, setText] = useState('')

  return (
    <div className="App">
      <Form
        value={text}
        placeholder={'Enter new todo'}
        handleInputChange={setText}
        handleButtonClick={() => dispatch(handleTodos(text))}
        handleCheckedClick={() => dispatch(changeMode())}
      >
      </Form>
      <ul className='ul-todo' >
        <TodoList></TodoList>
      </ul>
    </div>
  );
}
export default App;
