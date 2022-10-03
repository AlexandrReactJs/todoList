import React from 'react'
import styles from './Todolist.module.css'
import { useSelector, useDispatch } from 'react-redux'
import addIcon from "../../assets/icons/add.png";
import { addTask } from '../../Redux/Slices/TodoSlice';
import { changeInputTask } from '../../Redux/Slices/TodoSlice';
import StatusTask from './StatusTask/StatusTask';
import statusTaskStyles from "./StatusTask/StatusTask.module.css"


const Todolist = () => {
  const dispatch = useDispatch()

  let date = new Date()
  const addedDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;

  const currentTodo = useSelector(state => state.todo.currentTodo);
  const items = useSelector(state => state.todo.todos);
  const foundItem = items.find(el => el.id === currentTodo);
  const textareaInputValue = useSelector(state => state.todo.addTaskInputValue);

  const textareaRef = React.useRef();

  const [activeIndex, setActiveIndex] = React.useState(0);


  const onChangeTextArea = (event) => {
    dispatch(changeInputTask(event.target.value))
  }

  return (
    <div className={styles.todoList}>

      {

        foundItem ? <>
          <div className={styles.header}>
            <div className={styles.addTask}>
              <textarea ref={textareaRef} onChange={onChangeTextArea} value={textareaInputValue} placeholder='Добавить Таску'></textarea>
              <StatusTask activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
              <img onClick={() => { dispatch(addTask({ id: currentTodo, statusTaskIndex: activeIndex, date: addedDate })) }} className={styles.addButton} src={addIcon} alt="" />
            </div>
          </div>

          <div className={styles.tasksBlock}>
            {foundItem.todolist.map(el =>
              <div className={styles.task}>
                <div className={styles.taskMessage}>
                  <div className={el.statusTaskIndex === 0 ? statusTaskStyles.greenDot : el.statusTaskIndex === 1 ? statusTaskStyles.orangeDot : statusTaskStyles.redDot}></div>
                  <h3>{el.task}</h3>
                </div>
                <div className={styles.addedDate}>
                  <p>{el.date}</p>
                </div>
              </div>)}
          </div>
        </> : <div>Ничего нет</div>

      }
    </div>
  )
}



export default Todolist;