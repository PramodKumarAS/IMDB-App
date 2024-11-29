import { useState } from "react";
import Input from "./Input";
import List from "./List";

function Todo(){
    const [taskArray,setTaskArr] = useState([]);
    
    function addTask(val){
        setTaskArr(prev => [...prev, val]);
    }

    function handleDelete(idx){
        setTaskArr(prev => prev.filter((_, index) => index !== idx));
    }

    return(
        <>
          <Input addTask={addTask}/>
          <List taskArray = {taskArray} handleDelete={handleDelete}></List>
        </>
      )
}

export default Todo;