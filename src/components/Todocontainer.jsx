import AddTodoForm from "./AddTodoForm"
import Todolist from "./Todolist"
import { useState } from "react"

function TodoContainer()
{
  const [tolist,settolist]=useState([{no:1,activity:"Go for a walk"},{no:2,activity:"Have a Breakfast"},{no:3,activity:"Take a shower"}])
    return(
<div>
        <div className='flex gap-5 flex-wrap'>
        <AddTodoForm tolist={tolist} settolist={settolist}/>
        <Todolist tolist={tolist} settolist={settolist}/>
      </div>
      </div>
)}

export default TodoContainer