import * as types from "./actionTypes";
import { v4 as uuidv4 } from "uuid";


const initialState = {
    dones: [{ id: null, task: "Done Task" ,descr: "Done Description ",completed: false}],
};

const doneReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.COMPLETE_DONE:
            const toggleDones = state.dones.map((t) =>
                t.id === action.payload.id
                    ? { ...action.payload, completed: !action.payload.completed}
                    : t
            );
            return {
                ...state,
                dones: toggleDones,
            };
        case types.ADD_DONE:
                const newTodo = {
                    id: uuidv4(),
                    task: action.payload,
                    descr: action.payload,
                    completed: false,
                };
                const addedInpro = [...state.dones, newTodo];
                return{
                    ...state,
                    dones: addedInpro,
                }    
        default:
            return state;
    }
};

export default doneReducer;