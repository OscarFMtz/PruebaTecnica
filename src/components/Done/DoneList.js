import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useSelector, useDispatch } from "react-redux";

import "../../styles/TodoList.css"

import Done from "./Done"


import { completeDone } from "../../redux/Done/action";

const DoneList = () => {
    const state = useSelector((state)=> ({...state.dones}));
    let dispatch = useDispatch();

    return(
        <div className="TodoList">
            <h1> Done </h1>
            <u1>
                <TransitionGroup className="todo=list">
                    {state.dones && 
                        state.dones.map((todo) => {
                            return(
                                <CSSTransition key={todo.id} classNames="todo">
                                    <Done 
                                        key={todo.id}
                                        id={todo.id}
                                        task={todo.task}
                                        completed ={todo.completed}
                                        descr={todo.descr}
                                        toggleDone={()=> dispatch(completeDone(todo))}
                                    />
                                </CSSTransition>
                            );
                        })}
                </TransitionGroup>
            </u1>
        </div>
    );
};

export default DoneList;