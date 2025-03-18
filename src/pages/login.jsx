import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
function Login(props)
{
  const user=props.user

  const [tname,settname]=useState("")
  const [tpass,settpass]=useState("")
  const [rus,setrus]=useState(true)
  const Nav=useNavigate()
  function one(e)
  {
   settname(e.target.value)
  }
  function two(e)
  {
   settpass(e.target.value)
  }
  function add()
  {
    var t=false
   user.forEach(function(iteam)
   {
    if(iteam.name===tname && iteam.pass===tpass)
      {
       console.log("sucess")
       t=true
       Nav("/land",{state:{user:tname}})
      }
   })
   if(t===false)
    {
     console.log("Please login")
     setrus(false)
    }
  }
 return(
    <div className='bg-black p-10'>
          <div className='bg-white p-10 border rounded-md text-black flex flex-col gap-3'>
            <h1 className='text-2xl font-medium'>Hey Hi</h1>
            {rus? <p>I help you manager your activities after you login:)</p>: <p className="text-red-500">Please Sign up Before you Login</p>}
            <input onChange={one} type='text' placeholder='Username' className='border border-black rounded-lg p-1 bg-transparent w-52'></input>
            <input onChange={two} type='text' placeholder='password' className='border border-black rounded-md p-1 bg-transparent w-52'></input>
            <button onClick={add} className='p-2 bg-purple-600 border rounded-lg font-medium w-20'>Login</button>
            <div className='flex '>
            <p>Don't have an account? <Link to={'/Signup'} className="underline">Sign up</Link></p>
            </div>
    
          </div>
    
        </div>
 )
}
export default Login