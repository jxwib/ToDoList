import React, { useState } from 'react'
import tick from '../assets/tick.png'
import not_tick from '../assets/not_tick.png'
import delet from '../assets/delet.png'
import edit from '../assets/Edit.png'


const TodoItems = ({ text, id, iscomplete, deleteTodo, toggle, editTodo }) => {

  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(text);
  const [showDialog, setShowDialog] = useState(false);

  const handleEditSave = () => {
    if (editText.trim() === "") return;
    editTodo(id, editText.trim());
    setIsEditing(false);
  };

  return (
    <div className='flex flex-col my-3'>
      <div className='flex items-center gap-2'>
        <div onClick={() => !isEditing && toggle(id)} className='flex flex-1 items-center cursor-pointer'>
          <img src={iscomplete ? tick : not_tick} alt="" className='w-8' />
          
          {isEditing ? (
            <input 
              className='ml-4 border-b border-orange-400 outline-none bg-transparent text-[17px] flex-1'
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              autoFocus
            />
          ) : (
            <p className={`text-slate-700 ml-4 text-[17px] decoration-slate-500 ${iscomplete ? "line-through" : ""}`}>
              {text}
            </p>
          )}
        </div>

        <div className='flex items-center gap-2'>
          {isEditing ? (
            <button onClick={handleEditSave} className='text-green-600 font-bold text-sm bg-green-100 px-2 py-1 rounded'>Save</button>

          ) : (


            <img onClick={() => setIsEditing(true)} src={edit} alt="Edit" 
            className='w-7 cursor-pointer hover:scale-110 transition' />

          )}
          
          
          <img onClick={() => setShowDialog(true)} src={delet} alt="Delete" 
          className='w-7 cursor-pointer hover:scale-110 transition' />
        </div>
      </div>




                            {/* showDialog when deleting */}

      {showDialog && (
        <div className='flex justify-between items-center bg-red-50 border border-red-200 p-2 mt-2 rounded-lg'>
          <span className='text-red-700 text-xs font-medium'>Are you Sure you want to delete ?</span>
          <div className='flex gap-2'>
            <button onClick={() => deleteTodo(id)} className='bg-red-600 text-white px-3 py-1 rounded text-xs'>Yes</button>
            <button onClick={() => setShowDialog(false)} className='bg-gray-300 text-gray-700 px-3 py-1 rounded text-xs'>No</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default TodoItems