import Login from './pages/login';
import Signup from './pages/signup';
import Land from './pages/landing';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App()
{  
    const [user,setuser]=useState(
    [
      {
        name:"jk",
        pass:"123"
      }
    ]
  )
  return(
  <BrowserRouter>
  <Routes>
    <Route path='/signup' element={<Signup user={user} setuser={setuser}/>}></Route>
    <Route path='/' element={<Login user={user} setuser={setuser}/>}></Route>
    <Route path='/land' element={<Land/>}></Route>
    </Routes>
  </BrowserRouter>
)}
export default App;
