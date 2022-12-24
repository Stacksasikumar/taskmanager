import React from 'react'
import { Task } from "./Task";
export const Tasks = ({ tasks,deleteTask, Toggle}) => {
    
  return (
    <>
        {tasks.map((task) => {
        return <Task  
        key={task.id}
        task={task} 
        Ondelete={deleteTask} 
        Toggle={Toggle}></Task>;
        })}

    </>
  )
}

export default Tasks