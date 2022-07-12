import * as types from "./actionTypes";

export const completeDone = (inpro) => ({
    type: types.COMPLETE_DONE,
    payload: inpro,
});

export const addDone = (inpro) => ({
    type: types.ADD_DONE,
    payload: inpro,

});
