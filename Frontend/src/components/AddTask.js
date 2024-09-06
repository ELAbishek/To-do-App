import { useState } from "react";
import Button from "./Button";
import AddButton from "./AddButton";



const AddTask = ({item}) => {
  const [ taskname, setTaskname ] = useState("");
  const [ sdate, setsDate ] = useState("");
  const [ edate, seteDate] = useState("");
  const [ reminder, setReminder ] = useState(false); 
  item = {taskname, sdate, edate}
  const handleClick=(e)=>{
    e.preventDefault()
    
    // console.log(item)
    fetch("http://localhost:8080/add",{
        method : "POST",
        headers : {"Content-Type":"application/json"},
        body:JSON.stringify(item)
      })
  }
  
  return (
    <form className="add-form" >
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          placeholder="Add Task"
          value={taskname}
          onChange={(e) => setTaskname(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Start date</label>
        <input
          type="date"
          placeholder="Add Start date"
          value={sdate}
          onChange={(e) => setsDate(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>End date</label>
        <input
          type="date"
          placeholder="Add End date"
          value={edate}
          onChange={(e) => seteDate(e.target.value)}
        />
      </div>

      <AddButton value="Save Task" className="btn btn-block" onClick = {handleClick} />
      {taskname}
      {sdate}
      {edate}
    </form>
    
  );
};

export default AddTask;
