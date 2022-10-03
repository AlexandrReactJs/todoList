import React from 'react'
import styles from './Sidebar.module.css'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { setCurrentTodo } from '../../Redux/Slices/TodoSlice'
import addIcon from "../../assets/icons/add.png";
import { changeTodoInputValue } from '../../Redux/Slices/TodoSlice'
import { addTodo } from '../../Redux/Slices/TodoSlice'
const Sidebar = () => {
    const items = useSelector(state => state.todo.todos);
    const inputValue = useSelector(state => state.todo.addTodoInputValue);
    const inputRef = React.useRef();
    const dispatch = useDispatch();

    const onClickAdd = () => {
        dispatch(addTodo())
    }

    const onChangeInputValue = (event) => {
        dispatch(changeTodoInputValue(event.target.value))
    }

  return (
    <div className={styles.sideBar}>
        <div className={styles.buttons}>
            <input ref={inputRef} onChange={onChangeInputValue} value={inputValue} placeholder='Добавить ToDo' type="text" />
            <div onClick={onClickAdd}>
                <img  src={addIcon} alt="" />
            </div>
        </div>
        <div className={styles.nav}>
            <h3>Ваши ToDo</h3>
            <div className={styles.todos}>
                {
                    items.map((el, i) => <div className={styles.todoItem}><div className={styles.dot}></div><p onClick={() => {dispatch(setCurrentTodo(i))}}>{el.name}</p></div>)
                }
            </div>
        </div>
    </div>
  )
}


export default Sidebar
