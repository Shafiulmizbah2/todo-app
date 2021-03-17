import React ,{ useState } from 'react'
import Header from './components/Header'
import Form from './components/Form'
import Tasks from './components/task'
function App() {
  
    const [data,SetData] = useState([]);
    const [toggleForm , setToggleForm ] =  useState(false);
    const [ title , setTitle ] = useState("");
    const [ date , setDate ] = useState("");
    const [ time , setTime ] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(title && date && time){
          const newData = {title,date,time,id:new Date().getTime().toString(),isMarked: false};//{title,date,time} - means => title:title,data:data,time:time
          SetData([...data,newData]);
          setTitle("");
          setDate("");
          setTime("");
        }
    }

    const handleDelete = (id)=>{
      const newData = data.filter((cur)=> cur.id !== id );
      SetData(newData);
      console.log(data);
    }

    const handleMarked = (id)=>{
      console.log("clicked");
      SetData(
        data.map((cur)=>{
          return cur.id ===id ? {...cur,isMarked : !cur.isMarked} : cur;
        })
      )
    }

  return (
    <div className="container">
      <Header 
        toggleForm = {toggleForm}
        setToggleForm = {setToggleForm}
      /> 
      {
        toggleForm ? <Form 
        data = {data}
        title = {title}
        time = {time}
        date = {date}
        handleSubmit = {handleSubmit}
        setTitle = {setTitle}
        setDate = {setDate}
        setTime = {setTime}
      /> : ""
      }
      
      <Tasks 
        data = {data}
        handleDelete = {handleDelete}
        handleMarked = {handleMarked}
      />
    </div>
  );
}

export default App;
