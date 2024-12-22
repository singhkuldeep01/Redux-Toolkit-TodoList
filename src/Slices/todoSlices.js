import { createSlice } from "@reduxjs/toolkit";    

const initialState = {
    todoList: [],
};

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            state.todoList.push({id:Date.now(),title:action.payload.title,isCompleted:false});
        },
        deleteTodo:(state,action)=>{
            state.todoList = state.todoList.filter((todo)=>todo.id !== action.payload.id);
        },
        editTodo:(state,action)=>{
            const index = state.todoList.findIndex((todo)=>todo.id === action.payload.id);
            state.todoList[index].title = action.payload.title;
        },
        toggleTodo:(state,action)=>{
            const index = state.todoList.findIndex((todo)=>todo.id === action.payload.id);
            state.todoList[index].isCompleted = !state.todoList[index].isCompleted;
        }
    }
})

export const {addTodo,deleteTodo,editTodo,toggleTodo} = todoSlice.actions;
export default todoSlice.reducer;