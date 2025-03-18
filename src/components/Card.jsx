function Card(i)
{
    return(
        <div style={{backgroundColor:i.bgcolor}} className="px-5 py-5 border rounded-md text-center flex-grow">
            <p className="font-medium text-2xl">{i.title}</p>
            <p>{i.sub}</p>
        </div>
    )
}
export default Card