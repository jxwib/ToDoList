import React, { useEffect, useRef, useState } from 'react'
import todo_icon from '../assets/todo_icon.png'
import TodoItems from './TodoItems'

const ToDo = () => {
  const [todolist, setTodoList] = useState([]);
  const inputRef = useRef(); 

      {/* add function */}

  const add = () => {
    const inputText = inputRef.current.value.trim();
    if (inputText === "") return null;

    const newTodo = {
      id: Date.now(),
      text: inputText,
      iscomplete: false,
    }
    setTodoList((prev) => [...prev, newTodo]);
    inputRef.current.value = "";
  }

          {/* delet function */}
  const deleteTodo = (id) => {
    setTodoList((prvTodos) => prvTodos.filter((todo) => todo.id !== id))
  }


           {/* edit function */}
  const editTodo = (id, newText) => {
    setTodoList((prevTodos) => 
      prevTodos.map((todo) => todo.id === id ? { ...todo, text: newText } : todo)
    );
  }

  const toggle = (id) => {
    setTodoList((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, iscomplete: !todo.iscomplete }
        }
        return todo;
      })
    })
  }

  useEffect(() => {
    console.log(todolist);
  }, [todolist])

  return (
    <div className='bg-orange-50 place-self-center w-11/12 max-w-md
     flex flex-col p-7 min-h-[550px] rounded-xl'>


                      {/* the title */}
      <div className='flex items-center mt-7 gap-2'>
        <img className='w-10' src={todo_icon} alt="" />
        <h1 className='text-3xl font-semibold'>To-Do List</h1>
      </div>

                        {/* inputbox */}

      <div className='flex items-center my-7 bg-gray-200 rounded-full'>
        <input ref={inputRef} className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600'
         type="text" placeholder='Add your task' />
        <button onClick={add} className='border-none rounded-full bg-red-600 w-32 h-14 text-white
         text-lg font-medium cursor-pointer'> ADD + </button>
      </div>


      <div>
        {todolist.map((item, index) => (
          <TodoItems key={index} text={item.text} id={item.id} iscomplete={item.iscomplete} 
            deleteTodo={deleteTodo} toggle={toggle}  editTodo={editTodo} 
          />
        ))}
      </div>
    </div>
  )
}

export default ToDo