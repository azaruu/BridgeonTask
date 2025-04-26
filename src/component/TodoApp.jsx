
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, deleteTodo } from './todoSlice';

function TodoApp() {
    const [type,settype]=useState("");
    const dispatch=useDispatch();
    const todos=useSelector(state=>state.todo)
    const [color,setColor]=useState("#0000")

    const handleAdd=()=>{
        if(type.trim()!==''){
           dispatch(addTodo({text:type,color:color}))
           settype("")
           setColor("#0000")
        }
    }
  return (
    <>
    <div style={{textAlign:'center',border:5}}>
      <input type="text"
      value={type}
      onChange={e=>settype(e.target.value)}
      placeholder='Enter a Task'
      />
      
          <input type="color" value={color} onChange={e=>setColor(e.target.value)} />
       <button onClick={handleAdd} style={{backgroundColor:'blue', margin:10,borderColor:"red"}}>Add</button>
       <ul>
          {todos.map((todo)=>(
            <li key={todo.id}>
              <span style={{backgroundColor:todo.color,border:5}}>{todo.text}</span>
                <button style={{backgroundColor:"red",margin:10}} onClick={()=>dispatch(deleteTodo(todo.id))}>delect</button>
              </li>
              
          ))}
       </ul>
    </div>
    </>
  )
}

export default TodoApp
















