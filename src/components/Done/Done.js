import React, {useState} from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import "../../styles/Todo.css"

const Done = ({toggleDone, task,descr,completed}) => {

    return(
        <TransitionGroup className={completed ? "Todo completed" : "Todo"}>
          
            <CSSTransition key="normal" timeout={500} classNames="task-text">
                <li className="Todo-task" onClick={toggleDone}>
                    {task} - {descr}
                </li>
            </CSSTransition>
            
        </TransitionGroup>
    );
};

export default Done;
