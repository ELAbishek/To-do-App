import React from "react";
import Paper from '@material-ui/core/Paper';
import { useEffect, useState } from "react";
import AddTask from "./AddTask";


const ShowTask = () => {
    const [tasks, setTasks] = useState([])
    useEffect(()=> {
        fetch("http://localhost:8080/tasks")
        .then(res=>res.json())
        .then((result)=>{
          setTasks(result);
        })
      })
  return (
    <div>
      <Paper elevation={3}>My tasks</Paper>
    </div>
  );
};

export default ShowTask;
