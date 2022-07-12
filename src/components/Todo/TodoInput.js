import React, {useState} from "react";
import "../../styles/TodoInput.css";

const TodoInput = ({createTodo}) => {
    const[task,setTask] = useState("");
    const[descr,setDescr] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        createTodo(task,descr);
        setTask("");
        setDescr("");
    };

    return(
        <form className="TodoInput" onSubmit={handleSubmit}>
            <input
                type="text" placeholder="Ingresar Task"
                id="task" name="task" value={task}
                onChange={(e)=> setTask(e.target.value)}
            />
            <input 
                type="text" placeholder="Ingresar Descripcion"
                id="descr" name="descr" value={descr}
                onChange={(e)=> setDescr(e.target.value)}
            />
            <button>Add Task</button>
        </form>

    );
};

export default TodoInput;