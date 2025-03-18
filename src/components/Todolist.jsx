import TodoIteam from "./TodoIteam"

function Todolist(props)
{
  const tolist=props.tolist
  const settolist=props.settolist
  return (
    <div className='bg-[#BDB4EA] border rounded-md p-2 flex-grow'>
        <h1 className='text-2xl font-medium'>Today's Activity</h1>
        {tolist.length===0?<p>You haven't added anything yet"</p>:""}
        {
            tolist.map(function(iteam,index)
        {
            return(<div>
            <TodoIteam no={iteam.no} index={index} iteam={iteam.activity} tolist={tolist} settolist={settolist}/>
            </div>
            )
        })
        }
      </div>
  )
}
export default Todolist