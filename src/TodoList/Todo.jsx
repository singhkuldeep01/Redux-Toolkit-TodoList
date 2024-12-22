import React,{useState} from 'react'
function Todo({todo ,  actions}) {
    const [isEditing, setIsEditing] = useState(false);
    const [editValue, setEditValue] = useState(todo.title);
    const handleOnchange = () => actions.toggleTodo({id:todo.id});
    const handleDeleteTodo = () => actions.deleteTodo({id:todo.id});
    const handleEditTodo = ()=>{
        if(isEditing) actions.editTodo({id:todo.id,title:editValue});
        setIsEditing(!isEditing);
    }
  return (
    <div>
        <input type="checkbox" checked={todo.isCompleted} onChange={handleOnchange}/>
        {isEditing?<input type="text" placeholder={todo.title} value={editValue} onChange={(e)=>setEditValue(e.target.value)}/>:<span>{todo.title}</span>}
        <button onClick={handleEditTodo}>{isEditing?"Save":"Edit"}</button>
        <button onClick={handleDeleteTodo}>Delete</button>
    </div>
  )
}

export default Todo