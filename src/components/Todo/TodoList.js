import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useSelector, useDispatch } from "react-redux";

import "../../styles/TodoList.css"
import Todo from "./Todo"
import { completeTodo,removeTodo, updateTodo } from "../../redux/todo/action";

const TodoList = () => {
    const state = useSelector((state)=> ({...state.todos}));
    let dispatch = useDispatch();

    const update = (id, updatedTask,updatedDescr) => {
        dispatch(updateTodo({id,updatedTask,updatedDescr}));
    }

    return(
        <div className="TodoList">
            <h1>To do</h1>
            <u1>
                <TransitionGroup className="todo=list">
                    {state.todos && 
                        state.todos.map((todo) => {
                            return(
                                <CSSTransition key={todo.id} classNames="todo">
                                    <Todo 
                                        key={todo.id}
                                        id={todo.id}
                                        task={todo.task}
                                        descr={todo.descr}
                                        completed ={todo.completed}
                                        toggleTodo={()=> dispatch(completeTodo(todo))}
                                        removeTodo={()=> dispatch(removeTodo(todo))}
                                        updateTodo={update}
                                    />
                                </CSSTransition>
                            );
                        })}
                </TransitionGroup>
            </u1>
        </div>
    );
};

export default TodoList;