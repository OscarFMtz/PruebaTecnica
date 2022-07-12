import * as types from "./actionTypes";
import { v4 as uuidv4 } from "uuid";


const initialState = {
    inprogress: [{ id: null, task: "Inprogress Task" ,descr: "Inprogress Description",completed: false}],
};

const inprogressReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.COMPLETE_INPRO:
            const toggleInpro = state.inprogress.map((t) =>
                t.id === action.payload.id
                    ? { ...action.payload, completed: !action.payload.completed}
                    : t
            );
            return {
                ...state,
                inprogress: toggleInpro,
            };
        case types.ADD_INPRO:
                const newTodo = {
                    id: uuidv4(),
                    task: action.payload,
                    descr: action.payload,
                    completed: false,
                };
                const addedInpro = [...state.inprogress, newTodo];
                return{
                    ...state,
                    inprogress: addedInpro,
                }    
        case types.UPDATE_INPRO:
            const updatedInpro = state.inprogress.map((todo) => {
                if (todo.id === action.payload.id) {
                    return {
                        ...todo,
                        task: action.payload.updatedTask,
                        descr: action.payload.updatedDescr,
                    };
                }
                return todo;
            })
            return {
                ...state,
                inprogress: updatedInpro,
            };
        default:
            return state;
    }
};

export default inprogressReducer;