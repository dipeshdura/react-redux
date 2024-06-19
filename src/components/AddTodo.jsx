import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';

const AddTodo = () => {
    const [input,setInput] =useState('');
    const dispatch =useDispatch();
    const handlerForm =(e)=>{
        e.preventDefault();
        if(input===""){
          return
        }
        dispatch(addTodo(input));
        setInput('');
    };
  return (
    <div>
        <form onSubmit={handlerForm} action="">

        <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} />
        <button>Add to do</button>
        </form>
    </div>
  )
}

export default AddTodo