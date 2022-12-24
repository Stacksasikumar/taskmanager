import Header  from "./components/Header";
import Tasks  from "./components/Tasks";
import AddTask  from "./components/AddTask";
import Footer  from "./components/Footer";
import About  from "./components/About";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useState,useEffect } from "react";
function App() {

const [tasks,setTasks] = useState([])
const [ShowAddTask,setShowAddTask] = useState(true)

useEffect (()=> {
  const getTasks= async() =>{
    const taskfromserver = await fetchTasks()
    setTasks(taskfromserver)
  }

  getTasks()
  
})

//fetch tasks
const fetchTasks = async () =>{
  const res = await fetch('http://localhost:7000/tasks')
  const data = await res.json()
  return data;
}

//Delete Task

const deleteTask = async (id) =>{

 await fetch(`http://localhost:7000/tasks/${id}`, {
    method: 'DELETE',
  })

 setTasks(tasks.filter((task) =>  task.id !== id))

}

//Add Task

const Addtask = async (task)=>{

  const res = await fetch('http://localhost:7000/tasks', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(task),
  })

  const data = await res.json()

  setTasks([...tasks, data])
  
}
  

 // Fetch Task
 const fetchTask = async (id) => {
  const res = await fetch(`http://localhost:7000/tasks/${id}`)
  const data = await res.json()

  return data
}

//Toolgle reminder

  const ToggleRemainder = async (id) => {
    const taskToToggle = await fetchTask(id)
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder }

    const res = await fetch(`http://localhost:7000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updTask),
    })
  
    const data = await res.json()
  
    console.log(data)
    setTasks(tasks.map((task) => task.id === id ? 
    {...task,reminder: !data.reminder} :task))

}


  return (
  
    <Router>
    <div className="container">
      <Header 
      title={'Task Tracker'} 
      onAdd={()=> setShowAddTask(!ShowAddTask)} 
      ShowAddTask={ShowAddTask}
       />
      <Routes>
        <Route  path='/' element={

          <>
    {ShowAddTask && <AddTask OnAddtask={Addtask}/> }
      
    {
     tasks.length > 0 ? <Tasks tasks={tasks} deleteTask={deleteTask} Toggle={ToggleRemainder}/>
      : 'No Task to show'

      }
          </>
        } ></Route>
     
    <Route path='/about' element={<About />} />
        </Routes>
  
    <Footer/>
    </div>   
   </Router>
   
  );
}

export default App;
