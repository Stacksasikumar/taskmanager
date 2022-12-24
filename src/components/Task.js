import React from 'react'
import { FaTimes} from 'react-icons/fa'

export const Task = ({task,Ondelete,Toggle}) => {
  return (
    <div key={task.id} className={`task ${task.reminder ? 'reminder': ''}`}  onDoubleClick={() => Toggle(task.id)}>
      <h3 > {task.text}{''}
      
       {task.reminder}
        <FaTimes 
        style={{color:'red',cursor:'pointer' }} 
        onClick={() => Ondelete(task.id)} 
        />
      </h3>
      <p>{task.day} </p>
    </div>
  )
}

export default Task