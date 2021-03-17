
function Tasks({data,handleDelete,handleMarked}) {
    
    return (
        <div className="tasks">
            {
               data.map((cur)=>{
                return <Task 
                    key = {cur.id}
                    title = {cur.title}
                    date = {cur.date}
                    time = {cur.time}
                    isMarked = {cur.isMarked}
                    remove = {()=>handleDelete(cur.id)}
                    handleMarked = {()=>handleMarked(cur.id)}
                />
               })
                
            }
            
        </div>
    )
}

function Task({title,date,time,id,remove,isMarked,handleMarked}) {
    
    return (
        <div className={`task ${isMarked ? "marked" : ""}`} onDoubleClick = {handleMarked}>
            <div>
                <h3>{title}</h3>
                <p>{date}</p>
                <p>{time}</p>
            </div>
            <button className="btn" onClick={remove}>delete</button>
        </div>
    )
}


export default Tasks;