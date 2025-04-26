
import { createSlice } from "@reduxjs/toolkit";

const todoSlice=createSlice({
  name:"Todo",
  initialState:[],
  reducers:{
    addTodo:(State,action)=>{
         const{text,color}=action.payload ;
         State.push({id:Date.now(),text,color })
    },
    deleteTodo:(state,action)=>{
    return state.filter(todo=>{todo.id !==action.payload})
    },

  }
})

export const{addTodo,deleteTodo}=todoSlice.actions
export default todoSlice.reducer
