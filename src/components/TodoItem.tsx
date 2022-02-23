import { CgCloseO } from 'react-icons/cg';
import { MdDoneOutline, MdOutlineRemoveDone } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { completeHandle, removeHandle } from 'store/todoSlice';

const TodoItem = ({ id, text, completed }: any) => {
  const dispatch = useDispatch()
  return (
    <li
      className='li-todo'
    >
      <span>{id}</span>
      <span>{text}</span>

      <span>
        {
          completed
            ? (
              <MdDoneOutline
                size={18}
                className={'react-icon green'}
                onClick={() => dispatch(completeHandle({id}))}
              >
              </MdDoneOutline>
            )
            : (
              <MdOutlineRemoveDone
                size={18}
                className={'react-icon red'}
                onClick={() => dispatch(completeHandle({id}))}
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
        onClick={() => dispatch(removeHandle({id}))}
      >
      </CgCloseO>
    </li>
  )
};

export default TodoItem;