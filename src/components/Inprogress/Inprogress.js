import React, {useState} from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import "../../styles/Todo.css"

const Inprogress = ({toggleInpro, task,descr,id,completed, updateInpro}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editTask, setEditTask] = useState(task);
    const [editDescr, setEditDescr] = useState(descr);


    const handleUpdate = (e) =>{
        e.preventDefault();
        updateInpro(id, editTask,editDescr);
        setIsEditing(false);
    };

    return(
        <TransitionGroup className={completed ? "Todo completed" : "Todo"}>
            {isEditing ?(
                <CSSTransition key="editing" timeout={500} classNames="form">
                    <form className="todo-edit-form" onSubmit={handleUpdate  }>
                        <input 
                            type="text"  
                            name="task" value={editTask}
                            onChange={(e)=> setEditTask(e.target.value)}
                        />
                        <input 
                            type="text"  
                            name="descr" value={editDescr}
                            onChange={(e)=> setEditDescr(e.target.value)}
                        />
                        <button>Guardar</button>
                    </form>
                </CSSTransition>
            ):(
            <CSSTransition key="normal" timeout={500} classNames="task-text">
                <li className="Todo-task" onClick={toggleInpro}>
                    {task} - {descr}
                </li>
            </CSSTransition>
            )}
            
            <div className="Todo-buttons">
                <button onClick={()=> setIsEditing(true)}>
                    <i className="fas fa-pen" />
                </button>
            </div>
        </TransitionGroup>
    );
};

export default Inprogress;
