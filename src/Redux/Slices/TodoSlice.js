import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  todos: [
    {
      id: 0, name: "todo1",
      todolist: [
        
      ]
    },
    {
      id: 1, name: "todo2",
      todolist: [
        
      ]
    }
  ],
  currentTodo: 0,
  addTodoInputValue: '',
  addTaskInputValue: '',
  
}



export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    setCurrentTodo(state, action) {
      state.currentTodo = action.payload
    },
    changeTodoInputValue(state, action) {
      state.addTodoInputValue = action.payload;
    },
    addTodo(state, action) {
      const lastElem = state.todos[state.todos.length - 1];

      if (lastElem) {
        state.todos.push(
          {
            id: lastElem.id + 1,
            name: state.addTodoInputValue,
            todolist: [],
          }
        )
      } else {
        state.todos.push(
          {
            id: 0,
            name: state.addTodoInputValue,
            todolist: [],
          }
        )
      }

    },
    changeInputTask (state, action) {
      state.addTaskInputValue = action.payload;
    },
    addTask (state, action) {
      const foundTodo = state.todos.find(el => el.id === action.payload.id);
      const lastElem = foundTodo.todolist[foundTodo.todolist.length -1]
      if(foundTodo){
        if(lastElem){
          foundTodo.todolist.push({id: lastElem.id + 1, task: state.addTaskInputValue, statusTaskIndex: action.payload.statusTaskIndex, date: action.payload.date})
        }else{
          foundTodo.todolist.push({id: 0, task: state.addTaskInputValue, statusTaskIndex: action.payload.statusTaskIndex, date: action.payload.date})
        }
        
      }
    }
  }
})


export const { setCurrentTodo, changeTodoInputValue, addTodo, addTask, changeInputTask } = todoSlice.actions

export default todoSlice.reducer