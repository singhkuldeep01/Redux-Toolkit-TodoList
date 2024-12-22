import React,{useState} from 'react'
function AddTodo({actions}) {
    const [inputValue, setInputValue] = useState("");
    const onSubmitHandler = (e)=>{
        e.preventDefault();
        if(inputValue.trim()==="") return;
        actions.addTodo({title:inputValue});
        setInputValue("");
    }
  return (
    <form onSubmit={onSubmitHandler}>
        <input 
        type="text" 
        value={inputValue}
        onChange={(e)=>setInputValue(e.target.value)}
        placeholder='Add Todo'
        />
        <button type='submit'>Add Todo</button>
    </form>
  )
}

export default AddTodo