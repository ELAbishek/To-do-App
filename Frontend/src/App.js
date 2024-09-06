import Header from "./components/Header";
import Button from "./components/Button";
import AddTask from "./components/AddTask";
import Paper from '@material-ui/core/Paper';
import AddButton from "./components/AddButton";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useEffect, useState } from "react";
import ShowTask from "./components/ShowTask";
import DelButton from "./components/DelButton"

function App() {
  const [togForm, settogForm] = useState(false);
  const [tasks, setTasks] = useState([])
  const [ taskname, setTaskname ] = useState("");
  const [ sdate, setsDate ] = useState("");
  const [ edate, seteDate] = useState("");
  const item = {taskname, sdate, edate}
  const handleClick=(e)=>{
    e.preventDefault()
    
    // console.log(item)
    fetch("http://localhost:8080/add",{
        method : "POST",
        headers : {"Content-Type":"application/json"},
        body:JSON.stringify(item)
      })
  }
  const del=(id)=>{
    fetch(`http://localhost:8080/tasks/${id}`,{
        method : "DELETE",
        headers : {"Content-Type":"application/json"},
      })
  }
  useEffect(()=> {
      fetch("http://localhost:8080/tasks")
      .then(res=>res.json())
      .then((result)=>{
        setTasks(result);
      })
    })

    
    
  return (
    
    <div className="App">
      <Header></Header>
      <div className="container">
        {/* <Button onClick={() => settogForm(!togForm)} showTog={togForm}></Button> */}
        {/* {togForm && <AddTask  />}  */}
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

    </form>
        
    {tasks.map(item => 
    <Paper elevation = {6} style = {{margin:"10px",padding:"15px", textAlign:"left"}} key = {item.id}>
      {item.id}.
      task = {item.taskname}
      start Date = {item.sdate}
      end Date = {item.edate}
      <DelButton onClick = {() => del(item.id)}/>
    </Paper>)}
      </div>
      
    </div>
  );
}

export default App;
