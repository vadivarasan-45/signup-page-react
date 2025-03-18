import Header from "../components/Header"
import Card from "../components/Card"
import TodoContainer from "../components/Todocontainer"
import { useLocation } from "react-router-dom"
function Land()
{
    const data=useLocation()
 return(
    <div className='bg-black p-16'>
      <div className='bg-white p-10 border rounded-md'>
        <Header name={data.state.user}/>
        <div className='flex justify-between gap-7 my-5 flex-wrap'>
        <Card bgcolor={"#8272DA"} title={"23"} sub={"Chennai"}/>
        <Card bgcolor={"#FD6663"} title={"December"} sub={"14:03:34"}/>
        <Card bgcolor={"#FCA201"} title={"Bulit Using"} sub={"React"}/>
        </div>
       <TodoContainer/> 
      </div>
    </div>
 )
}
export default Land