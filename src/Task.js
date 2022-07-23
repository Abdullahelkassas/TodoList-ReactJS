import React from 'react'
import { MdCloudDone } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";


function Task(props) {
  return (
    <div className={props.completed ? "done" : ""} style={{backgroundColor: props.completed ? "#8f8f08" : "transparent"  }}>
<div key={props.id}  className=  "mytask" >
  <h3><MdCloudDone className='icon'/>{props.taskName}</h3>
  <div className='complete'>
  <button onClick={()=>props.completeTask(props.id)}  >Completed</button>
  <button onClick={()=>props.deleteTask(props.id)} ><MdDeleteForever style={{fontSize:25}}/></button>
  </div>
  </div>

    </div>
  )
}

export default Task