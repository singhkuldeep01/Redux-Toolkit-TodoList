import React, { act } from 'react'
import AddTodo from './AddTodo/AddTodo'
import TodoList from './TodoList/TodoList'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addTodo , deleteTodo , toggleTodo , editTodo } from './Slices/todoSlices'
function App() {
  const dispatch = useDispatch();
  const actions = bindActionCreators({addTodo,deleteTodo,editTodo,toggleTodo},dispatch);
  return (
    <>
      <AddTodo actions={actions} />
      <TodoList actions={actions} />
    </>
  )
}

export default App