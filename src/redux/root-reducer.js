import { combineReducers } from "redux";

import todosReducer from "./todo/reducer";
import inprogressReducer from './inProgress/reducer';
import doneReducer from "./Done/reducer";

const rootReducer = combineReducers({
    todos: todosReducer,
    inprogress: inprogressReducer,
    dones: doneReducer,
});

export default rootReducer;