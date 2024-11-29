import { useState } from "react";

function Input(props){
    const[value,setValue] = useState("")

    function handleInput(e){
        setValue(e.target.value)
    }

    function handleTask(){
        props.addTask(value)
        setValue("")
    }
    return(
        <>
            <div>
                <label htmlFor="">Task Name: </label>
                <input value={value} className="input-10 border-2	border-gray-900 rounded-lg" type="text" onChange={handleInput}/>
                <button onClick={handleTask}>Add Task</button>
            </div>
        </>
    )
}

export default Input;