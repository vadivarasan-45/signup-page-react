function TodoIteam(props)
{
    const tolist=props.tolist
    const settolist=props.settolist

    function o(id)
    {
      var n = tolist.filter(function(iteam)
    {
        if(iteam.no===id)
        {
            return false
        }
        else
        {
            return true
        }
    })
     settolist(n)    
    }
  return(
    <div className="flex justify-between">
        <p>{props.index+1}.{props.iteam}</p>
        <button className="text-red-700" onClick={()=>o(props.no)}>Delete</button>
    </div>
  )
}
export default TodoIteam