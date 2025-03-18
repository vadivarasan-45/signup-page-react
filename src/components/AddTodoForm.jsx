import { useState } from "react"

function AddTodoForm(props)
{
  const tolist=props.tolist
  const settolist=props.settolist

  const [n,setn] = useState()
  
  function o(e)
  {
   setn(e.target.value)
  }

  function a()
  {
    settolist([...tolist,{no:tolist.length+1,activity:n}])
    setn("")
  }


  return (
    <div className='flex flex-col gap-5'>
          <h1 className='text-2xl font-medium'>Manage Activities</h1>
          <div>
          <input value={n} onChange={o} className='border border-black bg-transparent p-1' type='text' placeholder='Next Activity?'></input>
          <button onClick={a} className='bg-black text-white border border-black p-1'>Add</button>
          </div>
          </div>
  )
}

export default AddTodoForm