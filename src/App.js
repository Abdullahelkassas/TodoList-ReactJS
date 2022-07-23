import React , { useEffect, useState } from 'react';
import './App.css';
import Task from './Task';
import { BiMessageSquareAdd } from "react-icons/bi";


const getLocalStorage = ()=>{

let todoList = localStorage.getItem("todoList")

if(todoList) {
return (todoList = JSON.parse(localStorage.getItem("todoList")))

} else {
return []
}
}



function App() {
const[newTask, setNewTask] = useState("")
const[todoList, setTodoList] = useState(getLocalStorage())



useEffect(()=>{

localStorage.setItem("todoList", JSON.stringify(todoList))

}, [todoList])



function addTask(){

const task = {
id: todoList.length=== 0 ? 1 : todoList[todoList.length-1].id + 1,
taskName: newTask,
completed: false
}  

 setTodoList([...todoList,task])
 localStorage.setItem("myTasks", JSON.stringify(todoList))
 setNewTask("")
}

function deleteTask(id){
   const newList = todoList.filter((task)=> task.id != id )

setTodoList(newList)
}

function completeTask(id){
const allTasks = todoList.map((task)=>{

if(task.id == id) {
return {...task, completed:true}
}else{
  return task
}
})
setTodoList(allTasks)
}


function deleteAll(){

  localStorage.clear()
  setTodoList([])

}

 
return (
  
    <div className="App" >
   <h1 className='logo'>Todo List</h1>
   <div  className="addTask">
 
<input type= "text" placeholder= "write your task" 
value={newTask}
onChange= {(e)=> setNewTask(e.target.value)}
/>

<button onClick={newTask? addTask: ""} >ADD TASK <BiMessageSquareAdd/></button>
    </div>
  
 <div className={todoList.length ? 'deleteAll': "deleteme"} onClick={deleteAll}>Delete All ({todoList.length})</div>
 <div className='list'>
    
{todoList.map((task)=>{
return (

  <Task 
  id= {task.id} 
  completed= {task.completed} 
  taskName={task.taskName} 
  completeTask={completeTask}  
  deleteTask={deleteTask}
  />

)

    })}
    </div>
    </div>
  
  );
}

export default App;
