import React from 'react'
import todo_icon from '../assets/todo_icon.png'
import TodoItems from './TodoItems'

const ToDo = () => {
  return (
    <div className='bg-orange-50 place-self-center w-11/12 max-w-md 
    flex flex-col p-7 min-h-137.5 rounded-xl'>
    
{/* the title */}

    <div className='flex items-center mt-7 gap-2'>
        <img className= 'w-10' src={todo_icon} alt="" />
        <h1 className='text-3xl font-semibold'>To-Do List</h1>
      </div>

{/* inputbox */}

<div className='flex items-center my-7 bg-gray-200 rounded-full'>

<input className='bg-transparent border-0 outline-none flex-1 h-14 pl-6
pr-2 placeholder:text-slate-600' 
type="text" placeholder='Add your task'/>

<button className='border-none rounded-full bg-red-600 w-32 h-14 text-white
text-lg font-medium Cursor-pointer'> ADD +   </button>

</div>

{/*  list  */}

 <TodoItems/>

    
    </div>
  )
}

export default ToDo
