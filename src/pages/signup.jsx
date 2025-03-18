import { useState } from "react"
import {Link, useNavigate} from "react-router-dom"
function Signup(props)
{
  const user=props.user
  const setuser=props.setuser

  const [one,setone]=useState("")
  const [two,settwo]=useState("")
  const Tar=useNavigate()

  function a(e)
  {
    setone(e.target.value)
  }

  function b(e)
  {
    settwo(e.target.value)
  }
  function add()
  {
    setuser([...user,{name:one,pass:two}])
    Tar("/")
  }

    return(
        <div className='bg-black p-10'>
          <div className='bg-white p-10 border rounded-md text-black flex flex-col gap-3'>
            <h1 className='text-2xl font-medium'>Hey Hi</h1>
            <p>I help you manager your activities after you login:)</p>
            <input onChange={a} type='text' placeholder='Username' className='border border-black rounded-lg p-1 bg-transparent w-52 required'></input>
            <input onChange={b} type='text' placeholder='password' className='border border-black rounded-md p-1 bg-transparent w-52 required'></input>
            <input type='text' placeholder='Confirm password' className='border border-black rounded-md p-1 bg-transparent w-52'></input>
            <button onClick={add} className='p-2 bg-yellow-400 border rounded-lg font-medium w-20'>Sign up</button>
            <div className='flex '>
            <p>Already have an account? <Link to={'/'} className="underline">Login</Link></p>
            </div>
    
          </div>
    
        </div>)
}
export default Signup