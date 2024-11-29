function List(props){

    return(
        <>
          <ol className="list-100 flex flex-col justify-center items-center">
            {props.taskArray.map((task,idx)=>{
          return (
                <li className="li-10 text-3xl m-3" key={idx}>
                {idx + 1}: {task}
                <button title="Delete Task"
                    onClick={() => props.handleDelete(idx)} 
                    style={{ marginLeft: "10px", cursor: "pointer" }}
                >
                    ❌
                </button>
                </li>
                )
            })}
          </ol>
        </>
    )
}

export default List;    