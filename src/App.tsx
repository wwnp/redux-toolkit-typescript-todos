import React from 'react';
import { useState } from 'react';
import { CgCloseO } from 'react-icons/cg'
import { MdDoneOutline, MdOutlineRemoveDone } from 'react-icons/md'
import { useEffect } from 'react';
interface ITodos {
  id: string,
  text: string,
  completed: boolean
}
function App() {
  const [todos, setTodos] = useState<ITodos[]>([])
  const [modTodos, setModTodos] = useState<ITodos[]>(todos)
  const [text, setText] = useState('')
  const [isDone, setIsDone] = useState(false)
  const handleTodos = () => {
    if (text.trim().length) {
      setTodos([
        ...todos,
        {
          id: new Date().toISOString(),
          text,
          completed: false,
        }
      ])
    }
  }
  const removeHandle = (id: string) => {
    const filteredTodos = todos.filter(i => i.id !== id)
    setTodos(filteredTodos)
  }
  const completeHandle = (id: string) => {
    const newTodos = todos.map((i:any) => {
      if(id !== i.id){
        return i
      }
      return {
        ...i,
        completed: !i.completed
      }
    })
    setTodos(newTodos)

    // bad logic below
      // let findedTodo = todos.find(i => i.id === id)
      // const filteredTodos = todos.filter(i => i.id !== id)
      // if (findedTodo) {
      //   findedTodo.completed === true
      //     ? findedTodo.completed = false
      //     : findedTodo.completed = true
      //   setTodos([
      //     ...filteredTodos,
      //     findedTodo
      //   ])
      // }
  }
  useEffect(() => {
    if(isDone === true) {
      const donedTodos = todos.filter(i => i.completed === true)
      setModTodos(donedTodos)
    }else {
      setModTodos(todos)
    }
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDone])

  useEffect(() => {
    if(isDone === true) {
      const donedTodos = todos.filter(i => i.completed === true)
      setModTodos(donedTodos)
    }else {
      setModTodos(todos)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [todos])
  
  return (
    <div className="App">
      <label htmlFor="">
        <input type="text" value={text} onChange={e => setText(e.target.value)} />
        <button onClick={handleTodos}>Send</button>
        
        <input checked={isDone} onChange={() => setIsDone(!isDone)} type="checkbox" name="done" id='done'/>
        <label htmlFor="done">Done</label>
      </label>
      <ul className='ul-todo' >
        {modTodos.map(i => {
          return (
            <li
              className='li-todo'
              key={i.id}
            >
              <span>{i.id}</span>
              <span>{i.text}</span>

              <span>
                {
                  i.completed
                    ? (
                      <MdDoneOutline
                        size={18}
                        className={'react-icon green'}
                        onClick={() => completeHandle(i.id)}
                      >
                      </MdDoneOutline>
                    )
                    : (
                      <MdOutlineRemoveDone
                        size={18}
                        className={'react-icon red'}
                        onClick={() => completeHandle(i.id)}
                      >
                      </MdOutlineRemoveDone>
                    )
                }
              </span>

              <CgCloseO
                className='react-icon red-hover'
                size={18}
                style={{
                  marginLeft: '1rem'
                }}
                onClick={(e) => removeHandle(i.id)}
              >
              </CgCloseO>
            </li>
          )
        })}
      </ul>

    </div>
  );
}
export default App;
