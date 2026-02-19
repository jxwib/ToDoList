import React from 'react'
import tick from '../assets/tick.png'
import not_tick from '../assets/not_tick.png'
import delet from '../assets/delet.png'
import edit from '../assets/Edit.png'


const TodoItems = () => {
  return (

    <div className='flex items-center my-3 gap-2'>
      <div className='flex flex-1 items-center cursor-pointer'>

        <img src = {tick}  alt="" className='w-12' />
           <p className='tex-slate-700 ml-4 text-[17px]'>learn coding with react</p>

      </div>
      

      <div>

        <img src={edit} alt="" className=' w-7 cursor-pointer'/>
         </div>
     

      <div>

        <img src={delet} alt="" className=' w-7 cursor-pointer'/>
         </div>
     



    </div>
  )
}

export default TodoItems
