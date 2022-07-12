import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useSelector, useDispatch } from "react-redux";

import "../../styles/TodoList.css"
import Inprogress from "./Inprogress"
import { completeInpro, updateInpro } from "../../redux/inProgress/action";

const InprogressList = () => {
    const state = useSelector((state)=> ({...state.inprogress}));
    let dispatch = useDispatch();

    const update = (id, updatedTask,updatedDescr) => {
        dispatch(updateInpro({id,updatedTask,updatedDescr}));
    }

    return(
        <div className="TodoList">
            <h1> In progress</h1>
            <u1>
                <TransitionGroup className="todo=list">
                    {state.inprogress && 
                        state.inprogress.map((todo) => {
                            return(
                                <CSSTransition key={todo.id} classNames="todo">
                                    <Inprogress 
                                        key={todo.id}
                                        id={todo.id}
                                        task={todo.task}
                                        completed ={todo.completed}
                                        descr={todo.descr}
                                        toggleInpro={()=> dispatch(completeInpro(todo))}
                                        updateInpro={update}
                                    />
                                </CSSTransition>
                            );
                        })}
                </TransitionGroup>
            </u1>
        </div>
    );
};

export default InprogressList;