import React from 'react'
import { useSelector } from 'react-redux'
import Todo from './Todo';
function TodoList({actions}) {
    const todos = useSelector((state)=>state.todos.todoList);
  return (
    <div>
        {todos.map((todo)=>{
            return (
              <Todo key={todo.id} todo={todo} actions={actions}>
              </Todo>
            )
        })}
    </div>
  )
}

export default TodoList